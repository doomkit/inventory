import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './services';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [UserService]
})
export class CoreModule {}
