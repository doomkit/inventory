import { Action } from '@ngrx/store';
import { StockItem } from '@core/models';

// Load stock items
export const LOAD_ITEMS = '[StockItems] Load Items';
export const LOAD_ITEMS_FAIL = '[StockItems] Load Items Fail';
export const LOAD_ITEMS_SUCCESS = '[StockItems] Load Items Success';

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

// Create stock item
export const CREATE_ITEM = '[StockItems] Create Item';
export const CREATE_ITEM_FAIL = '[StockItems] Create Item Fail';
export const CREATE_ITEM_SUCCESS = '[StockItems] Create Item Success';

export class CreateItem implements Action {
  readonly type = CREATE_ITEM;
}

export class CreateItemFail implements Action {
  readonly type = CREATE_ITEM_FAIL;
  constructor(public payload: any) {}
}

export class CreateItemSuccess implements Action {
  readonly type = CREATE_ITEM_SUCCESS;
  constructor(public payload: StockItem) {}
}

// Delete stock item
export const DELETE_ITEM = '[StockItems] Delete Item';
export const DELETE_ITEM_FAIL = '[StockItems] Delete Item Fail';
export const DELETE_ITEM_SUCCESS = '[StockItems] Delete Item Success';

export class DeleteItem implements Action {
  readonly type = DELETE_ITEM;
}

export class DeleteItemFail implements Action {
  readonly type = DELETE_ITEM_FAIL;
  constructor(public payload: any) {}
}

export class DeleteItemSuccess implements Action {
  readonly type = DELETE_ITEM_SUCCESS;
  constructor(public payload: StockItem) {}
}

// Add stock item to stock
export const ADD_TO_STOCK = '[StockItems] Add Item';
export const ADD_TO_STOCK_FAIL = '[StockItems] Add Item Fail';
export const ADD_TO_STOCK_SUCCESS = '[StockItems] Add Item Success';

export class AddToStock implements Action {
  readonly type = ADD_TO_STOCK;
}

export class AddToStockFail implements Action {
  readonly type = ADD_TO_STOCK_FAIL;
  constructor(public payload: any) {}
}

export class AddToStockSuccess implements Action {
  readonly type = ADD_TO_STOCK_SUCCESS;
  constructor(public payload: StockItem[]) {}
}

// Remove stock item from stock
export const REMOVE_FROM_STOCK = '[StockItems] Remove Item';
export const REMOVE_FROM_STOCK_FAIL = '[StockItems] Remove Item Fail';
export const REMOVE_FROM_STOCK_SUCCESS = '[StockItems] Remove Item Success';

export class RemoveFromStock implements Action {
  readonly type = REMOVE_FROM_STOCK;
}

export class RemoveFromStockFail implements Action {
  readonly type = REMOVE_FROM_STOCK_FAIL;
  constructor(public payload: any) {}
}

export class RemoveFromStockSuccess implements Action {
  readonly type = REMOVE_FROM_STOCK_SUCCESS;
  constructor(public payload: StockItem[]) {}
}

// Action types
export type ItemAction =
  | LoadItems
  | LoadItemsFail
  | LoadItemsSuccess
  | CreateItem
  | CreateItemFail
  | CreateItemSuccess
  | DeleteItem
  | DeleteItemFail
  | DeleteItemSuccess
  | AddToStock
  | AddToStockFail
  | AddToStockSuccess
  | RemoveFromStock
  | RemoveFromStockFail
  | RemoveFromStockSuccess;
