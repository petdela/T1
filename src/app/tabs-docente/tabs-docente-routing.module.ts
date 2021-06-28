import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TabsDocentePage} from './tabs-docente.page';

const routes: Routes = [
  {
    path: 'docente',
    component: TabsDocentePage,
    children: [
      {
        path: 'inicio',
        loadChildren: () =>
          import('../docentes/materias-docente/materias-docente.module').
              then( (m) => m.MateriasDocentePageModule),
      },
      {
        path: 'crear-anuncio',
        loadChildren: () =>
          import('../docentes/crear-anuncio/crear-anuncio.module').
              then( (m) => m.CrearAnuncioPageModule),
      },
      {
        path: 'grupos',
        loadChildren: () =>
          import('../docentes/grupos/grupos.module' ).
              then((m) => m.GruposPageModule),
      },
      {
        path: 'reporte-notas-alumno',
        loadChildren: () =>
          // eslint-disable-next-line max-len
          import('../docentes/reporte-notas-alumno/reporte-notas-alumno.module').
              then((m) => m.ReporteNotasAlumnoPageModule),
      },

      {
        path: 'reporte-notas-materia',
        loadChildren: () =>
          // eslint-disable-next-line max-len
          import('../docentes/reporte-notas-materia/reporte-notas-materia.module').
              then((m) => m.ReporteNotasMateriaPageModule),
      },
      {
        path: 'agregar-grupo',
        loadChildren: () =>
          import('../docentes/agregar-grupo/agregar-grupo.module').
              then( (m) => m.AgregarGrupoPageModule ),
      },
      {
        path: 'tarea',
        loadChildren: () => import('../docentes/tarea/tarea.module').
            then( (m) => m.TareaPageModule),
      },
      {
        path: 'new-trabajo',
        loadChildren: () =>
          import('../docentes/new-trabajo/new-trabajo.module').
              then( (m) => m.NewTrabajoPageModule),
      },
      {
        path: 'trabajo',
        loadChildren: () => import('../docentes/trabajo/trabajo.module').
            then( (m) => m.TrabajoPageModule),
      },
      {
        path: 'cuenta-docente',
        loadChildren: () =>
          import('../docentes/cuenta-docente/cuenta-docente.module').
              then( (m) => m.CuentaDocentePageModule),
      },
      {
        path: '',
        redirectTo: '/docente/inicio',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsDocentePageRoutingModule {}
