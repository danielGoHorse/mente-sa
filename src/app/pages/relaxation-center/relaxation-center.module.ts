import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelaxationCenterPageRoutingModule } from './relaxation-center-routing.module';

import { RelaxationCenterPage } from './relaxation-center.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelaxationCenterPageRoutingModule
  ],
  declarations: [RelaxationCenterPage]
})
export class RelaxationCenterPageModule {}
