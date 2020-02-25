import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeRoutingModule } from './life-routing.module';
import { LifeComponent } from './life.component';
import { SlideComponent } from './slide/slide.component';
import { BoxComponent } from './box/box.component';

@NgModule({
  declarations: [LifeComponent, SlideComponent, BoxComponent],
  imports: [CommonModule, LifeRoutingModule]
})
export class LifeModule {}
