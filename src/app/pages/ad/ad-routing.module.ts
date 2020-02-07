import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { AdPageComponent } from './ad-page/ad-page.component';


const routes: Routes = [{
  path: '',
  component: AdPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdRoutingModule { }
