import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {NewTrabajoPageRoutingModule} from './new-trabajo-routing.module';

import {NewTrabajoPage} from './new-trabajo.page';
import {MaterialModule} from 'src/app/material.module';
import {NgxDropzoneModule} from 'ngx-dropzone';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewTrabajoPageRoutingModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    MaterialModule,
  ],
  declarations: [NewTrabajoPage],
})
export class NewTrabajoPageModule {}
