import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadosconcursoPage } from './resultadosconcurso.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadosconcursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadosconcursoPageRoutingModule {}
