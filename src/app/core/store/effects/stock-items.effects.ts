import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { StockItemsService } from '@app/core/services';

@Injectable()
export class StockItemsEffects {
  constructor(
    private actions$: Actions,
    private stockItemsService: StockItemsService
  ) {}

  loadStockItems$ = createEffect(() => this.actions$.pipe(ofType('')));
}
