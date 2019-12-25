import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

import { HeroesTourComponent } from "./pages/heroes-tour/heroes-tour.component";
import { FormPageComponent } from "./pages/form-page/form-page.component";
import { ZorroPageComponent } from './pages/zorro-page/zorro-page.component';

const routes: Routes = [
  { path: "", redirectTo: "/zorro", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "zorro", component: ZorroPageComponent },
  { path: "form", component: FormPageComponent },
  { path: "detail/:id", component: HeroDetailComponent },
  { path: "heroes-tour", component: HeroesTourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
