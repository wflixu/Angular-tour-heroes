import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {
  public name: string = 'I am init name';
  public text: string = `A message text`;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {

  }
  // ngAfterViewInit(): void {
  //   // this.name ='update name ';

  //   // setTimeout(() => {
  //   //   this.name = 'updated name';
  //   // });

  // }

  ngAfterViewInit() {
    this.name = 'updated name';
    this.cd.detectChanges();
   }

}
