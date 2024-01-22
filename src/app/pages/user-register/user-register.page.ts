import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: ['./user-register.page.scss'],
})
export class UserRegisterPage implements OnInit {
  regForm: FormGroup;
  constructor( public formBuilder: FormBuilder,private shareService: ShareService ) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"),
      ]],
      password: ['', [
        Validators.required,
        // Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
      ]],
      telefone:['',[ Validators.required,]],
      // mainContact:['',[]]

    })
  }

  clickButton(action: string){
    this.shareService.changeValue(action)
    // this.utilService.cliquei(action);
  }

}
