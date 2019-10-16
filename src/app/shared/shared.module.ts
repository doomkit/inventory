import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  ButtonComponent,
  BreadcrumbComponent,
  PaginationComponent
} from './components';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [ButtonComponent, BreadcrumbComponent, PaginationComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    BreadcrumbComponent,
    PaginationComponent
  ]
})
export class SharedModule {}
