import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainContact } from 'src/app/model/main-contact';
import { MedicalContact } from 'src/app/model/medical-contact';
import { MainContactService } from 'src/app/services/main-contact.service';
import { MedicalContactService } from 'src/app/services/medical-contact.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements AfterViewInit {
  @Output() changeType: EventEmitter<any> = new EventEmitter();
  public item: any

  mainContactList: boolean;
  mainContacts: MainContact[] = [];
  private mainContactSubscription: Subscription;
  value: string;

  listMeds: MedicalContact;
  private listMedSubscription: Subscription;

  constructor(
    private readonly service: MainContactService,
    private shareService: ShareService,
    private medicalService: MedicalContactService) 
  {



  }

 ngAfterViewInit(): void {
  this.shareService.value.subscribe(
    value => this.value = value
    
  )
  if (this.value === 'mainContact') {
    this.mainContactList = true;
    this.mainContactSubscription = this.service.getMainContact().subscribe(data => {
      this.mainContacts.push(data)
    })
  } else {
    this.mainContactList = false;
    this.listMedSubscription = this.medicalService.getMedicalContact().subscribe(data => {
      this.listMeds = data

    })
  }
 }
 clickButton(action: string){
  this.shareService.changeValue(action)
  // this.utilService.cliquei(action);
}

 

}
