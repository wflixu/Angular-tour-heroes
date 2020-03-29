import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TodayModule} from 'today'

import { MylibRoutingModule } from './mylib-routing.module';
import { LibtestComponent } from './libtest/libtest.component';


@NgModule({
  declarations: [LibtestComponent],
  imports: [
    CommonModule,
    TodayModule,
    MylibRoutingModule
  ]
})
export class MylibModule { }
