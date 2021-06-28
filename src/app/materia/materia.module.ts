import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MateriaPageRoutingModule} from './materia-routing.module';
import {ExploreContainerComponentModule}
  from '../explore-container/explore-container.module';

import {MateriaPage} from './materia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    IonicModule,
    MateriaPageRoutingModule,
  ],
  declarations: [MateriaPage],
})
export class MateriaPageModule {}
