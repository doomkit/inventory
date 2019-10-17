import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StockItem } from '@app/core/models';
import * as fromStore from '@core/store';
import { FilterOptions } from '../../components/items-filter/filter-options';

@Component({
  selector: 'app-items-list',
  template: `
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-3">
            <app-items-filter
              [allCategories]="allCategories"
              [filterOptions]="filterOptions"
              (filterOptionsChange)="onFilterOptionsUpdate($event)"
            ></app-items-filter>
          </div>
          <div class="column is-9">
            <div class="columns is-multiline is-mobile">
              <div
                class="column is-half-mobile is-one-third-tablet"
                *ngFor="let item of stockItems$ | async"
              >
                <app-stock-item [item]="item"></app-stock-item>
              </div>
              <div
                *ngIf="!(stockItems$ | async)?.length"
                class="column has-text-centered"
              >
                <span class="delayed-text">No items to display</span>
              </div>
            </div>
          </div>
        </div>
        <app-pagination></app-pagination>
      </div>
    </div>
  `,
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  stockItems$: Observable<StockItem[]>;
  allCategories: string[];
  filterOptions: FilterOptions = {
    categories: [],
    search: null
  };

  constructor(private store: Store<fromStore.StockState>) {}

  ngOnInit(): void {
    this.stockItems$ = this.store.select(fromStore.getAllStockItems);
    this.store.dispatch(new fromStore.LoadItems());

    // TODO: load stock's categories
    this.allCategories = ['Furniture', 'Garden', 'Car', 'Tools', 'Home'];
  }

  onFilterOptionsUpdate(newOptions: FilterOptions): void {
    this.filterOptions = newOptions;
    // TODO: apply filter to loaded items
    console.log(this.filterOptions);
  }
}
