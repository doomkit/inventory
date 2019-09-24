import { Component, Input } from '@angular/core';
import { StockItem } from '@app/core/models';

@Component({
  selector: 'app-stock-item',
  template: `
    <div class="stock-item">
      <span># {{ item.id }}</span>
      <span>name: {{ item.name }}</span>
    </div>
  `,
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent {
  @Input() item: StockItem;
}
