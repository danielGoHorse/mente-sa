import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainContactPage } from './main-contact.page';
import { MainRegisterPage } from './main-register/main-register.page';

const routes: Routes = [
  {
    path: '',
    component: MainContactPage
  },
  {
    path: 'register',
    component: MainRegisterPage
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainContactPageRoutingModule {}
