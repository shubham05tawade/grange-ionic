import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulesPage } from './modules.page';

const routes: Routes = [
  {
    path: '',
    component: ModulesPage
  },
  {
    path: 'module',
    loadChildren: () => import('./module/module.module').then( m => m.ModulePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesPageRoutingModule {}
