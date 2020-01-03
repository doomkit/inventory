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
  constructor(private authenticationService: AuthenticationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUser;
    if (currentUser && UserRole[currentUser.type] === UserRole.MANAGER) {
      return true;
    }
    return false;
  }
}
