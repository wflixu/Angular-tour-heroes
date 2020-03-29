import { NgModule } from '@angular/core';
import { TodayComponent } from './today.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [TodayComponent, ButtonComponent],
  imports: [
  ],
  exports: [TodayComponent,ButtonComponent]
})
export class TodayModule { }
