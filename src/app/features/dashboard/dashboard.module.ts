import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';

import { DashboardComponent, ControlPanelComponent } from './containers';
import {
  NavbarComponent,
  CreateItemModalComponent,
  DeleteItemModalComponent
} from './components';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: ControlPanelComponent
      },
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
  declarations: [
    DashboardComponent,
    ControlPanelComponent,
    NavbarComponent,
    CreateItemModalComponent,
    DeleteItemModalComponent
  ]
})
export class DashboardModule {}
