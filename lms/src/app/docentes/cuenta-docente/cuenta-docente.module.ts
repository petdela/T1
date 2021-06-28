import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CuentaDocentePageRoutingModule} from './cuenta-docente-routing.module';

import {CuentaDocentePage} from './cuenta-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaDocentePageRoutingModule,
  ],
  declarations: [CuentaDocentePage],
})
export class CuentaDocentePageModule {}
