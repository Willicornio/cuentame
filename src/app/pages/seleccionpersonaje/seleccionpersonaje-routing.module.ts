import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionpersonajePage } from './seleccionpersonaje.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionpersonajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionpersonajePageRoutingModule {}
