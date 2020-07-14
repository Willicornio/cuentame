import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciolibroPageRoutingModule } from './iniciolibro-routing.module';

import { IniciolibroPage } from './iniciolibro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciolibroPageRoutingModule
  ],
  declarations: [IniciolibroPage]
})
export class IniciolibroPageModule {}
