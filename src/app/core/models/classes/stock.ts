import { StockItemCategory } from '@core/models';
import { StockItem } from '@core/models';

export class Stock {
  id: number;
  details: string;
  square: string;
  photo_url: string;

  constructor() {}

  addItem(item: StockItem): void {
    // TODO:
  }

  getCategories(): StockItemCategory[] {
    // TODO:
    return [];
  }

  getRareItems(): StockItem[] {
    // TODO:
    return [];
  }

  getItems(): StockItem[] {
    // TODO:
    return [];
  }
}
