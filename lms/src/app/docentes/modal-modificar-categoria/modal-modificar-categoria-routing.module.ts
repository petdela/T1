import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ModalModificarCategoriaPage} from './modal-modificar-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: ModalModificarCategoriaPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalModificarCategoriaPageRoutingModule {}
