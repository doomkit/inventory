import { Component, ViewChild } from '@angular/core';
import { Stock, StockItem } from '@app/core/models';
import { StockService, StockItemsService } from '@app/core/services';
import { AddItemModalComponent } from '../../components';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-stock-list',
  template: `
    <div class="section">
      <div class="container">
        <app-stock-list-item
          *ngFor="let stock of stocks"
          [stock]="stock"
          (addItem)="onModalOpen($event)"
        ></app-stock-list-item>
      </div>
      <app-add-item-modal
        [items]="stockItems"
        (close)="onModalClose($event)"
      ></app-add-item-modal>
    </div>
  `,
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent {
  @ViewChild(AddItemModalComponent, { static: false })
  addModal: AddItemModalComponent;
  stocks: Stock[];
  stockItems: StockItem[];
  selectedStock: Stock;

  constructor(
    private stockService: StockService,
    private stockItemService: StockItemsService
  ) {
    stockService
      .getStocks()
      .pipe(first())
      .subscribe(data => (this.stocks = data));
  }

  onModalOpen(stock: Stock) {
    this.selectedStock = stock;
    let inStockIds = stock.inStock.map(inStock => inStock.item.itemId);
    this.stockItemService
      .getItems()
      .pipe(first())
      .subscribe(data => {
        this.stockItems = data.filter(item => {
          let target = inStockIds.find(id => id === item.itemId);
          if (target) {
            return false;
          }
          return true;
        });
      });
    this.addModal.openModal();
  }

  onModalClose(selectedItem: StockItem) {
    this.stockItems = [];
    this.stockService
      .addItemToSotck(this.selectedStock.stockId, selectedItem.itemId)
      .pipe(first())
      .subscribe(data => console.log(data));
  }

  private loadAllItems(): void {
    this.stockItemService
      .getItems()
      .pipe(first())
      .subscribe(data => (this.stockItems = data));
  }
}
