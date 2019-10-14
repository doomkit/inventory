import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StockItem } from '@app/core/models';
import * as fromStore from '@core/store';

@Component({
  selector: 'app-items-list',
  template: `
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <app-items-filter></app-items-filter>
        </div>

        <div class="column is-9">
          <app-stock-item
            *ngFor="let item of stockItems$ | async"
            [item]="item"
          ></app-stock-item>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  stockItems$: Observable<StockItem[]>;
  constructor(private store: Store<fromStore.StockState>) {}

  ngOnInit(): void {
    this.stockItems$ = this.store.select(fromStore.getAllStockItems);
    this.store.dispatch(new fromStore.LoadItems());
  }
}
