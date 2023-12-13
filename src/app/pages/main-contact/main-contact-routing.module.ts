import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainContactPage } from './main-contact.page';

const routes: Routes = [
  {
    path: '',
    component: MainContactPage
  },
  {
    path: 'main-register',
    loadChildren: () => import('./main-register/main-register.module').then( m => m.MainRegisterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainContactPageRoutingModule {}
