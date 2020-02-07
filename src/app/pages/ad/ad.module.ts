import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdRoutingModule } from './ad-routing.module';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { AdDirective } from './ad.directive';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { AdPageComponent } from './ad-page/ad-page.component';
import { AdService } from './ad.service';


@NgModule({
  declarations: [AdBannerComponent, AdDirective, HeroJobAdComponent, HeroProfileComponent, AdPageComponent],
  imports: [
    CommonModule,
    AdRoutingModule
  ],
  providers: [AdService],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
})
export class AdModule { }
