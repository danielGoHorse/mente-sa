import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainContact } from 'src/app/model/main-contact';
import { MainContactService } from 'src/app/services/main-contact.service';
import { MedicalContactService } from 'src/app/services/medical-contact.service';

@Component({
  selector: 'app-main-contact',
  templateUrl: './main-contact.page.html',
  styleUrls: ['./main-contact.page.scss'],
})
export class MainContactPage implements OnInit {

  mainContacts: MainContact;
  private mainContactSubscription: Subscription;

  constructor(private readonly service: MainContactService) {
    this.mainContactSubscription = this.service.getMed().subscribe(data => {
      this.mainContacts = data
    })
   }

  ngOnInit() {
  }



}
