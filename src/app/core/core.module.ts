import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './services';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [UserService, AuthGuard]
})
export class CoreModule {}
