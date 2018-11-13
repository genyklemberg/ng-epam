import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../products/product.model';
import {CartService} from './cart.service';

@Component({
  selector: 'my-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit {
  hasCart;
  items: ProductModel[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getCartItems();
  }

}
