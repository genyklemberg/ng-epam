import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ProductModel} from '../product.model';

@Component({
  selector: 'my-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {
  products: ProductModel[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
