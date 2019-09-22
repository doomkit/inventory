import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthGuard } from '@core/auth/auth.guard';
import { Breadcrumb } from '@app/core/models';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard">
      <app-breadcrumb [breadcrumbs]="breadcrumbs"></app-breadcrumb>
      <button (click)="logOut()">Log out</button>
    </div>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  breadcrumbs: Breadcrumb[] = [
    {
      name: 'dashboard',
      url: '#'
    },
    {
      name: 'stock',
      url: '#'
    }
  ];

  constructor(
    private authService: AuthGuard,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  logOut() {
    sessionStorage.removeItem('username');
    this.authService.canActivate(
      this.route.snapshot,
      this.router.routerState.snapshot
    );
  }
}
