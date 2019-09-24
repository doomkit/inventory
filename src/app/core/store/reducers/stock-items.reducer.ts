import * as fromItems from '../actions/stock-items.action';
import { StockItem } from '@core/models';

export interface StockItemState {
  data: StockItem[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: StockItemState = {
  data: [
    {
      id: 0,
      name: 'Item One'
    },
    {
      id: 1,
      name: 'Item Two'
    },
    {
      id: 2,
      name: 'Item Three'
    }
  ],
  loaded: false,
  loading: false
};

export function reducer(
  state: StockItemState = initialState,
  action: fromItems.ItemAction
): StockItemState {
  switch (action.type) {
    case fromItems.LOAD_ITEMS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromItems.LOAD_ITEMS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
    case fromItems.LOAD_ITEMS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}

export const getStockItemsLoading = (state: StockItemState) => state.loading;
export const getStockItemsLoaded = (state: StockItemState) => state.loaded;
export const getStockItems = (state: StockItemState) => state.data;
