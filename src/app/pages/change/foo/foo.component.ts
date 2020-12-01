import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.less']
})
export class FooComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['name']){
      console.log('name change', changes['name'].currentValue);

    }
  }

}
