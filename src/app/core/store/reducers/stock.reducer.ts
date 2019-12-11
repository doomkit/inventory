import * as fromStock from '../actions/stock.action';
import { Stock } from '@core/models';

export interface StockState {
  entities: { [id: number]: Stock };
  loaded: boolean;
  loading: boolean;
}

export const initialState: StockState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state: StockState = initialState,
  action: fromStock.StockAction
): StockState {
  switch (action.type) {
    case fromStock.LOAD_STOCKS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromStock.LOAD_STOCKS_SUCCESS: {
      const stocks = action.payload;
      const entities = stocks.reduce(
        (entities: { [id: number]: Stock }, stock: Stock) => {
          return {
            ...entities,
            [stock.id]: stock
          };
        },
        { ...state.entities }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }
    case fromStock.LOAD_STOCKS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}

export const getStocksEntities = (state: StockState) => state.entities;
export const getStocksLoading = (state: StockState) => state.loading;
export const getStocksLoaded = (state: StockState) => state.loaded;
