import { ChangeDetectionStrategy, Component, Input, IterableDiffer, IterableDifferFactory, IterableDiffers, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./foo.component.less']
})
export class FooComponent implements OnInit {

  @Input() name: string;

  @Input() items: Array<string> = [];

 public get detail() {
    console.log('get detail');
    return 'this is a detail string';
}
  private itemsDiffer : IterableDiffer<any>;
  constructor(private iterableDiffers:IterableDiffers) { }

  ngOnInit(): void {
    // this.itemsDiffer = this.iterableDiffers.find(this.items).create();
  }

  ngDoCheck(): void {
    // console.log(this.iterableDiffers);
    // const IterableChanges =  this.itemsDiffer.diff(this.items);
    console.log('foo ngDoCheck');
    // console.log('!!!!!!!',IterableChanges);
  }
  ngAfterViewChecked(): void {
    console.log('foo ngAfterViewChecked');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['name']){
      console.log('name change', changes['name'].currentValue);

    }
    if(changes['items']){
      console.log('items change', changes['items'].currentValue);
    }
  }

}
