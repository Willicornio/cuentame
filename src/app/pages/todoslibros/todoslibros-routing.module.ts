import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoslibrosPage } from './todoslibros.page';

const routes: Routes = [
  {
    path: '',
    component: TodoslibrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoslibrosPageRoutingModule {}
