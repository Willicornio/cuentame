import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaescenasPage } from './listaescenas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaescenasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaescenasPageRoutingModule {}
