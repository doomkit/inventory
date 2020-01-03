import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Stock } from '@app/core/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-list-item',
  template: `
    <div *ngIf="stock" class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img [src]="stock?.photo" alt="icon" />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ stock.details }}</strong
              >&nbsp;<small>#{{ stock?.stockId }}</small>
              <br />
              {{ stock?.details }}
            </p>
            <p>
              <small>Address</small>
            </p>
          </div>
          <div class="buttons is-right">
            <button class="button is-small is-link" (click)="openModal()">
              add item
            </button>
            <button
              class="button is-small is-link"
              (click)="navigateToItems($event, stock)"
              [disabled]="!stock.inStock || stock.inStock.length < 1"
            >
              view
            </button>
          </div>
        </div>
      </article>
    </div>
  `,
  styleUrls: ['./stock-list-item.component.scss']
})
export class StockListItemComponent {
  @Input() stock: Stock;
  @Output() addItem = new EventEmitter<Stock>();

  constructor(private router: Router) {}

  navigateToItems(event, stock: Stock) {
    this.showLoadingIcon(event.target);
    setTimeout(() => {
      this.router.navigate([`/dashboard/stock/${stock.stockId}`], {
        queryParams: { page: '1' }
      });
    }, 1000);
  }

  showLoadingIcon(button: Element) {
    button.classList.add('is-loading');
  }

  openModal() {
    this.addItem.emit(this.stock);
  }
}
