import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { StockItemsService } from '@app/core/services';
import * as stockItemActions from '@core/store/actions/stock-items.action';

@Injectable()
export class StockItemsEffects {
  @Effect()
  loadStockItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(stockItemActions.LOAD_ITEMS),
      mergeMap(() =>
        this.stockItemsService.getStockItems().pipe(
          map(items => new stockItemActions.LoadItemsSuccess(items)),
          catchError(error => of(new stockItemActions.LoadItemsFail(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private stockItemsService: StockItemsService
  ) {}
}
