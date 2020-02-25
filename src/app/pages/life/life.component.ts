import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.less']
})
export class LifeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public curIdx:number = 3;
  public logs:Array<any> = [];
  public boxs: Array<any> = [
    {
      text: 'box-0'
    },
    {
      text: 'box-0'
    },
    {
      text: 'box-1'
    },
    {
      text: 'box-2'
    },
    {
      text: 'box-3'
    },
    {
      text: 'box-4'
    },
    {
      text: 'box-5'
    }
  ];

  public onPageChange(data:{curPage:number}){
    this.logs.push(`curpage:${data.curPage}`)
  }
  public changeCurIdx(){
    this.curIdx = Math.floor(Math.random()*6);
  }
}
