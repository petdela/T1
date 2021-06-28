import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MateriaPage} from './materia.page';
import {TareaRevisadaPage} from '../tarea-revisada/tarea-revisada.page';
import {TareaRevisadaPageModule} from '../tarea-revisada/tarea-revisada.module';

const routes: Routes = [
  {
    path: '',
    component: MateriaPage,
  },
  {
    path: 'foros',
    loadChildren: () => import('../foros/foros.module').
        then( (m) => m.ForosPageModule),
  },
  {
    path: 'entregar-tarea',
    loadChildren: () => import('../entregar-tarea/entregar-tarea.module').
        then( (m) => m.EntregarTareaPageModule),
  },
  {
    path: 'tarea-revisada',
    loadChildren: () => import('../tarea-revisada/tarea-revisada.module').
        then( (m) => m.TareaRevisadaPageModule),
  },
  {
    path: 'grupos',
    loadChildren: () => import('../grupos/grupos.module').
        then( (m) => m.GruposPageModule),
  },
];

@NgModule({
  entryComponents: [TareaRevisadaPage],
  imports: [RouterModule.forChild(routes), TareaRevisadaPageModule],
  exports: [RouterModule],
})
export class MateriaPageRoutingModule {}
