import { Injectable } from '@angular/core';
import {ProductModel} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: ProductModel[] = [
    {
      name: 'HeadPhones',
      description: 'Bose',
      price: 500,
      category: 'IOT',
      isAvailable: true,
      inCart: false
    },
    {
      name: 'VR Helm',
      description: 'Samsung',
      price: 1000,
      category: 'VR',
      isAvailable: false,
      inCart: false
    }
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }
}
