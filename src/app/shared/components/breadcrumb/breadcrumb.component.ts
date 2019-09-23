import { Component, Input } from '@angular/core';
import { UrlSegment, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <nav class="breadcrumb is-small" aria-label="breadcrumbs">
      <ul>
        <li
          *ngFor="let crumb of breadcrumbs; let lastcrumb = last"
          [ngClass]="{ 'is-active': lastcrumb }"
        >
          <a (click)="navigateToCrumb(crumb)">{{ crumb.path | titlecase }}</a>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  @Input() breadcrumbs: UrlSegment[];

  constructor(private router: Router) {}

  navigateToCrumb(crumb: UrlSegment) {
    let path = '/';
    for (const segment of this.breadcrumbs) {
      path = path + segment.path;
      if (segment.path === crumb.path) {
        break;
      }
      path = path + '/';
    }
    this.router.navigate([path]);
  }
}
