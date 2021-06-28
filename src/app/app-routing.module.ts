import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').
        then((m) => m.TabsPageModule),
  },
  {
    path: '',
    loadChildren: () => import('./tabs-docente/tabs-docente.module').
        then( (m) => m.TabsDocentePageModule),
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
