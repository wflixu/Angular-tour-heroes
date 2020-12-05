import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ShopRoutingModule
  ],
  declarations: [ShopComponent, ProductListComponent, ProductAlertComponent, ProductDetailComponent, CartComponent, ShippingComponent],
  entryComponents: [ShopComponent]
})
export class ShopModule { }
