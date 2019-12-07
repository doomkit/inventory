import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { StockService } from '@core/services';
import * as stockActions from '@core/store/actions/stock.action';

@Injectable()
export class StockEffects {
  @Effect()
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

  // @Effect()
  // increaseItemQuantity$ = createEffect(() => this.actions$.pipe(ofType));

  constructor(private actions$: Actions, private stockService: StockService) {}
}
