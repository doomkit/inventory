import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserService, StockItemsService } from './services';
import { AuthGuard } from './auth/auth.guard';

import { FooterComponent } from './components';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [FooterComponent],
  exports: [FooterComponent, HttpClientModule],
  providers: [AuthGuard, UserService, StockItemsService]
})
export class CoreModule {}
