import { Component, OnInit, ElementRef, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.less'],
  host: {
    '[class.app-box]': 'true',
    '[class.app-active]': 'active',
  },
  encapsulation: ViewEncapsulation.None
})
export class BoxComponent {
  @Input() active:boolean = false;
  public nativeElement: any;
  constructor(protected hostRef: ElementRef) {
    this.nativeElement = this.hostRef.nativeElement;
  }
}
