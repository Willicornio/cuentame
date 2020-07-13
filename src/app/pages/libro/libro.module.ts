import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibroPageRoutingModule } from './libro-routing.module';

import { LibroPage } from './libro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibroPageRoutingModule
  ],
  declarations: [LibroPage]
})
export class LibroPageModule {}
