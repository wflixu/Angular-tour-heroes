import { Component, OnInit, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { PopupService } from './popup.service';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-web-com',
  templateUrl: './web-com.component.html',
  styleUrls: ['./web-com.component.less']
})
export class WebComComponent implements OnInit {

  constructor(injector: Injector, public popup: PopupService) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }
  ngOnInit() {
  }

}
