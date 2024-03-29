import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="page">
      <span class="huge-text">404</span>
      <div class="not-found-image">
        <a
          href="https://www.freepik.com/free-photos-vectors/business"
          target="_blank"
          rel="noopener"
        >
          <span class="secondary-text">vector created by freepik</span>
        </a>
      </div>
      <h1>Sorry,<br />page not found</h1>
      <app-button [text]="'Back'" (trigger)="redirect()"></app-button>
    </div>
  `,
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  constructor(private router: Router) {}

  redirect() {
    this.router.navigate(['/dashboard']);
  }
}
