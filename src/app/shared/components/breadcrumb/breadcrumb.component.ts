import { Component, Input } from '@angular/core';
import { Breadcrumb } from '@app/core/models';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <nav class="breadcrumb is-small" aria-label="breadcrumbs">
      <ul>
        <li
          *ngFor="let crumb of breadcrumbs; let lastcrumb = last"
          [ngClass]="{ 'is-active': lastcrumb }"
        >
          <a [attr.href]="crumb.url">{{ crumb.name | titlecase }}</a>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  @Input() breadcrumbs: Breadcrumb[];
}
