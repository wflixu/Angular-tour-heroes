import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { DashboardComponent } from "./pages/heroes/dashboard/dashboard.component";
import { HeroDetailComponent } from "./pages/heroes/hero-detail/hero-detail.component";

import { HeroesTourComponent } from "./pages/heroes-tour/heroes-tour.component";
import { FormPageComponent } from "./pages/form-page/form-page.component";
import { ZorroPageComponent } from './pages/zorro-page/zorro-page.component';

import { TestComponent } from './pages/test/test.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "/heroes", pathMatch: "full" },

  { path: "zorro", component: ZorroPageComponent },
  { path: "form", component: FormPageComponent },
  { path: "test", component: TestComponent },

  { path: "heroes-tour", component: HeroesTourComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
