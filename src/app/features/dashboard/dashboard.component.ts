import { Component } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  UrlSegmentGroup,
  PRIMARY_OUTLET,
  UrlSegment,
  NavigationEnd
} from '@angular/router';
import { AuthGuard } from '@core/auth/auth.guard';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard">
      <app-breadcrumb [breadcrumbs]="breadcrumbs"></app-breadcrumb>
      <a routerLink="stock">Stock</a>
      <button (click)="logOut()">Log out</button>
    </div>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  breadcrumbs: UrlSegment[];

  constructor(
    private authService: AuthGuard,
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
    sessionStorage.removeItem('username');
    this.authService.canActivate(
      this.route.snapshot,
      this.router.routerState.snapshot
    );
  }
}
