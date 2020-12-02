import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./bar.component.less']
})
export class BarComponent implements OnInit {
  detail:string = '';
  constructor() { }

  ngOnInit(): void {
  }


  ngDoCheck(): void {

    console.log('bar ngDoCheck');
  }

}
