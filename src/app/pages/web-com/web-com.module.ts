import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebComRoutingModule } from './web-com-routing.module';
import { WebComComponent } from './web-com.component';

import { PopupComponent } from './popup/popup.component';
import {PopupService} from './popup.service';


@NgModule({
  declarations: [WebComComponent, PopupComponent],
  providers: [PopupService],
  imports: [
    CommonModule,
    WebComRoutingModule
  ]
  ,entryComponents: [PopupComponent],
})
export class WebComModule { }
