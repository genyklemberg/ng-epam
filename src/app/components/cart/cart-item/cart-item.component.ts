import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from '../../products/product.model';

@Component({
  selector: 'my-cart-item',
  templateUrl: './cart-item.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input()item: ProductModel;
  @Output()onRemove = new EventEmitter();
  @Output()onChangeQ = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeQuantity(q) {
    const data = {
      item: this.item,
      q: q
    };
    this.onChangeQ.emit(data);
  }

  remove(item) {
    this.onRemove.emit(item);
  }

}
