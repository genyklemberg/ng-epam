import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit {
  hasCart;
  constructor() { }

  ngOnInit() {
  }

}
