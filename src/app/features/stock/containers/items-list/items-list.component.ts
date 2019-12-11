import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
              <!-- prettier-ignore -->
              <div class="column is-half-mobile is-one-third-tablet"
                *ngFor="let item of stockItems$
                  | async
                  | slice: ((selectedPage - 1)* elementsOnPage) : (selectedPage * elementsOnPage)"
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
        <app-pagination
          [elementsOnPage]="elementsOnPage"
          [selectedPage]="selectedPage"
          [elementsCount]="(stockItems$ | async)?.length"
          (selectPage)="onPageChange($event)"
        ></app-pagination>
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
  elementsOnPage = 9;
  selectedPage = 1;

  constructor(
    private store: Store<fromStore.InventoryState>,
    private route: ActivatedRoute,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.stockItems$ = this.store.select(fromStore.getStockItems);
    this.store.dispatch(new fromStore.LoadItems());

    // TODO: load stock's categories
    this.allCategories = ['Furniture', 'Garden', 'Car', 'Tools', 'Home'];

    const pageNumber = Number(this.route.snapshot.queryParams.page);
    if (!pageNumber || typeof pageNumber !== 'number') {
      this.router.navigate(['/not-found']);
      return;
    }
    this.selectedPage = pageNumber;
  }

  onFilterOptionsUpdate(newOptions: FilterOptions): void {
    this.filterOptions = newOptions;
    // TODO: apply filter to loaded items
    console.log(this.filterOptions);
  }

  onPageChange(page): void {
    this.selectedPage = page;
    this.router.navigate(['/dashboard/stock'], { queryParams: { page } });
    /*
     *  Bad page number is handled in Paginator Component
     *  because this component counts pages according to
     *  loaded items. If url's parameter is bad, it changes
     *  the view of displayed items after it was checked.
     */
    this.cdRef.detectChanges();
  }
}
