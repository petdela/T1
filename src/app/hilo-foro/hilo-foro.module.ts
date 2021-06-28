import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {HiloForoPageRoutingModule} from './hilo-foro-routing.module';

import {HiloForoPage} from './hilo-foro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HiloForoPageRoutingModule,
  ],
  declarations: [HiloForoPage],
})
export class HiloForoPageModule {}
