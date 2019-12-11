import { Component, OnInit } from '@angular/core';
import * as fromStore from '@core/store';
import { Store } from '@ngrx/store';
import { Stock } from '@app/core/models';
import { Observable } from 'rxjs';

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

  constructor(private store: Store<fromStore.InventoryState>) {
    this.stocks$ = this.store.select(fromStore.getStocks);
    this.store.dispatch(new fromStore.LoadStocks());
  }

  ngOnInit() {}
}
