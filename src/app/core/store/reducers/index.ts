import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as fromItems from './stock-items.reducer';

export interface StockState {
  items: fromItems.StockItemState;
}
export const reducers: ActionReducerMap<StockState> = {
  items: fromItems.reducer
};

export const getStockState = createFeatureSelector<StockState>('stock');
export const getStockItemsState = createSelector(
  getStockState,
  (state: StockState) => state.items
);
export const getAllStockItems = createSelector(
  getStockItemsState,
  fromItems.getStockItems
);
export const getAllStockItemsLoaded = createSelector(
  getStockItemsState,
  fromItems.getStockItemsLoaded
);
export const getAllStockItemsLoading = createSelector(
  getStockItemsState,
  fromItems.getStockItemsLoading
);
