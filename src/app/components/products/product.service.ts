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
      inCart: false,
      quantity: 1
    },
    {
      name: 'VR Helm',
      description: 'Samsung',
      price: 1000,
      category: 'VR',
      isAvailable: true,
      inCart: false,
      quantity: 1
    },
    {
      name: 'Smart Fridge',
      description: 'Samsung',
      price: 10000,
      category: 'IOT',
      isAvailable: false,
      inCart: false,
      quantity: 1
    }
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }
}
