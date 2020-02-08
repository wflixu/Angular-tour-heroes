import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectComponent } from './direct.component';


const routes: Routes = [
  {
    path: '',
    component: DirectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectRoutingModule { }
