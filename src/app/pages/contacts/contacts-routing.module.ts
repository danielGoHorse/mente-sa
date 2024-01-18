import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsPage } from './contacts.page';
import { ContactRegisterPage } from './contact-register/contact-register.page';

const routes: Routes = [
  {
    path: '',
    component: ContactsPage
  },
  {
    path: 'register',
    component: ContactRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsPageRoutingModule {}
