import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrupoPage } from './grupo.page';

const routes: Routes = [
  {
    path: '',
    component: GrupoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrupoPageRoutingModule {}
