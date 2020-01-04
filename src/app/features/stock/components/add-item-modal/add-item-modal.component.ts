import { Component, Output, EventEmitter, Input } from '@angular/core';
import { StockItem } from '@app/core/models';

@Component({
  selector: 'app-add-item-modal',
  template: `
    <div
      class="modal"
      [ngClass]="{ modal: true, 'is-active': opened, 'is-clipped': opened }"
    >
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add item to stock</p>
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
                *ngFor="let item of items | search: 'description':searchQuery"
                [ngClass]="{ 'is-selected': item === selectedItem }"
              >
                <th>{{ item.itemId }}</th>
                <td>{{ item.description | itemInfo: 'name' }}</td>
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
            class="button is-small is-link"
            (click)="closeModal(false)"
            [disabled]="!selectedItem"
          >
            Add
          </button>
        </footer>
      </div>
    </div>
  `,
  styleUrls: ['./add-item-modal.component.scss']
})
export class AddItemModalComponent {
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Input() items: StockItem[];
  opened: boolean = false;
  searchQuery: string = '';
  selectedItem: StockItem;

  public openModal(): void {
    this.opened = true;
  }

  selectItem(item: StockItem): void {
    if (this.selectedItem) {
      this.selectedItem = undefined;
    } else {
      this.selectedItem = item;
    }
  }

  closeModal(canceled: boolean): void {
    if (!canceled && this.selectedItem) {
      this.close.emit(this.selectedItem);
    }
    this.opened = false;
    this.searchQuery = '';
    this.selectItem = undefined;
  }
}
