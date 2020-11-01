import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedditComponent } from './reddit.component';


const routes: Routes = [
  {
    path:'',
    component:RedditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedditRoutingModule { }
