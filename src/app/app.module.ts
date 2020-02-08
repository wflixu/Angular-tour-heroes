import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; // <-- NgModel lives here

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import {HeroesModule} from './pages/heroes/heroes.module';

import { AppComponent } from "./app.component";
import { MessagesComponent } from "./messages/messages.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeroesTourComponent } from "./pages/heroes-tour/heroes-tour.component";
import { FormTestComponent } from "./components/form-test/form-test.component";
import { NameEditorComponent } from "./components/name-editor/name-editor.component";
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { ZorroPageComponent } from './pages/zorro-page/zorro-page.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { AComponent } from './pages/test/a/a.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MainComponent } from './pages/main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    HeroesTourComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    HeroFormComponent,
    ZorroPageComponent,
    AComponent,
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
