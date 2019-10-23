import { StockItemCategory } from '@core/models';

export interface StockItem {
  id: number;
  name: string;
  description?: string;
  category?: StockItemCategory;
  photo?: string;
  weight?: number;
}
