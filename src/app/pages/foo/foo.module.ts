import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooRoutingModule } from './foo-routing.module';
import { FooComponent } from './foo.component';
import { BarComponent } from './bar/bar.component';


@NgModule({
  declarations: [FooComponent, BarComponent],
  imports: [
    CommonModule,
    FooRoutingModule
  ]
})
export class FooModule { }
