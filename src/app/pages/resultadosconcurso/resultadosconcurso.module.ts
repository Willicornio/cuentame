import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadosconcursoPageRoutingModule } from './resultadosconcurso-routing.module';

import { ResultadosconcursoPage } from './resultadosconcurso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadosconcursoPageRoutingModule
  ],
  declarations: [ResultadosconcursoPage]
})
export class ResultadosconcursoPageModule {}
