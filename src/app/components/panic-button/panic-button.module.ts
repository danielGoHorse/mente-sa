import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PanicButtonComponent } from './panic-button.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    PanicButtonComponent
  ],
  declarations: [
    PanicButtonComponent
  ]
})
export class PanicButtonModule {
}