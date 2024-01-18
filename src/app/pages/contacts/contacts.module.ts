import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsPageRoutingModule } from './contacts-routing.module';

import { ContactsPage } from './contacts.page';
import { ComponentModule } from 'src/app/components/component.module';
import { ContactRegisterPage } from './contact-register/contact-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    ContactsPageRoutingModule
  ],
  declarations: [ContactsPage, ContactRegisterPage]
})
export class ContactsPageModule {}
