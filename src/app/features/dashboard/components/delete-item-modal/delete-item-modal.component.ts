import { Component, Output, EventEmitter, Input } from '@angular/core';
import { StockItem } from '@app/core/models';

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
                [disabled]="loading"
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
                *ngFor="let item of items | search: 'name':searchQuery"
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
            [ngClass]="{ 'is-loading': loading }"
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
  @Input() items: StockItem[];
  opened: boolean = false;
  searchQuery: string = '';
  selectedItem: StockItem;
  loading: boolean = false;

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
    if (!canceled && this.selectedItem) {
      this.close.emit(this.selectedItem);
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.opened = false;
        this.searchQuery = '';
        this.selectItem = null;
      }, 1000);
    } else {
      this.opened = false;
      this.searchQuery = '';
      this.selectItem = null;
    }
  }
}
