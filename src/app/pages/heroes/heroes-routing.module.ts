import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisListComponent } from 'src/app/crisis-list/crisis-list.component';
import { HeroListComponent } from 'src/app/pages/heroes/hero-list/hero-list.component';
import { HeroDetailComponent } from 'src/app/pages/heroes/hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component'


const routes: Routes = [
  {
    path: '', component: HeroesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'heroes', component: HeroListComponent },
      // { path: 'heroes/heroes', component:DashboardComponent  },
      // { path: 'heroes', component: HeroListComponent },

      // { path: 'crisis-center', component: CrisisListComponent },
      { path: 'hero/:id', component: HeroDetailComponent },
      { path: "detail/:id", component: HeroDetailComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule { }
