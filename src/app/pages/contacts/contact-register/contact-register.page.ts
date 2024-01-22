import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-contact-register',
  templateUrl: './contact-register.page.html',
  styleUrls: ['./contact-register.page.scss'],
})
export class ContactRegisterPage implements AfterViewInit {

  mainContact: boolean;
  value: string;
 

  constructor( private shareService: ShareService,) { }

  ngAfterViewInit(): void {
    this.shareService.value.subscribe(
      value => this.value = value
      
    )
    if (this.value === 'mainContact') {
      this.mainContact = true;
    } else {
      this.mainContact = false;
    }
  }

  createMainCont(param: any){

  }

  createMedCont(param: any){

  }

}
