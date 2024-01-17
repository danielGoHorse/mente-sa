import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferencesRoutingModule } from './preferences-routing.module';
import { MusicRegisterPage } from './music-register/music-register.page';
import { PlacesRegisterPage } from './places-register/places-register.page';
import { PhotoRegisterPage } from './photo-register/photo-register.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [MusicRegisterPage,PlacesRegisterPage,PhotoRegisterPage],
  imports: [
    CommonModule,
    PreferencesRoutingModule,
    FormsModule,
    IonicModule,
  ]
})
export class PreferencesModule { }
