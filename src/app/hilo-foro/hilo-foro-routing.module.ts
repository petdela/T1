import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HiloForoPage} from './hilo-foro.page';

const routes: Routes = [
  {
    path: '',
    component: HiloForoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HiloForoPageRoutingModule {}
