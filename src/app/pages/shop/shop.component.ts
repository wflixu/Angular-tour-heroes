import { Component, OnInit } from '@angular/core';
import { products } from './data';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
})
export class ShopComponent implements OnInit {
  public products  =  [];
  constructor() { }

  ngOnInit(): void {
    this.products = [...products];
  }
  // 使用数组索改变数组
  test1():void {
    this.products[1]= {
      name:'realme',
      description:'a new brand phone',
      price: 499
    }
  }
  // 使用push 方法
  test2():void {
    this.products.push({
      name:'xiaomi',
      description:'you will love it',
      price: 549
    });
  }
  // 重新赋值
  test(): void {
    this.products =[...products];
  }
  // 更深一级，该变对象的某一个属性
  test3(): void {
     this.products[0].name = 'iphone pro'
  }

}
