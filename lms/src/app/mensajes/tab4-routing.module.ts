import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Tab4Page} from './tab4.page';
import {RedactarPage} from '../redactar/redactar.page';
import {RedactarPageModule} from '../redactar/redactar.module';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page,
  },
];

@NgModule({
  entryComponents: [RedactarPage],
  imports: [RouterModule.forChild(routes), RedactarPageModule],
  exports: [RouterModule],
})
export class Tab4PageRoutingModule {}
