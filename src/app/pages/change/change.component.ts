import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.less']
})
export class ChangeComponent implements OnInit {
  name: string;
  constructor() { }

  ngOnInit(): void {
  }

  changeName(){
    this.name = "chened name"
  }



}
