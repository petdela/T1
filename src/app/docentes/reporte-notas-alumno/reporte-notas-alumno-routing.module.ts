import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ReporteNotasAlumnoPage} from './reporte-notas-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteNotasAlumnoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteNotasAlumnoPageRoutingModule {}
