import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {RedactarPageRoutingModule} from './redactar-routing.module';

import {RedactarPage} from './redactar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedactarPageRoutingModule,
  ],
  declarations: [RedactarPage],
})
export class RedactarPageModule {}
