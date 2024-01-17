import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicRegisterPage } from './music-register/music-register.page';
import { PhotoRegisterPage } from './photo-register/photo-register.page';
import { PlacesRegisterPage } from './places-register/places-register.page';


const routes: Routes = [
  {
    path: 'music-register',
    component: MusicRegisterPage
  },
  {
    path: 'photo-register',
    component: PhotoRegisterPage
  },
  {
    path: 'places-register',
    component: PlacesRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreferencesRoutingModule {}
