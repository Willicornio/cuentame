import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegolibroPageRoutingModule } from './juegolibro-routing.module';

import { JuegolibroPage } from './juegolibro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegolibroPageRoutingModule
  ],
  declarations: [JuegolibroPage]
})
export class JuegolibroPageModule {}
