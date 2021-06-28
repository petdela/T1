import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MateriasDocentePage} from './materias-docente.page';

const routes: Routes = [
  {
    path: '',
    component: MateriasDocentePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MateriasDocentePageRoutingModule {}
