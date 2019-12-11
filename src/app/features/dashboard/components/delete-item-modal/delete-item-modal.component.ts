import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { StockItem } from '@app/core/models';
import * as fromStore from '@core/store';

@Component({
  selector: 'app-delete-item-modal',
  template: `
    <div
      class="modal"
      [ngClass]="{ modal: true, 'is-active': opened, 'is-clipped': opened }"
    >
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Delete item</p>
          <button
            class="delete"
            aria-label="close"
            (click)="closeModal(true)"
          ></button>
        </header>
        <section class="modal-card-body search">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input
                [(ngModel)]="searchQuery"
                class="input"
                type="text"
                placeholder="Search"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-search"></i>
              </span>
            </p>
          </div>
        </section>
        <section class="modal-card-body">
          <table class="table">
            <thead>
              <tr>
                <th><abbr title="id">#</abbr></th>
                <th>Name</th>
                <th>Category</th>
                <th>Weight</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                *ngFor="
                  let item of stockItems$ | async | search: 'name':searchQuery
                "
                [ngClass]="{ 'is-selected': item === selectedItem }"
              >
                <th>{{ item.id }}</th>
                <td>{{ item.name }}</td>
                <td>
                  <span class="tag is-primary is-small is-light">
                    {{ item.category }}
                  </span>
                </td>
                <td>{{ item.weight }}</td>
                <td>
                  <a class="action-link" (click)="selectItem(item)">
                    {{ item === selectedItem ? 'deselect' : 'select' }}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-small" (click)="closeModal(true)">
            Cancel
          </button>
          <button
            class="button is-small is-danger"
            (click)="closeModal(false)"
            [disabled]="!selectedItem"
          >
            Delete
          </button>
        </footer>
      </div>
    </div>
  `,
  styleUrls: ['./delete-item-modal.component.scss']
})
export class DeleteItemModalComponent {
  @Output() close: EventEmitter<StockItem | null> = new EventEmitter();
  stockItems$: Observable<StockItem[]>;
  opened: boolean = false;
  searchQuery: string = '';
  selectedItem: StockItem;

  constructor(private store: Store<fromStore.InventoryState>) {
    this.stockItems$ = this.store.select(fromStore.getStockItems);
    this.store.dispatch(new fromStore.LoadItems());
  }

  public openModal(): void {
    this.opened = true;
  }

  selectItem(item: StockItem) {
    if (this.selectedItem === item) {
      this.selectedItem = null;
      return;
    }
    this.selectedItem = item;
  }

  closeModal(canceled: boolean): void {
    this.opened = false;
    this.searchQuery = '';
    this.selectItem = null;
    if (!canceled && this.selectedItem) {
      this.close.emit(this.selectedItem);
    }
  }
}
