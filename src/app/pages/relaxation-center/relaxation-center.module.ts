import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelaxationCenterPageRoutingModule } from './relaxation-center-routing.module';

import { RelaxationCenterPage } from './relaxation-center.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelaxationCenterPageRoutingModule,
    ComponentModule
  ],
  declarations: [RelaxationCenterPage]
})
export class RelaxationCenterPageModule {}
