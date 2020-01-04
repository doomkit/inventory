import { StockItemCategory } from '@core/models';

export interface StockItem {
  itemId?: number;
  description: string;
  category?: StockItemCategory;
  photo: string;
  weight: number;
  manufacturer?: {
    companyId: number;
    companyType: string;
    companyName: string;
    valid: boolean;
  };
}
