import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TareaPageRoutingModule} from './tarea-routing.module';

import {TareaPage} from './tarea.page';
import {MaterialModule} from 'src/app/material.module';
import {CalificarComponent} from './calificar/calificar.component';
import {PresentacionComponent} from './presentacion/presentacion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TareaPageRoutingModule,
    MaterialModule,
  ],
  exports: [TareaPage],
  declarations: [TareaPage, CalificarComponent, PresentacionComponent],
})
export class TareaPageModule {}
