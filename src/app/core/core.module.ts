import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from './auth/auth.guard';
import { JwtInterceptor, ErrorInterceptor } from './interceptors';

import {
  UserService,
  StockItemsService,
  AuthenticationService
} from './services';

import { FooterComponent } from './components';

// FIXME: remove this when real backend will be prepared
import { fakeBackendProvider } from './helpers/fake-backend';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [FooterComponent],
  exports: [FooterComponent, HttpClientModule],
  providers: [
    AuthGuard,
    UserService,
    AuthenticationService,
    StockItemsService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // FIXME: remove this when real backend will be prepared
    fakeBackendProvider
  ]
})
export class CoreModule {}
