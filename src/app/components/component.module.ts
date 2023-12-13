import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PanicButtonModule } from './panic-button/panic-button.module';
import { HeaderModule } from './header/header.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanicButtonModule,
    HeaderModule
    
  ],
  exports: [
    PanicButtonModule,
    HeaderModule
    
  ],
  declarations: []
})
export class ComponentModule {
}
