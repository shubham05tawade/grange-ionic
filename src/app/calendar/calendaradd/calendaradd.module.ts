import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendaraddPageRoutingModule } from './calendaradd-routing.module';

import { CalendaraddPage } from './calendaradd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendaraddPageRoutingModule
  ],
  declarations: [CalendaraddPage]
})
export class CalendaraddPageModule {}
