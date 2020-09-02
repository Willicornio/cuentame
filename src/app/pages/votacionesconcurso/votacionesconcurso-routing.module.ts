import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VotacionesconcursoPage } from './votacionesconcurso.page';

const routes: Routes = [
  {
    path: '',
    component: VotacionesconcursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotacionesconcursoPageRoutingModule {}
