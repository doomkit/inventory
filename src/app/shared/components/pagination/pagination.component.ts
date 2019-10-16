import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <nav
      class="pagination is-centered is-small"
      role="navigation"
      aria-label="pagination"
    >
      <ul class="pagination-list">
        <li><a class="pagination-link">Previous</a></li>
        <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
        <li>
          <a
            class="pagination-link is-current"
            aria-label="Page 46"
            aria-current="page"
            >46</a
          >
        </li>
        <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
        <li><a class="pagination-link">Next page</a></li>
      </ul>
    </nav>
  `,
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
