import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ModalModificarCategoriaPageRoutingModule}
  from './modal-modificar-categoria-routing.module';

import {ModalModificarCategoriaPage} from './modal-modificar-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalModificarCategoriaPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ModalModificarCategoriaPage],
})
export class ModalModificarCategoriaPageModule {}
