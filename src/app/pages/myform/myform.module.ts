import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MyformRoutingModule } from './myform-routing.module';
import { FormPageComponent } from './form-page.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';


@NgModule({
  declarations: [
    NameEditorComponent,
    FormPageComponent,
    ProfileEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyformRoutingModule
  ]
})
export class MyformModule { }
