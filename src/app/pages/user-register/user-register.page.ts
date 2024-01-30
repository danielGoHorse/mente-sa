import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ShareService } from 'src/app/services/share.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: ['./user-register.page.scss'],
})
export class UserRegisterPage implements OnInit {
  regForm: FormGroup;
  user!: User;
  constructor( public formBuilder: FormBuilder,
    private shareService: ShareService, 
    private userService: UserService,
    public router: Router
     ) { }

  ngOnInit() {
    this.user = (this.userService.getForm() ? this.userService.getForm() : new User());
    
    this.regForm = this.formBuilder.group({
      nome: [this.user.nome],
      email: [this.user.email],
      // password: [this.user.password],
      telefone:[this.user.telefone],
      // mainContact:['',[]]

    })
  }

  clickButton(action: string){
    this.shareService.changeValue(action)
    // this.utilService.cliquei(action);
  }

  save(){
     const param = {
      id_fire: this.user.id_fire,
      nome: this.regForm.value.nome,
      telefone: this.regForm.value.telefone,
      email: this.regForm.value.email,
    }

    this.userService.toEditUser(param).pipe().subscribe( data => {
      this.user = data;
      this.userService.sendForm(this.user);
      this.user = (this.userService.getForm() ? this.userService.getForm() : new User());
    }),(error) => {
      console.log(error)
    }
// this.userService.getUserById(this.user.id_fire);

  }

}
