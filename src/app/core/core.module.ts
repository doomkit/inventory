import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard, ManagerGuard, CourierGuard } from './guards';

import { JwtInterceptor, ErrorInterceptor } from './interceptors';

import {
  UserService,
  StockItemsService,
  AuthenticationService
} from './services';

import { FooterComponent } from './components';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [FooterComponent],
  exports: [FooterComponent, HttpClientModule],
  providers: [
    AuthGuard,
    ManagerGuard,
    CourierGuard,
    UserService,
    AuthenticationService,
    StockItemsService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class CoreModule {}
