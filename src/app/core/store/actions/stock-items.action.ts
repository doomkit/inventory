import { Action } from '@ngrx/store';

import { StockItem } from '@core/models';

// Load stock items
export const LOAD_ITEMS = '[Stock] Load Items';
export const LOAD_ITEMS_FAIL = '[Stock] Load Items Fail';
export const LOAD_ITEMS_SUCCESS = '[Stock] Load Items Success';

export class LoadItems implements Action {
  readonly type = LOAD_ITEMS;
}

export class LoadItemsFail implements Action {
  readonly type = LOAD_ITEMS_FAIL;
  constructor(public payload: any) {}
}

export class LoadItemsSuccess implements Action {
  readonly type = LOAD_ITEMS_SUCCESS;
  constructor(public payload: StockItem[]) {}
}

// Action types
export type ItemAction = LoadItems | LoadItemsFail | LoadItemsSuccess;
