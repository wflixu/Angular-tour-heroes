import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/heroes/dashboard/dashboard.component';
import { HeroDetailComponent } from './pages/heroes/hero-detail/hero-detail.component';

import { ZorroPageComponent } from './pages/zorro-page/zorro-page.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'chat',
    loadChildren: () =>import('./pages/chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'reddit',
    loadChildren: () =>import('./pages/reddit/reddit.module').then(m => m.RedditModule)
  },
  {
    path: 'inventory',
    loadChildren: () =>import('./pages/inventory/inventory.module').then(m => m.InventoryModule)
  },
  {
    path: 'mylib',
    loadChildren: () =>import('./pages/mylib/mylib.module').then(m => m.MylibModule)
  },
  {
    path: 'tour',
    loadChildren: () =>
      import('./pages/heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path: 'ad',
    loadChildren: () => import('./pages/ad/ad.module').then(m => m.AdModule),
    data: { preload: false }
  },
  {
    path: 'web-com',
    loadChildren: () =>
      import('./pages/web-com/web-com.module').then(m => m.WebComModule),
    data: { preload: false }
  },
  {
    path: 'direct',
    loadChildren: () =>
      import('./pages/direct/direct.module').then(m => m.DirectModule),
    data: { preload: false }
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./pages/myform/myform.module').then(m => m.MyformModule),
    data: { preload: false }
  },
  {
    path: 'life',
    loadChildren: () =>
      import('./pages/life/life.module').then(m => m.LifeModule),
    data: { preload: false }
  },
  {
    path: 'foo',
    loadChildren: () =>
      import('./pages/foo/foo.module').then(m => m. FooModule)
  },

  { path: 'zorro', component: ZorroPageComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


