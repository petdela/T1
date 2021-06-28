import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CrearAnuncioPageRoutingModule} from './crear-anuncio-routing.module';

import {CrearAnuncioPage} from './crear-anuncio.page';
import {ModalCrearAnuncioPage}
  from '../modal-crear-anuncio/modal-crear-anuncio.page';
import {ModalCrearAnuncioPageModule}
  from '../modal-crear-anuncio/modal-crear-anuncio.module';
import {ModalCrearCategoriaPageModule}
  from '../modal-crear-categoria/modal-crear-categoria.module';
import {ModalModificarCategoriaPageModule}
  from '../modal-modificar-categoria/modal-modificar-categoria.module';


@NgModule({
  entryComponents: [
    ModalCrearAnuncioPage,

  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearAnuncioPageRoutingModule,
    ModalCrearAnuncioPageModule,
    ModalCrearCategoriaPageModule,
    ModalModificarCategoriaPageModule,

  ],
  declarations: [CrearAnuncioPage],
})
export class CrearAnuncioPageModule {}
