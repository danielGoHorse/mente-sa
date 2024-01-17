import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainRegisterPageRoutingModule } from './main-register-routing.module';

import { MainRegisterPage } from './main-register.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainRegisterPageRoutingModule,
    ComponentModule
  ],
  declarations: [MainRegisterPage]
})
export class MainRegisterPageModule {}
