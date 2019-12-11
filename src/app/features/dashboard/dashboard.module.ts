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

import { StoreModule } from '@ngrx/store';
import { reducers, effects } from '@app/core/store';
import { EffectsModule } from '@ngrx/effects';

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
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('inventory', reducers),
    EffectsModule.forFeature(effects),
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    ControlPanelComponent,
    NavbarComponent,
    CreateItemModalComponent,
    DeleteItemModalComponent
  ]
})
export class DashboardModule {}
