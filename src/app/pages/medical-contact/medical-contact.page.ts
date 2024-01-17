import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MedicalContact } from 'src/app/model/medical-contact';
import { MedicalContactService } from 'src/app/services/medical-contact.service';

@Component({
  selector: 'app-medical-contact',
  templateUrl: './medical-contact.page.html',
  styleUrls: ['./medical-contact.page.scss'],
})
export class MedicalContactPage implements OnInit {

  listMeds = {};
  private listMedSubscription: Subscription;

  // listMed: MedicalContact[] = [];
  allList: any;

  constructor(private service: MedicalContactService) {

    this.listMedSubscription = this.service.getMed().subscribe(data => {
      this.listMeds = data;
    })



    }

  ngOnInit(): void{
 
  }



}
