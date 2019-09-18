import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from '@core/store';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('stock', reducers)],
  declarations: [StockComponent]
})
export class StockModule {}
