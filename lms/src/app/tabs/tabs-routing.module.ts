import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
  {
    path: 'estudiante',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () =>
          import('../inicio/inicio.module').then( (m) => m.InicioPageModule),
      },
      {
        path: 'mis-materias',
        loadChildren: () =>
          import('../mis-materias/tab1.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'malla-curricular',
        loadChildren: () =>
          import('../malla-curricular/tab2.module').
              then((m) => m.Tab2PageModule),
      },
      {
        path: 'historial-academico',
        loadChildren: () =>
          import('../historial-academico/tab3.module').
              then((m) => m.Tab3PageModule),
      },
      {
        path: 'mensajes',
        loadChildren: () =>
          import('../mensajes/tab4.module').then( (m) => m.Tab4PageModule),
      },
      {
        path: 'cuenta',
        loadChildren: () =>
          import('../cuenta/tab5.module').then( (m) => m.Tab5PageModule),
      },
      {
        path: '',
        redirectTo: '/estudiante/inicio',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/estudiante/inicio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
