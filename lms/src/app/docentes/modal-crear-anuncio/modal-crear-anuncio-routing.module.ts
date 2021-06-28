import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ModalCrearAnuncioPage} from './modal-crear-anuncio.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCrearAnuncioPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCrearAnuncioPageRoutingModule {}
