import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ModalCrearAnuncioPageRoutingModule}
  from './modal-crear-anuncio-routing.module';

import {ModalCrearAnuncioPage} from './modal-crear-anuncio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCrearAnuncioPageRoutingModule,


  ],
  declarations: [ModalCrearAnuncioPage],
})
export class ModalCrearAnuncioPageModule {}
