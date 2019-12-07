import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { StockItemsService } from '@app/core/services';
import * as stockItemActions from '@core/store/actions/stock-items.action';
import { StockItem } from '@app/core/models';

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

  @Effect()
  createStockItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(stockItemActions.CREATE_ITEM),
      mergeMap((stockItem: StockItem) =>
        this.stockItemsService.createStockItem(stockItem).pipe(
          map(stockItem => new stockItemActions.CreateItemSuccess(stockItem)),
          catchError(error => of(new stockItemActions.CreateItemFail(error)))
        )
      )
    )
  );

  @Effect()
  deleteStockItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(stockItemActions.DELETE_ITEM),
      mergeMap((stockItem: StockItem) =>
        this.stockItemsService.deleteStockItem(stockItem).pipe(
          map(stockItem => new stockItemActions.DeleteItemSuccess(stockItem)),
          catchError(error => of(new stockItemActions.DeleteItemFail(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private stockItemsService: StockItemsService
  ) {}
}
