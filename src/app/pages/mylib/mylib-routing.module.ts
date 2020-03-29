import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibtestComponent } from './libtest/libtest.component';


const routes: Routes = [
  {
    path:'',
    component:LibtestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MylibRoutingModule { }
