import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentofondosPage } from './cuentofondos.page';

const routes: Routes = [
  {
    path: '',
    component: CuentofondosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentofondosPageRoutingModule {}
