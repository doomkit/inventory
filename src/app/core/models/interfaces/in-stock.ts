import { StockItem } from './stock-item';

export interface InStock {
  inStockId: number;
  item: StockItem;
  quantity: number;
}
