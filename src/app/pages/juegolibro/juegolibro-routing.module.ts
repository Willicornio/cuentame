import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegolibroPage } from './juegolibro.page';

const routes: Routes = [
  {
    path: '',
    component: JuegolibroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegolibroPageRoutingModule {}
