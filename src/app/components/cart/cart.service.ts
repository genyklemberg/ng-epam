import { Injectable } from '@angular/core';
import {ProductModel} from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: ProductModel[] = [];
  constructor() { }

  addToCart(item: ProductModel) {
    this.cartItems.push(item);
    console.log(this.cartItems);
  }

  getCartItems() {
    console.log(this.cartItems);
    return this.cartItems;
  }
}
