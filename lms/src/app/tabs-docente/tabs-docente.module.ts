import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TabsDocentePageRoutingModule} from './tabs-docente-routing.module';

import {TabsDocentePage} from './tabs-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsDocentePageRoutingModule,
  ],
  declarations: [TabsDocentePage],
})
export class TabsDocentePageModule {}
