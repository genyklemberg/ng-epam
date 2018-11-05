import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './core/not-found/not-found.component';
import {CoreComponent} from './core/core.component';
import {ProductListComponent} from './components/products/product-list/product-list.component';
import {CartComponent} from './components/cart/cart.component';

const routes: Routes = [
  {path: '', component: CoreComponent, pathMatch: 'full', children: [
      {path: 'home', component: ProductListComponent},
      {path: 'cart', component: CartComponent},
    ]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
