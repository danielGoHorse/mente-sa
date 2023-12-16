import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoodPageRoutingModule } from './mood-routing.module';

import { MoodPage } from './mood.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoodPageRoutingModule,
    ComponentModule
  ],
  declarations: [MoodPage]
})
export class MoodPageModule {}
