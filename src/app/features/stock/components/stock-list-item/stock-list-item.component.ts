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
            <!-- 
						<img [src]="stock?.photo_url" alt="icon" />
						-->
            <img src="https://picsum.photos/id/606/200/200" alt="" />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Stock Name<!--{{ stock?.name }}--></strong>&nbsp;<small
                >#<!--{{ stock?.id }}-->0</small
              >
              <br />
              <!--{{ stock?.details }}-->
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eius
              possimus velit, quidem repudiandae voluptates rerum. Dolorem ipsam
              voluptatem delectus, possimus amet veritatis sequi beatae
              praesentium quos molestiae impedit ut.
            </p>
            <p>
              <small>Address</small>
            </p>
          </div>
          <div class="buttons is-right">
            <button
              class="button is-small is-link"
              (click)="navigateToItems($event, 1)"
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
  @Input() stock: Stock | string;

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
