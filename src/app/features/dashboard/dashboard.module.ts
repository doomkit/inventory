import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { StoreModule } from '@ngrx/store';

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
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    StoreModule.forRoot({})
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
