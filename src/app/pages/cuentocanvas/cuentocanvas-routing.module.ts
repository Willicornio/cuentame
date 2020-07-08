import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentocanvasPage } from './cuentocanvas.page';

const routes: Routes = [
  {
    path: '',
    component: CuentocanvasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentocanvasPageRoutingModule {}
