import { Directive, OnInit, OnDestroy } from '@angular/core';

import { MessageService } from '../../message.service';

@Directive({
  selector: '[appSpy]'
})
export class SpyDirective implements OnInit, OnDestroy {

  constructor(private messageService: MessageService) { }
  ngOnInit() {
    this.messageService.add('SPY ONngOnInit');
  }
  ngOnDestroy(){
    this.messageService.add('SPY ngOnDestroy');
  }
}

