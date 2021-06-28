import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AgregarGrupoPage} from './agregar-grupo.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarGrupoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarGrupoPageRoutingModule {}
