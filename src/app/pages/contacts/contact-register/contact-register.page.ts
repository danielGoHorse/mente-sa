import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-register',
  templateUrl: './contact-register.page.html',
  styleUrls: ['./contact-register.page.scss'],
})
export class ContactRegisterPage implements OnInit {

  mainContact: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
