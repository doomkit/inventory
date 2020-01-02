import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { StockService } from '@core/services';
import * as stockActions from '@core/store/actions/stock.action';

@Injectable()
export class StockEffects {
  constructor(private actions$: Actions, private stockService: StockService) {}

  loadStocks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(stockActions.LOAD_STOCKS),
      mergeMap(() =>
        this.stockService.getStocks().pipe(
          map(stocks => new stockActions.LoadStocksSuccess(stocks)),
          catchError(error => of(new stockActions.LoadStocksFail(error)))
        )
      )
    )
  );

  // increaseItemQuantity$ = createEffect(() => this.actions$.pipe(ofType));
}
