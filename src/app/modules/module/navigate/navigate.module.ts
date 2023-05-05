import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { NavigatePageRoutingModule } from './navigate-routing.module';

import { NavigatePage } from './navigate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavigatePageRoutingModule
  ],
  declarations: [NavigatePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavigatePageModule {}
