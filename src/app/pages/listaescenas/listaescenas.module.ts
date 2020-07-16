import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaescenasPageRoutingModule } from './listaescenas-routing.module';

import { ListaescenasPage } from './listaescenas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaescenasPageRoutingModule
  ],
  declarations: [ListaescenasPage]
})
export class ListaescenasPageModule {}
