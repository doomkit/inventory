import { Component } from '@angular/core';
import { StockItem } from '@app/core/models';

@Component({
  selector: 'app-items-list',
  template: `
    <div class="stock-list">
      <app-stock-item
        *ngFor="let item of stockItems"
        [item]="item"
      ></app-stock-item>
    </div>
  `,
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {
  stockItems: StockItem[] = [
    {
      id: 0,
      name: 'Item One'
    },
    {
      id: 1,
      name: 'Item Two'
    },
    {
      id: 2,
      name: 'Item Three'
    }
  ];
}
