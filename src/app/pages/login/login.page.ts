import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
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
    ) { }

    displayName$: Observable<string> = this.userService.displayName$;

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get errorControl() {
    return this.loginForm.controls;
  }

  login() {
    if (!this.loginForm.valid) {
      return
    }
    

    this.authService.loginUser(this.loginForm.getRawValue()).then(res => {
      if(res){
       
        this.displayName$.subscribe(data =>{
          let id = data
         if(data){
          debugger
           this.userService.getUserById(id).subscribe((res => {
             this.user = res;
             this.userName = res.nome;
             if(!this.user.status){
              // this.userService.getToUser(this.user)
              this.router.navigate(['/user-register']);
             }else if(this.user.status){

              this.router.navigate(['/home']);
             }
           }))
    
           
         }
       })
      }
      
    })
  }

  
    // }){
    //   
    // }
  

  // async login() {
  //   const loading = await this.loadingCtrl.create();
  //   await loading.present();
  //   if (this.loginForm?.valid) {
  //     const user = await this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password)
  //       .catch((error) =>{
  //         console.log(error);
  //         loading.dismiss();
  //       })

  //       if(user){
  //         debugger
  //         loading.dismiss();
  //         this.router.navigate(['./home'])
  //       }else{
  //         console.log('provide correct values')
  //       }
  //   }
  // }

}



