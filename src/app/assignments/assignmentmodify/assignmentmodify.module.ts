import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AssignmentmodifyPageRoutingModule } from './assignmentmodify-routing.module';

import { AssignmentmodifyPage } from './assignmentmodify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignmentmodifyPageRoutingModule,
    NgxDropzoneModule
  ],
  declarations: [AssignmentmodifyPage]
})
export class AssignmentmodifyPageModule {}
