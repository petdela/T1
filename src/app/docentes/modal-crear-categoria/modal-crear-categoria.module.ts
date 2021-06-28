import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';
import {ReactiveFormsModule} from '@angular/forms';
import {ModalCrearCategoriaPageRoutingModule}
  from './modal-crear-categoria-routing.module';

import {ModalCrearCategoriaPage} from './modal-crear-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCrearCategoriaPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ModalCrearCategoriaPage],
})
export class ModalCrearCategoriaPageModule {}
