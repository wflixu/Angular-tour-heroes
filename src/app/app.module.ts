import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; // <-- NgModel lives here

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import {HeroesModule} from './pages/heroes/heroes.module';

import { AppComponent } from "./app.component";
import { MessagesComponent } from "./messages/messages.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { ZorroPageComponent } from './pages/zorro-page/zorro-page.component';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MainComponent } from './pages/main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    HeroFormComponent,
    ZorroPageComponent,
    CrisisListComponent,
    PageNotFoundComponent,
    MainComponent,
  ],
  imports: [
    HttpClientModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule,
    NgZorroAntdModule,
    NzButtonModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
