import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoslibrosPageRoutingModule } from './todoslibros-routing.module';

import { TodoslibrosPage } from './todoslibros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoslibrosPageRoutingModule
  ],
  declarations: [TodoslibrosPage]
})
export class TodoslibrosPageModule {}
