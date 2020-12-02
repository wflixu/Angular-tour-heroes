import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeRoutingModule } from './change-routing.module';
import { ChangeComponent } from './change.component';
import { FooComponent } from './foo/foo.component';
import { FormsModule } from '@angular/forms';
import { BarComponent } from './bar/bar.component';


@NgModule({
  declarations: [ChangeComponent, FooComponent, BarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChangeRoutingModule
  ]
})
export class ChangeModule { }
