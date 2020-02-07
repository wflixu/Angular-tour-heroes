import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-a',
  templateUrl:'a.html',
  styleUrls: ['./a.component.less']
})
export class AComponent implements OnInit {

  public name: string = 'I am A component';
  public text: string = `A message for the child component`;

  @Output() readonly back: EventEmitter<number> = new EventEmitter();


  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {

  }

  public innerClick(){
    this.back.emit(1);
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
