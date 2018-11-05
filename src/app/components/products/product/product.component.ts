import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../iproduct';

@Component({
  selector: 'my-product',
  templateUrl: './product.component.html',
  styles: [`
    .product-card {
      max-width: 400px;
    }
  `]
})
export class ProductComponent implements OnInit {
  @Input() data: IProduct;
  constructor() { }

  ngOnInit() {
  }

  onBuy() {
    this.data.inCart = true;
  }

}
