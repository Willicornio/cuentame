import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentocanvasPageRoutingModule } from './cuentocanvas-routing.module';

import { CuentocanvasPage } from './cuentocanvas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentocanvasPageRoutingModule
  ],
  declarations: [CuentocanvasPage]
})
export class CuentocanvasPageModule {}
