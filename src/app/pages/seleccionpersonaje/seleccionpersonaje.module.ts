import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionpersonajePageRoutingModule } from './seleccionpersonaje-routing.module';

import { SeleccionpersonajePage } from './seleccionpersonaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionpersonajePageRoutingModule
  ],
  declarations: [SeleccionpersonajePage]
})
export class SeleccionpersonajePageModule {}
