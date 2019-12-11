import { createSelector } from '@ngrx/store';

import * as fromFeature from '@core/store/reducers';
import * as fromStock from '@core/store/reducers/stock.reducer';

export const getStockState = createSelector(
  fromFeature.getInventoryState,
  (state: fromFeature.InventoryState) => state.stocks
);

export const getStocksEntities = createSelector(
  getStockState,
  fromStock.getStocksEntities
);

export const getStocks = createSelector(getStocksEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getStocksLoading = createSelector(
  getStockState,
  fromStock.getStocksLoading
);
export const getStocksLoaded = createSelector(
  getStockState,
  fromStock.getStocksLoaded
);
