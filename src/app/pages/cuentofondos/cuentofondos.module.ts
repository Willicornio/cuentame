import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentofondosPageRoutingModule } from './cuentofondos-routing.module';

import { CuentofondosPage } from './cuentofondos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentofondosPageRoutingModule
  ],
  declarations: [CuentofondosPage]
})
export class CuentofondosPageModule {}
