import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <nav
      class="pagination is-centered is-small"
      role="navigation"
      aria-label="pagination"
    >
      <ul class="pagination-list">
        <li>
          <a
            class="pagination-link"
            (click)="onPageSelect(selectedPage - 1)"
            [attr.disabled]="showPrevious"
            >Previous</a
          >
        </li>

        <li *ngFor="let page of pages">
          <a
            class="pagination-link"
            [ngClass]="{ 'is-current': page === selectedPage }"
            (click)="onPageSelect(page)"
          >
            {{ page }}
          </a>
        </li>
        <li>
          <span class="pagination-ellipsis" *ngIf="totalPages > 9">
            &hellip;
          </span>
        </li>
        <li>
          <span class="pagination-ellipsis" *ngIf="totalPages > 9">
            &hellip;
          </span>
        </li>

        <li>
          <a
            class="pagination-link"
            (click)="onPageSelect(selectedPage + 1)"
            [attr.disabled]="showNext"
          >
            Next page
          </a>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {
  @Input() elementsOnPage: number;
  @Input() selectedPage: number;
  @Input() elementsCount: number;
  @Output() selectPage = new EventEmitter<number>();

  totalPages: number;
  pages: number[] = [];
  showPrevious;
  showNext;

  ngOnChanges(): void {
    this.totalPages = Math.ceil(this.elementsCount / this.elementsOnPage);
    this.pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.pages = [...this.pages, i];
    }
    this.showPrevious = this.selectedPage === 1 ? true : null;
    this.showNext = this.selectedPage === this.totalPages ? true : null;
  }

  onPageSelect(selectedPage: number) {
    if (
      selectedPage === this.selectedPage ||
      selectedPage < 1 ||
      selectedPage > this.totalPages
    ) {
      return;
    }
    this.selectPage.emit(selectedPage);
  }
}
