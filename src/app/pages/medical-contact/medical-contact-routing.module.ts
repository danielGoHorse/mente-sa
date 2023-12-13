import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalContactPage } from './medical-contact.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalContactPage
  },
  {
    path: 'medical-register',
    loadChildren: () => import('./medical-register/medical-register.module').then( m => m.MedicalRegisterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalContactPageRoutingModule {}
