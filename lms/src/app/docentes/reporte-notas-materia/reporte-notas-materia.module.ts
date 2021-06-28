import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ReporteNotasMateriaPageRoutingModule}
  from './reporte-notas-materia-routing.module';

import {ReporteNotasMateriaPage} from './reporte-notas-materia.page';
import {MaterialModule} from 'src/app/material.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteNotasMateriaPageRoutingModule,
    MaterialModule,

  ],
  declarations: [ReporteNotasMateriaPage],
})
export class ReporteNotasMateriaPageModule {}
