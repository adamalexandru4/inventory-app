import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-price',
  template: `
    <div class="price-display">\${{ price }}</div>
  `
})
export class ProductPriceComponent implements OnInit {
  @Input() price: number;

  constructor() { }

  ngOnInit(): void {
  }

}
