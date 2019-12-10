import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-list',
  template: `
    <div class="section">
      <div class="container">
        <app-stock-list-item
          *ngFor="let stock of stocks"
          [stock]="stock"
        ></app-stock-list-item>
      </div>
    </div>
  `,
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  stocks = ['a', 'b', 'c'];

  constructor() {}

  ngOnInit() {}
}
