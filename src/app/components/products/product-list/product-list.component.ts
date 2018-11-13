import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ProductModel} from '../product.model';
import {CartService} from '../../cart/cart.service';

@Component({
  selector: 'my-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {
  products: ProductModel[];

  constructor(private productService: ProductService,
              private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  toCart(item) {
    this.cartService.addToCart(item);
  }
}
