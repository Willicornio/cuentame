import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciolibroPage } from './iniciolibro.page';

const routes: Routes = [
  {
    path: '',
    component: IniciolibroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciolibroPageRoutingModule {}
