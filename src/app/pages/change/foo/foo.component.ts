import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-foo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:`
      <h2>fooComment</h2>
      <p>father:{{father}}</p>
      <section>
        detail: {{detail}}
      </section>
  `,
})
export class FooComponent implements OnInit {
  // 传入参数
  @Input() father: string;

  public get detail() {
    console.log('get detail');
    return 'this is a detail string for test';
  }

  ngOnInit(): void {

  }

  ngDoCheck(): void {
    console.log('foo ngDoCheck');
  }
  ngAfterViewChecked(): void {
    console.log('foo ngAfterViewChecked');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if(changes['name']){
    //   console.log('name change', changes['name'].currentValue);
    // }
    // if(changes['items']){
    //   console.log('items change', changes['items'].currentValue);
    // }
  }
}
