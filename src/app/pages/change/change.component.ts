import { ChangeDetectionStrategy, Component, IterableDiffers, OnInit } from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./change.component.less']
})
export class ChangeComponent implements OnInit {
  name: string;
  value: string;
  items: Array<any> = ['Really', 'Super', 'Greater'];
  // iterableDiffers:IterableDiffers = new IterableDiffers()
  constructor(iterableDiffers:IterableDiffers) { }

  ngOnInit(): void {
  }

  changeName(){
    this.name = "chened name";
    //

  }
  newValue(){
      // 重新赋值
      this.items = [...this.items, 'Code'];
  }

  push(){
      // 重新赋值
      this.items.push('Nancy');

  }

  change() {
    this.items[0] = 'DIV'
  }



}
