import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifeComponent } from './life.component';

const routes: Routes = [
  {
    path: '',
    component: LifeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeRoutingModule {}
