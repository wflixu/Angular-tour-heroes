import { Component, OnInit } from '@angular/core';

import { products } from '../data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  public products: Array<any>;
  constructor() {}

  ngOnInit(): void {
    this.products = products;
  }

  share(): void {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
