import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectRoutingModule } from './direct-routing.module';
import { DirectComponent } from './direct.component';
import { UnlessDirective } from './unless.directive';


@NgModule({
  declarations: [DirectComponent, UnlessDirective],
  imports: [
    CommonModule,
    DirectRoutingModule
  ]
})
export class DirectModule { }
