import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-form-ng-model',
  templateUrl: './demo-form-ng-model.component.html',
  styleUrls: ['./demo-form-ng-model.component.css']
})
export class DemoFormNgModelComponent implements OnInit {

  productName: String;

  constructor() {
    this.productName = "ng-book: The complete guide to Angular";
  }

  ngOnInit(): void {
  }

  onSubmit(value: String): void {
    console.log(value);
  }

}
