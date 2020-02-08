import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.less']
})
export class DirectComponent implements OnInit {
  public condition: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public toggle(){
    this.condition = !this.condition;
  }

}
