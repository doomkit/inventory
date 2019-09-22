import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './services';
import { AuthGuard } from './auth/auth.guard';

import { FooterComponent } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
  providers: [UserService, AuthGuard]
})
export class CoreModule {}
