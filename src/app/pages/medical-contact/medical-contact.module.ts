import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MedicalContactPageRoutingModule } from './medical-contact-routing.module';
import { MedicalContactPage } from './medical-contact.page';
import { ComponentModule } from 'src/app/components/component.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalContactPageRoutingModule,
    ComponentModule
  ],
  declarations: [
    MedicalContactPage,

  ]
})
export class MedicalContactPageModule {
}
