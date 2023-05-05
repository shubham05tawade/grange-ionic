import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignmentPage } from './assignment.page';

const routes: Routes = [
  {
    path: '',
    component: AssignmentPage
  },
  {
    path: 'assignmentmodify',
    loadChildren: () => import('../assignmentmodify/assignmentmodify.module').then( m => m.AssignmentmodifyPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentPageRoutingModule {}
