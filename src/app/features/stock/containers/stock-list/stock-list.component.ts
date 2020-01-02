import { Component, OnInit } from '@angular/core';
import { Stock } from '@app/core/models';
import { Observable } from 'rxjs';
import { StockService } from '@app/core/services';

@Component({
  selector: 'app-stock-list',
  template: `
    <div class="section">
      <div class="container">
        <app-stock-list-item
          *ngFor="let stock of stocks$ | async"
          [stock]="stock"
        ></app-stock-list-item>
      </div>
    </div>
  `,
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  stocks$: Observable<Stock[]>;

  constructor(private stockService: StockService) {
    this.stocks$ = stockService.getStocks();
  }

  ngOnInit() {}
}
