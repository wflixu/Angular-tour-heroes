import { Component, OnInit, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-a',
  template: `{{name}}
  `,
  styleUrls: ['./a.component.less']
})
export class AComponent implements OnInit {

  public name: string = 'I am A component';
  public text: string = `A message for the child component`;
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
