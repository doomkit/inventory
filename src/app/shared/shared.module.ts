import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from './components';
import { BreadcrumbComponent } from './components';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [ButtonComponent, BreadcrumbComponent],
  exports: [
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbComponent
  ]
})
export class SharedModule {}
