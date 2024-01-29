import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  regForm: FormGroup;
  isErrorToastOpen = false;
  isOkToastOpen = false;
  user: User;
  credencials: any;

  constructor(
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public authService: AuthService,
    private userService: UserService,
    public router: Router) { }

  ngOnInit() {
    this.user = new User;
    this.regForm = this.formBuilder.group({
      nome: [''],
      email: ['', [
        Validators.required,
        Validators.email,
        // Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"),
      ]],
      password: ['', [
        Validators.required,
        // Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
      ]],
      status: [false],
      telefone: [''],
      id_fire: ['']
    })
  }




  get errorControl() {
    return this.regForm.controls;
  }

  async singUp() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if (this.regForm?.valid) {
      this.authService.registerUser(this.regForm.value.email, this.regForm.value.password)
        .then(data => {
          if (data) {
            this.user.id_fire = data.user.uid;
            this.user.email = data.user.email;
            const param = {
              id_fire: this.user.id_fire,
              nome: '',
              telefone: '',
              email: this.user.email,
              status: false
            }
            this.userService.registerUser(param).subscribe(data => {
              console.log(data)
            })
            loading.dismiss();
            this.setOkOpen(true)
            setTimeout(() => {
              this.router.navigate(['./login'])
            }, 3000);
            console.log(this.user);
          }
        })
        .catch((e) => {
          console.log(e)
        })
      // .catch((error) => {
      //   this.setErrorOpen(true);
      //   loading.dismiss();
      // }).then((res) => {
      //   const resposta = ((res))
      //   console.log('REGISTROOOO', resposta)
      //   this.user.id_fire = this.credencials;
      // })

      // this.user = this.regForm.value;
      // const param = {
      //   id_fire: this.user.id_fire,
      //   nome: '',
      //   telefone: '',
      //   email: this.user.email,
      //   status: false
      // }
      // this.userService.registerUser(param)
      // loading.dismiss();
      // this.setOkOpen(true)
      // setTimeout(() => {
      //   this.router.navigate(['./login'])
      // }, 3000);

    }
  }

  setErrorOpen(isOpen: boolean) {
    this.isErrorToastOpen = isOpen;
  }

  setOkOpen(isOpen: boolean) {
    this.isOkToastOpen = isOpen;
  }
}
