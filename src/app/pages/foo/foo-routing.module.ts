import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { FooComponent } from './foo.component';

const routes: Routes = [
  {
    path: '',
    component: FooComponent,
    children: [{ path: 'bar', component: BarComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooRoutingModule {}
