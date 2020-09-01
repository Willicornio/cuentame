import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VotacionesconcursoPageRoutingModule } from './votacionesconcurso-routing.module';

import { VotacionesconcursoPage } from './votacionesconcurso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VotacionesconcursoPageRoutingModule
  ],
  declarations: [VotacionesconcursoPage]
})
export class VotacionesconcursoPageModule {}
