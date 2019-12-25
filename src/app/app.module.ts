import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; // <-- NgModel lives here

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { MessagesComponent } from "./messages/messages.component";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroSearchComponent } from "./hero-search/hero-search.component";
import { HeroesTourComponent } from "./pages/heroes-tour/heroes-tour.component";
import { FormPageComponent } from "./pages/form-page/form-page.component";
import { FormTestComponent } from "./components/form-test/form-test.component";
import { NameEditorComponent } from "./components/name-editor/name-editor.component";
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { ZorroPageComponent } from './pages/zorro-page/zorro-page.component';

import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroesTourComponent,
    FormPageComponent,
    FormTestComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    HeroFormComponent,
    ZorroPageComponent,
  ],
  imports: [
    HttpClientModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
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
