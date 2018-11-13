import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from '../iproduct';

@Component({
  selector: 'my-product',
  templateUrl: './product.component.html',
  styles: [`
    .product-card {
      min-width: 400px;
    }
  `]
})
export class ProductComponent implements OnInit {
  @Input() data: IProduct;
  @Output() inCart = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onBuy(item) {
    this.inCart.emit(item);
    item.inCart = true;
  }

}
