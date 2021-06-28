import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ModalCrearCategoriaPage} from './modal-crear-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCrearCategoriaPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCrearCategoriaPageRoutingModule {}
