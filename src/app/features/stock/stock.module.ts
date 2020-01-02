import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

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
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
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
