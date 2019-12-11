import { Component, Input } from '@angular/core';
import { StockItem } from '@app/core/models';

@Component({
  selector: 'app-stock-item',
  template: `
    <div class="card stock-item">
      <div class="card-image">
        <figure class="image is-4by3">
          <img [src]="item.photo" alt="image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <p>
            <strong>#{{ item.id }}</strong> &nbsp;
            <small>{{ item.name }}</small>
            <br />
            {{ item.details }}
          </p>
          <p>
            <small>Weight: {{ item.weight }}</small>
          </p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent {
  @Input() item: StockItem;
}
