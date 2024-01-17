import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalContactPage } from './medical-contact.page';
import { MedicalRegisterPage } from './medical-register/medical-register.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalContactPage
  },
  {
    path: 'medical-register',
    component: MedicalRegisterPage  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalContactPageRoutingModule {}
