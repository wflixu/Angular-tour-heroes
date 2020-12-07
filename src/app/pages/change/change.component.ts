import { ChangeDetectionStrategy, Component, IterableDiffers, OnInit } from '@angular/core';

@Component({
  selector: 'app-change',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:`
    <h2>changeComponent</h2>
    <hr>
    input in father component
    <input type="text" [(ngModel)]="value">

    <button (click)="changeName()">
      change name
    </button>
    <hr>
    <app-foo [father]="name"></app-foo>
  `,

})
export class ChangeComponent implements OnInit {
  private _name:string = 'foo';
  get name(): string {
    // console.log('get name');
    return this._name;
  }
  set name (value) {
    this._name = value;
  }
  value: string;
  items: Array<any> = ['Really', 'Super', 'Greater'];

  constructor() { }

  ngOnInit(): void {
  }

  changeName(){
    //
    this.name = "chened name";
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
