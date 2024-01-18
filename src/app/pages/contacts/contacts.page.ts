import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainContact } from 'src/app/model/main-contact';
import { MedicalContact } from 'src/app/model/medical-contact';
import { MainContactService } from 'src/app/services/main-contact.service';
import { MedicalContactService } from 'src/app/services/medical-contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  mainContactList: boolean = true;
  mainContacts: MainContact[] = [];
  private mainContactSubscription: Subscription;
  
  listMeds: MedicalContact;
  private listMedSubscription: Subscription;

  constructor(private readonly service: MainContactService,
    private medicalService: MedicalContactService) {
    this.mainContactSubscription = this.service.getMed().subscribe(data => {
      this.mainContacts.push(data)
    })

    this.listMedSubscription = this.medicalService.getMed().subscribe(data => {
      this.listMeds = data
     
    })
   }


  ngOnInit() {
  }

}
