import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendaraddPage } from './calendaradd.page';

const routes: Routes = [
  {
    path: '',
    component: CalendaraddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendaraddPageRoutingModule {}
