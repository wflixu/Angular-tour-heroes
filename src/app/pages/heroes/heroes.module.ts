import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from 'src/app/pages/heroes/hero-detail/hero-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({
  declarations: [
    HeroListComponent,
    HeroSearchComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    HeroesRoutingModule,
  ]
})
export class HeroesModule { }
