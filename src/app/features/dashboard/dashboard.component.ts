import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthGuard } from '@app/core/auth/auth.guard';

@Component({
  selector: 'app-dashboard',
  template: `
    <p>
      dashboard Works!
    </p>
    <button (click)="logOut()">Log out</button>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(
    private authService: AuthGuard,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  logOut() {
    sessionStorage.removeItem('username');
    this.authService.canActivate(
      this.route.snapshot,
      this.router.routerState.snapshot
    );
  }
}
