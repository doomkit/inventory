import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { StockItemsService } from '@app/core/services';

import * as stockItemActions from '../actions/stock-items.action';

@Injectable()
export class StockItemsEffects {
  constructor(
    private actions$: Actions,
    private stockItemsService: StockItemsService
  ) {}

  @Effect()
  loadStockItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(stockItemActions.LOAD_ITEMS),
      switchMap(() =>
        this.stockItemsService.getStockItems().pipe(
          map(items => new stockItemActions.LoadItemsSuccess(items)),
          catchError(error => of(new stockItemActions.LoadItemsFail(error)))
        )
      )
    )
  );
}
