import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '@app/core/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-list-item',
  template: `
    <div *ngIf="stock" class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img [src]="stock?.photo_url" alt="icon" />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ stock.name }}</strong
              >&nbsp;<small>#{{ stock?.id }}</small>
              <br />
              {{ stock?.details }}
            </p>
            <p>
              <small>Address</small>
            </p>
          </div>
          <div class="buttons is-right">
            <button
              class="button is-small is-link"
              (click)="navigateToItems($event, stock.id)"
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
export class StockListItemComponent implements OnInit {
  @Input() stock: Stock;

  constructor(private router: Router) {}

  ngOnInit() {}

  // FIXME: change number to Stock
  navigateToItems(event, stock: number) {
    this.showLoadingIcon(event.target);
    setTimeout(() => {
      // FIXME: change to stock.id
      this.router.navigate([`/dashboard/stock/${stock}`], {
        queryParams: { page: '1' }
      });
    }, 1000);
  }

  showLoadingIcon(button: Element) {
    button.classList.add('is-loading');
  }
}
