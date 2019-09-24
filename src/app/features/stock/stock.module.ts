import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { reducers } from '@core/store';

import { StockComponent } from './stock.component';
import { StockItemComponent } from './components';
import { ItemsListComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: StockComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('stock', reducers)
  ],
  declarations: [StockComponent, ItemsListComponent, StockItemComponent]
})
export class StockModule {}
