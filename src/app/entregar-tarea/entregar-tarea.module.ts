import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {EntregarTareaPageRoutingModule} from './entregar-tarea-routing.module';

import {EntregarTareaPage} from './entregar-tarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntregarTareaPageRoutingModule,
  ],
  declarations: [EntregarTareaPage],
})
export class EntregarTareaPageModule {}
