import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComComponent } from './web-com.component';


const routes: Routes = [
  {
    path: '',
    component: WebComComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebComRoutingModule { }
