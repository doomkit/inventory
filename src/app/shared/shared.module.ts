import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  ButtonComponent,
  BreadcrumbComponent,
  PaginationComponent
} from './components';

import { SearchPipe } from './pipes';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    ButtonComponent,
    BreadcrumbComponent,
    PaginationComponent,
    SearchPipe
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    BreadcrumbComponent,
    PaginationComponent,
    SearchPipe
  ]
})
export class SharedModule {}
