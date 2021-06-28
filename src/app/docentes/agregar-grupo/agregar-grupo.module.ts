import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AgregarGrupoPageRoutingModule} from './agregar-grupo-routing.module';

import {AgregarGrupoPage} from './agregar-grupo.page';
import {MaterialModule} from 'src/app/material.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarGrupoPageRoutingModule,
    MaterialModule,
  ],
  declarations: [AgregarGrupoPage],
})
export class AgregarGrupoPageModule {}
