import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AuthenticationService } from '@core/services';
import { UserRole } from '@core/models';

@Injectable()
export class ManagerGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUser;
    if (currentUser && currentUser.role === UserRole.MANAGER) {
      return true;
    }
    this.router.navigate(['/dasboard'], {
      queryParams: {
        from: state.url
      }
    });
    return false;
  }
}
