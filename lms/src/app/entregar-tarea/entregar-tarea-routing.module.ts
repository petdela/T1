import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EntregarTareaPage} from './entregar-tarea.page';

const routes: Routes = [
  {
    path: '',
    component: EntregarTareaPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntregarTareaPageRoutingModule {}
