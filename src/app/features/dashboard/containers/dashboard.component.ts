import { Component } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  UrlSegmentGroup,
  PRIMARY_OUTLET,
  UrlSegment,
  NavigationEnd
} from '@angular/router';
import { AuthGuard } from '@core/guards';
import { AuthenticationService } from '@app/core/services';

@Component({
  selector: 'app-dashboard',
  template: `
    <div style="min-height: 100%;">
      <app-navbar></app-navbar>
      <app-breadcrumb [breadcrumbs]="breadcrumbs"></app-breadcrumb>
      <a [routerLink]="'stock'" [queryParams]="{ page: '1' }">Stock</a>
      <button (click)="logOut()">Log out</button>
      <router-outlet></router-outlet>
    </div>
  `
})
export class DashboardComponent {
  breadcrumbs: UrlSegment[];

  constructor(
    private authService: AuthenticationService,
    private authGuard: AuthGuard,
    private route: ActivatedRoute,
    private router: Router
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const tree = router.parseUrl(this.router.url);
        const primary: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
        this.breadcrumbs = primary.segments;
      }
    });
  }

  logOut() {
    this.authService.logout();
    this.authGuard.canActivate(
      this.route.snapshot,
      this.router.routerState.snapshot
    );
  }
}
