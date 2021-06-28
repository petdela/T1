import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ForosPage} from './foros.page';

const routes: Routes = [
  {
    path: '',
    component: ForosPage,
  },
  {
    path: 'hilo-foro',
    loadChildren: () => import('../hilo-foro/hilo-foro.module')
        .then( (m) => m.HiloForoPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForosPageRoutingModule {}
