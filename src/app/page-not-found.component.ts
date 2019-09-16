import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="page">
      <span class="huge-text">404</span>
      <div class="not-found-image"></div>
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
