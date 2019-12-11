import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from '@core/store';

import { ManagerGuard } from '@core/guards';

import { StockComponent } from './stock.component';
import {
  StockItemComponent,
  ItemsFilterComponent,
  StockListItemComponent
} from './components';
import { ItemsListComponent, StockListComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: StockComponent,
    canActivate: [ManagerGuard],
    children: [
      {
        path: '',
        component: StockListComponent,
        canActivate: [ManagerGuard]
      },
      {
        path: ':id',
        component: ItemsListComponent,
        canActivate: [ManagerGuard]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('inventory', reducers),
    EffectsModule.forFeature(effects),
    SharedModule
  ],
  declarations: [
    StockComponent,
    ItemsListComponent,
    StockItemComponent,
    ItemsFilterComponent,
    StockListComponent,
    StockListItemComponent
  ]
})
export class StockModule {}
