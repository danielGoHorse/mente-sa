import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalRegisterPageRoutingModule } from './medical-register-routing.module';

import { MedicalRegisterPage } from './medical-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalRegisterPageRoutingModule
  ],
  declarations: [MedicalRegisterPage]
})
export class MedicalRegisterPageModule {}
