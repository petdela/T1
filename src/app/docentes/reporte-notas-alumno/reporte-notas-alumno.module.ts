import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ReporteNotasAlumnoPageRoutingModule}
  from './reporte-notas-alumno-routing.module';

import {ReporteNotasAlumnoPage} from './reporte-notas-alumno.page';
import {MaterialModule} from 'src/app/material.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteNotasAlumnoPageRoutingModule,
    MaterialModule,
  ],
  declarations: [ReporteNotasAlumnoPage],
})
export class ReporteNotasAlumnoPageModule {}
