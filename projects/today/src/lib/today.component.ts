import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'to-today',
  template: `
    <p>
      today works!
    </p>
  `,
  styles: []
})
export class TodayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
