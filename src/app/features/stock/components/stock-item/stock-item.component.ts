import { Component, Input } from '@angular/core';
import { StockItem } from '@app/core/models';

@Component({
  selector: 'app-stock-item',
  template: `
    <div class="card stock-item">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <p># {{ item.id }}</p>
          <p>name: {{ item.name }}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent {
  @Input() item: StockItem;
}
