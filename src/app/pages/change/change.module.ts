import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeRoutingModule } from './change-routing.module';
import { ChangeComponent } from './change.component';
import { FooComponent } from './foo/foo.component';


@NgModule({
  declarations: [ChangeComponent, FooComponent],
  imports: [
    CommonModule,
    ChangeRoutingModule
  ]
})
export class ChangeModule { }
