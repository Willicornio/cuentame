import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionObjetoPageRoutingModule } from './seleccion-objeto-routing.module';

import { SeleccionObjetoPage } from './seleccion-objeto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionObjetoPageRoutingModule
  ],
  declarations: [SeleccionObjetoPage]
})
export class SeleccionObjetoPageModule {}
