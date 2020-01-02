import * as fromItems from '../actions/stock-items.action';
import { StockItem } from '@core/models';

export interface StockItemState {
  entities: { [id: number]: StockItem };
  loaded: boolean;
  loading: boolean;
}

export const initialState: StockItemState = {
  entities: {},
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
      const items = action.payload;
      const entities = items.reduce(
        (entities: { [id: number]: StockItem }, item: StockItem) => {
          return {
            ...entities,
            [item.id]: item
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

    case fromItems.CREATE_ITEM_SUCCESS: {
      const item = action.payload;
      const entities = { ...state.entities, [item.id]: item };
      return {
        ...state,
        entities
      };
    }
    case fromItems.CREATE_ITEM_FAIL:
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
export const getStockItems = (state: StockItemState) => state.entities;
