import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/cuentocanvas/cuentocanvas.module').then( m => m.CuentocanvasPageModule)
  },
  {
    path: 'cuentocanvas',
    loadChildren: () => import('./pages/cuentocanvas/cuentocanvas.module').then( m => m.CuentocanvasPageModule)
  },
  {
    path: 'cuentofondos',
    loadChildren: () => import('./pages/cuentofondos/cuentofondos.module').then( m => m.CuentofondosPageModule)
  },  {
    path: 'seleccionpersonaje',
    loadChildren: () => import('./pages/seleccionpersonaje/seleccionpersonaje.module').then( m => m.SeleccionpersonajePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
