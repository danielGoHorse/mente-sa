import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainContactPageRoutingModule } from './main-contact-routing.module';

import { MainContactPage } from './main-contact.page';
import { ComponentModule } from 'src/app/components/component.module';
import { HttpClientModule } from '@angular/common/http';
import { MainRegisterPage } from './main-register/main-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainContactPageRoutingModule,
    ComponentModule
  ],
  declarations: [MainContactPage, MainRegisterPage]
})
export class MainContactPageModule {}
