import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ReporteNotasMateriaPage} from './reporte-notas-materia.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteNotasMateriaPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteNotasMateriaPageRoutingModule {}
