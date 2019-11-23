import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';

import { DashboardComponent, StockListComponent } from './containers';
import { NavbarComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'stock',
        loadChildren: () =>
          import('@app/features/stock/stock.module').then(
            mod => mod.StockModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [DashboardComponent, NavbarComponent, StockListComponent]
})
export class DashboardModule {}
