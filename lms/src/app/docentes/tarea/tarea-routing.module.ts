import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TareaPage} from './tarea.page';
import {CalificarComponent} from './calificar/calificar.component';
import {PresentacionComponent} from './presentacion/presentacion.component';

export const routes: Routes = [
  {
    path: '',
    component: TareaPage,
    children: [
      {
        path: '',
        component: CalificarComponent,

      },
      {
        path: 'presentacion/:id',
        component: PresentacionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareaPageRoutingModule {}
