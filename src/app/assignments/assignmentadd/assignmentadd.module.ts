import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AssignmentaddPageRoutingModule } from './assignmentadd-routing.module';

import { AssignmentaddPage } from './assignmentadd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignmentaddPageRoutingModule,
    NgxDropzoneModule
  ],
  declarations: [AssignmentaddPage]
})
export class AssignmentaddPageModule {}
