import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '@core/services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const currentUser = this.authenticationService.currentUser;
    if (currentUser && currentUser.jwtResponse.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.jwtResponse.token}`
        }
      });
    }
    return next.handle(request);
  }
}
