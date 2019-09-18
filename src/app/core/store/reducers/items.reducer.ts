import * as fromItems from '../actions/items.action';
import { Item } from '@core/models';

export interface ItemState {
  data: Item[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: ItemState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state: ItemState = initialState,
  action: fromItems.ItemAction
): ItemState {
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
