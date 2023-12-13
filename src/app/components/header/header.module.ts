import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../component.module';
import { HeaderComponent } from './header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    
  ]
})
export class HeaderModule { }
