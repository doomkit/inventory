import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterOptions } from './filter-options';

@Component({
  selector: 'app-items-filter',
  template: `
    <nav class="panel">
      <p class="panel-heading">
        filters
      </p>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input
            class="input is-small"
            [(ngModel)]="filterOptions.search"
            (keyup.enter)="onSearchQueryChange()"
            (blur)="onSearchQueryChange()"
            type="text"
            placeholder="search"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <a
        *ngFor="let category of displayedCategories"
        class="panel-block is-active"
        [ngClass]="{ 'is-active': category.selected }"
        (mousedown)="onCategoryClick(category)"
      >
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        {{ category.name }}
      </a>
      <div class="panel-block">
        <button
          class="button is-link is-outlined is-fullwidth"
          (click)="onRemoveFilters()"
        >
          reset all filters
        </button>
      </div>
    </nav>
  `,
  styleUrls: ['./items-filter.component.scss']
})
export class ItemsFilterComponent implements OnInit {
  @Input() allCategories: string[];
  @Input() filterOptions: FilterOptions;
  @Output() filterOptionsChange = new EventEmitter<FilterOptions>();
  displayedCategories: any[];
  searchQuery: string;

  constructor() {}

  ngOnInit() {
    this.displayedCategories = this.allCategories.map(el => {
      return { name: el, selected: false };
    });
  }

  onCategoryClick(category: any) {
    category.selected = !category.selected;
    if (!category.selected) {
      // Remove category from filter options
      this.filterOptions.categories = this.filterOptions.categories.filter(
        el => el !== category.name
      );
    } else {
      // Add category to filter options
      this.filterOptions.categories = [
        ...this.filterOptions.categories,
        category.name
      ];
    }
    this.filterOptionsChange.emit(this.filterOptions);
    event.preventDefault();
  }

  onRemoveFilters() {
    this.filterOptions = {
      categories: [],
      search: null
    };
    this.filterOptionsChange.emit(this.filterOptions);
    this.ngOnInit();
  }

  onSearchQueryChange() {
    this.filterOptionsChange.emit(this.filterOptions);
  }
}
