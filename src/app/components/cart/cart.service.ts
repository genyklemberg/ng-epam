import { Injectable } from '@angular/core';
import {ProductModel} from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: ProductModel[] = [];
  constructor() { }

  getCartItems() {
    return this.cartItems;
  }

  addToCart(item: ProductModel) {
    const inCart: number = this.cartItems.indexOf(item);
    if (this.cartItems.indexOf(item) !== -1) {
      this.cartItems[inCart].quantity++;
    } else {
      this.cartItems.push(item);
    }
  }

  changeQuantity(item: ProductModel, quantity: number) {
    const cartPos: number = this.cartItems.indexOf(item);
    this.cartItems[cartPos].quantity = quantity;
  }

  removeFromCart(item: ProductModel) {
    const cartPos: number = this.cartItems.indexOf(item);
    this.cartItems.splice(cartPos, 1);
  }
}
