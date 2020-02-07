import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { DashboardComponent } from "./pages/heroes/dashboard/dashboard.component";
import { HeroDetailComponent } from "./pages/heroes/hero-detail/hero-detail.component";

import { HeroesTourComponent } from "./pages/heroes-tour/heroes-tour.component";
import { FormPageComponent } from "./pages/form-page/form-page.component";
import { ZorroPageComponent } from './pages/zorro-page/zorro-page.component';

import { TestComponent } from './pages/test/test.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
  },
  {
    path: 'tour',
    loadChildren: () => import('./pages/heroes/heroes.module').then(m => m.HeroesModule),
    data: { preload: false },
  },
  {
    path: 'ad',
    loadChildren: () => import('./pages/ad/ad.module').then(m => m.AdModule),
    data: { preload: false },
  },

  { path: "zorro", component: ZorroPageComponent },
  { path: "form", component: FormPageComponent },
  // { path: "test", component: TestComponent },

  { path: "heroes-tour", component: HeroesTourComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
