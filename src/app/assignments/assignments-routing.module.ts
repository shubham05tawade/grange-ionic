import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignmentsPage } from './assignments.page';

const routes: Routes = [
  {
    path: '',
    component: AssignmentsPage
  },
  {
    path: 'assignment',
    loadChildren: () => import('./assignment/assignment.module').then( m => m.AssignmentPageModule)
  },
  {
    path: 'assignmentadd',
    loadChildren: () => import('./assignmentadd/assignmentadd.module').then( m => m.AssignmentaddPageModule)
  },
  {
    path: 'assignmentmodify',
    loadChildren: () => import('./assignmentmodify/assignmentmodify.module').then( m => m.AssignmentmodifyPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentsPageRoutingModule {}
