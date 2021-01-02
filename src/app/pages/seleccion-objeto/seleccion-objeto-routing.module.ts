import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionObjetoPage } from './seleccion-objeto.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionObjetoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionObjetoPageRoutingModule {}
