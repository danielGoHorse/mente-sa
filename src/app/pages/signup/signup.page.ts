import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  regForm: FormGroup;
  isErrorToastOpen = false;
  isOkToastOpen = false;

  constructor(
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public authService: AuthService,
    public router: Router) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [
        Validators.required,
        Validators.email,
        // Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"),
      ]],
      password: ['', [
        Validators.required,
        // Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
      ]]
    })
  }

  get errorControl() {
    return this.regForm.controls;
  }

  async singUp() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if (this.regForm?.valid) {
      const user = await this.authService.registerUser(this.regForm.value.email, this.regForm.value.password)
        .catch((error) =>{
          this.setErrorOpen(true);
          loading.dismiss();
        })
        loading.dismiss();
        this.setOkOpen(true)
        setTimeout(()=>{                           
          this.router.navigate(['./login'])
      }, 3000);

    }
  }

  setErrorOpen(isOpen: boolean) {
    this.isErrorToastOpen = isOpen;
  }

  setOkOpen(isOpen: boolean) {
    this.isOkToastOpen = isOpen;
  }
}
