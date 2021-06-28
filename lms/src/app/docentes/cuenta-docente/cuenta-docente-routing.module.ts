import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CuentaDocentePage} from './cuenta-docente.page';

const routes: Routes = [
  {
    path: '',
    component: CuentaDocentePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentaDocentePageRoutingModule {}
