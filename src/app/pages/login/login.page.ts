import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Observable, Subject, map } from 'rxjs';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

import * as usuario from '../../../assets/db.json'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements AfterViewInit {
  email = '' as string;
  password = '' as string
  credencials:  any;
  user: User;


  // loginForm: FormGroup = this.formBuilder.group({
  //   email: ['', [Validators.required, Validators.email]],
  //   password: ['', [Validators.required, Validators.minLength(6)]]
  // })
  // user: User;

  userName: string;
  currentId_Fire: any;

  constructor(
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public auth: AuthService,
    public router: Router,
    private userService: UserService
  ) {

  }


  ngAfterViewInit() {
    this.user = new User;
  }

  login(email: any, password: any) {
    try {
      debugger
      this.auth.loginUser(email, password).then(res => {
        // this.credencials = JSON.stringify(res);
        // this.user.id_fire = res.user.uid;
        const resposta = ((res))
        const values = Object.values(resposta);
        this.credencials = values
        this.user.id_fire = this.credencials[0].uid
        this.getUser(this.user.id_fire);


      })





    }
    catch (error) {

      console.log(error);
    }
  }

  getUser(id_fire: string) {
    this.userService.getUserById(this.user.id_fire).subscribe(
      data => {
        this.currentId_Fire = data;
        this.user = this.currentId_Fire;
        console.log('>>>>>>>>>>>>currentId_Fire>>>>>>>>>>>>>>>', this.currentId_Fire)
        if (!this.user.status) {
          console.log('>>>>>>>>>>>>currentId_Fire>', this.user.status)
          this.userService.sendForm(this.user);
          this.router.navigate(['/user-register']);
        } else if (this.user.status) {
          this.userService.sendForm(this.user);
          this.router.navigate(['/home']);
        }
      }
    )
  }
}



// get errorControl() {
//   // return this.loginForm.controls;
// }

// async login() {
//   // if (!this.loginForm.valid) {
//   //   return
//   // }



//   this.authService.loginUser(this.loginForm.getRawValue())
//   .then(res => {
//     this.userService.sendForm(this.user);
//     //  if(res){
//     //    //aqui estou buscando id do usuario logado
//     //    this.displayName$.subscribe(data => {
//     //     let id = data
//     //     this.userService.getUserById(id).subscribe((res => {
//     //       this.user = ((res));
//     //       this.userName = res.nome;
//     //       Object.assign(this.user)
//     //

//           this.router.navigate(['/home']);
//         }), (e) => {
//           // if (e.error == 'Usuário não encontrado!') {
//           //   this.router.navigate(['/user-register']);
//           // }
//           console.log(e.error);
//           return

//         })
//       })
//      }


//   })
// }







