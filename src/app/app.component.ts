import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product('NICEHAT', 'A nice black hat', '/assets/images/products/black-hat.jpg', ["Men", "Shoes", "Running shoes"], 109.99),
      new Product('MYSHOES', 'Black Running Shoes', '/assets/images/products/black-shoes.jpg', ["Men", "Apparel", "Jackets & Vests"], 238.99),
      new Product('NEATOJACKET', 'Blue Jacket', '/assets/images/products/blue-jacket.jpg', ["Men", "Accesories", "Hats"], 29.99)
    ];
  }

  productWasSelected(product: Product): void {
    console.log(product);
  }
}
