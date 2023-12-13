import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelaxationCenterPage } from './relaxation-center.page';

const routes: Routes = [
  {
    path: '',
    component: RelaxationCenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelaxationCenterPageRoutingModule {}
