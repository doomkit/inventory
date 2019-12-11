import { createSelector } from '@ngrx/store';

import * as fromItems from '../reducers/stock-items.reducer';
import * as fromFeature from '../reducers';

export const getStockItemsState = createSelector(
  fromFeature.getInventoryState,
  (state: fromFeature.InventoryState) => state.items
);

export const getStockItems = createSelector(
  getStockItemsState,
  fromItems.getStockItems
);

export const getStockItemsLoaded = createSelector(
  getStockItemsState,
  fromItems.getStockItemsLoaded
);

export const getStockItemsLoading = createSelector(
  getStockItemsState,
  fromItems.getStockItemsLoading
);
