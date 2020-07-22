import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'canvas',
    loadChildren: () => import('./pages/cuentocanvas/cuentocanvas.module').then( m => m.CuentocanvasPageModule)
  },

  {
    path: 'cuentocanvas/:id',
    loadChildren: () => import('./pages/cuentocanvas/cuentocanvas.module').then( m => m.CuentocanvasPageModule)
  },
  {
    path: 'seleccionpersonaje/:dataObj',
    loadChildren: () => import('./pages/cuentocanvas/cuentocanvas.module').then( m => m.CuentocanvasPageModule)
  },
  {
    path: 'cuentofondos/:dataObj',
    loadChildren: () => import('./pages/cuentocanvas/cuentocanvas.module').then( m => m.CuentocanvasPageModule)
  },
  {
    path: 'cuentofondos',
    loadChildren: () => import('./pages/cuentofondos/cuentofondos.module').then( m => m.CuentofondosPageModule)
  },
  {
    path: 'seleccionpersonaje',
    loadChildren: () => import('./pages/seleccionpersonaje/seleccionpersonaje.module').then( m => m.SeleccionpersonajePageModule)
  },
  {
    path: 'libro',
    loadChildren: () => import('./pages/libro/libro.module').then( m => m.LibroPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'iniciolibro',
    loadChildren: () => import('./pages/iniciolibro/iniciolibro.module').then( m => m.IniciolibroPageModule)
  },
  {
    path: 'listaescenas/:id',
    loadChildren: () => import('./pages/listaescenas/listaescenas.module').then( m => m.ListaescenasPageModule)
  }


  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
