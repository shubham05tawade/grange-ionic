import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulePage } from './module.page';

const routes: Routes = [
  {
    path: '',
    component: ModulePage
  },
  {
    path: 'navigate',
    loadChildren: () => import('./navigate/navigate.module').then( m => m.NavigatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulePageRoutingModule {}
