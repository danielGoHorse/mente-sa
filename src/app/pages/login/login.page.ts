import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Observable, Subject } from 'rxjs';
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
  loginForm: FormGroup;
  user: User;

  userName: string;
  currentId_Fire: string;

  constructor(
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public authService: AuthService,
    public router: Router,
    private userService: UserService
  ) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
    
 
  }

  displayName$: Observable<string> = this.userService.displayName$;

  ngAfterViewInit() {

  }



  get errorControl() {
    return this.loginForm.controls;
  }

  login() {
    if (!this.loginForm.valid) {
      return
    }

    this.authService.loginUser(this.loginForm.getRawValue())
    .then(res => {
       if(res){
         //aqui estou buscando id do usuario logado
         this.displayName$.subscribe(data => {
          let id = data
          this.userService.getUserById(id).subscribe((res => {
            this.user = ((res));
            this.userName = res.nome;
            Object.assign(this.user)
            this.userService.sendForm(this.user);

            this.router.navigate(['/home']);
          }), (e) => {
            // if (e.error == 'Usuário não encontrado!') {
            //   this.router.navigate(['/user-register']);
            // }
            console.log(e.error);
            return

          })
        })
       }
      

    })
  }


}



