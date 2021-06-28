import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MateriasDocentePageRoutingModule}
  from './materias-docente-routing.module';

import {MateriasDocentePage} from './materias-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MateriasDocentePageRoutingModule,
  ],
  declarations: [MateriasDocentePage],
})
export class MateriasDocentePageModule {}
