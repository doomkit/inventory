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
import { Observable } from 'rxjs';
import { User } from '@app/core/models';

@Component({
  selector: 'app-dashboard',
  template: `
    <div style="min-height: 100%;">
      <app-navbar
        [username]="(user$ | async).name"
        (logout)="onLogout()"
      ></app-navbar>
      <!-- <app-breadcrumb [breadcrumbs]="breadcrumbs"></app-breadcrumb> -->
      <router-outlet></router-outlet>
    </div>
  `
})
export class DashboardComponent {
  breadcrumbs: UrlSegment[];
  user$: Observable<User>;

  constructor(
    private authService: AuthenticationService,
    private authGuard: AuthGuard,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.user$ = authService.currentUser$;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const tree = router.parseUrl(this.router.url);
        const primary: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
        this.breadcrumbs = primary.segments;
      }
    });
  }

  onLogout() {
    this.authService.logout();
    this.authGuard.canActivate(
      this.route.snapshot,
      this.router.routerState.snapshot
    );
  }
}
