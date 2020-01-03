import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InStock } from '@app/core/models/interfaces/in-stock';
import { StockService } from '@app/core/services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-stock-item',
  template: `
    <div class="card stock-item">
      <div class="card-image">
        <figure class="image is-4by3">
          <img [src]="inStock.item.photo" alt="image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <div>
            <p>
              # {{ inStock.item.itemId }}/{{ inStock.inStockId }}
              <br />
              <strong>{{ inStock.item.description | itemInfo: 'name' }}</strong>
            </p>
            <p>{{ inStock.item.description | itemInfo: 'description' }}</p>
            <p>
              <small>Weight: {{ inStock.item.weight }}</small>
              <br />
              <small>Quantity: {{ inStock.quantity }}</small>
            </p>
          </div>

          <div class="buttons has-addons">
            <button class="button is-danger is-small">
              <i class="fas fa-trash-alt"></i>
            </button>
            <button
              class="button is-small"
              [disabled]="inStock.quantity - 10 < 1"
            >
              -10
            </button>
            <button
              class="button is-small"
              [disabled]="inStock.quantity - 1 < 1"
            >
              -1
            </button>
            <button class="button is-small">+1</button>
            <button class="button is-small">+10</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent {
  @Input() inStock: InStock;
  @Input() stockId: number;
  @Output() quantityChanged = new EventEmitter();

  constructor(private stockService: StockService) {}

  changeQuantity(quantity: number) {
    this.stockService
      .changeQuantity(this.stockId, this.inStock.item.itemId, quantity)
      .pipe(first())
      .subscribe(res => this.quantityChanged.emit(null));
  }
}
