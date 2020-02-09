import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MyformRoutingModule } from './myform-routing.module';
import { FormPageComponent } from './form-page.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { QuestionComponent } from './question/question.component';
import { QuestionService } from './question.service';
import { QuestionControlService } from './question-control.service';


@NgModule({
  declarations: [
    NameEditorComponent,
    FormPageComponent,
    ProfileEditorComponent,
    HeroFormComponent,
    DynamicFormComponent,
    QuestionComponent,
  ],
  providers: [QuestionService, QuestionControlService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyformRoutingModule
  ]
})
export class MyformModule { }
