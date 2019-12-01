import { Action } from '@ngrx/store';

import { Stock, StockItem } from '@core/models';

// Load stocks
export const LOAD_STOCKS = '[Stock] Load Stocks';
export const LOAD_STOCKS_FAIL = '[Stock] Load Stocks Fail';
export const LOAD_STOCKS_SUCCESS = '[Stock] Load Stocks Success';

export class LoadStocks implements Action {
  readonly type = LOAD_STOCKS;
}

export class LoadStocksFail implements Action {
  readonly type = LOAD_STOCKS_FAIL;
  constructor(public payload: any) {}
}

export class LoadStocksSuccess implements Action {
  readonly type = LOAD_STOCKS_SUCCESS;
  constructor(public payload: Stock[]) {}
}

// Increase item quantity in stock
export const INCREASE_QUANTITY = '[Stock] Increase item quantity';
export const INCREASE_QUANTITY_FAIL = '[Stock] Increase item quantity Fail';
export const INCREASE_QUANTITY_SUCCESS =
  '[Stock] Increase item quantity Success';

export class IncreaseQuantity implements Action {
  readonly type = INCREASE_QUANTITY;
}

export class IncreaseQuantityFail implements Action {
  readonly type = INCREASE_QUANTITY_FAIL;
  constructor(public payload: any) {}
}

export class IncreaseQuantitySuccess implements Action {
  readonly type = INCREASE_QUANTITY_SUCCESS;
  constructor(public payload: StockItem[]) {}
}

// Decrease item quantity in stock
export const DECREASE_QUANTITY = '[Stock] Decrease item quantity';
export const DECREASE_QUANTITY_FAIL = '[Stock] Decrease item quantity Fail';
export const DECREASE_QUANTITY_SUCCESS =
  '[Stock] Decrease item quantity Success';

export class DecreaseQuantity implements Action {
  readonly type = DECREASE_QUANTITY;
}

export class DecreaseQuantityFail implements Action {
  readonly type = DECREASE_QUANTITY_FAIL;
  constructor(public payload: any) {}
}

export class DecreaseQuantitySuccess implements Action {
  readonly type = DECREASE_QUANTITY_SUCCESS;
  constructor(public payload: StockItem[]) {}
}

// Action types
export type StockAction =
  | LoadStocks
  | LoadStocksFail
  | LoadStocksSuccess
  | IncreaseQuantity
  | IncreaseQuantityFail
  | IncreaseQuantitySuccess
  | DecreaseQuantity
  | DecreaseQuantityFail
  | DecreaseQuantitySuccess;
