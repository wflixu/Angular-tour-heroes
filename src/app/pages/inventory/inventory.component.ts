import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inventory-app',
  template: `
    <div class="inventory-app">
      (Products will go here soon)
    </div>
  `,
  styleUrls: ['./inventory.component.less']
})
export class InventoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
