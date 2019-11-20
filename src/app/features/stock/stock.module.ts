import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from '@core/store';

import { ManagerGuard } from '@core/guards';

import { StockComponent } from './stock.component';
import { StockItemComponent, ItemsFilterComponent } from './components';
import { ItemsListComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: StockComponent,
    canActivate: [ManagerGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('stock', reducers),
    EffectsModule.forFeature(effects),
    SharedModule
  ],
  declarations: [
    StockComponent,
    ItemsListComponent,
    StockItemComponent,
    ItemsFilterComponent
  ]
})
export class StockModule {}
