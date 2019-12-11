import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromItems from './stock-items.reducer';
import * as fromStocks from './stock.reducer';

export interface InventoryState {
  stocks: fromStocks.StockState;
  items: fromItems.StockItemState;
}

export const reducers: ActionReducerMap<InventoryState> = {
  stocks: fromStocks.reducer,
  items: fromItems.reducer
};

export const getInventoryState = createFeatureSelector<InventoryState>(
  'inventory'
);
