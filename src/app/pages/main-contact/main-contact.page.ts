import { Component, OnInit } from '@angular/core';
import { MedicalContactService } from 'src/app/services/medical-contact.service';

@Component({
  selector: 'app-main-contact',
  templateUrl: './main-contact.page.html',
  styleUrls: ['./main-contact.page.scss'],
})
export class MainContactPage implements OnInit {

  constructor(private readonly service: MedicalContactService) { }

  ngOnInit() {
  }

}
