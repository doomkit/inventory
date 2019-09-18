import { ActionReducerMap } from '@ngrx/store';
import * as fromItems from './items.reducer';

export interface StockState {
  items: fromItems.ItemState;
}
export const reducers: ActionReducerMap<StockState> = {
  items: fromItems.reducer
};
