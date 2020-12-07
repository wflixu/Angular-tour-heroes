import {
  Component,
  Input,
  IterableDiffer,
  IterableDiffers,
  OnInit,
  SimpleChanges
} from '@angular/core';

// import { products } from '../data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  @Input() products: Array<any> = [];
  // 产品Differ
  private productsDiffer: IterableDiffer<any>;
  constructor(private iterableDiffers: IterableDiffers) {}
  ngOnInit(): void {
    this.productsDiffer = this.iterableDiffers.find(this.products).create(this.trackByFn);
  }
  //
  ngDoCheck(): void {
    // IterableDiffer.diff
    const diff = this.productsDiffer.diff(this.products);
    if (diff) {
      console.log('products is changed in ngDoCheck');
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      console.log('products changed in ngOnChanges');
    }
  }

  private trackByFn(index: number, item: any) {
    return item.name;
  }
  share(): void {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
