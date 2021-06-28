import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TareaRevisadaPageRoutingModule} from './tarea-revisada-routing.module';

import {TareaRevisadaPage} from './tarea-revisada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TareaRevisadaPageRoutingModule,
  ],
  declarations: [TareaRevisadaPage],
})
export class TareaRevisadaPageModule {}
