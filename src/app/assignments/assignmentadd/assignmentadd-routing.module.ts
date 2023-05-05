import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignmentaddPage } from './assignmentadd.page';

const routes: Routes = [
  {
    path: '',
    component: AssignmentaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentaddPageRoutingModule {}
