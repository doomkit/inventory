import { Address } from '@core/models';
import { InStock } from './in-stock';

export interface Stock {
  stockId: number;
  name: string;
  details: string;
  square: string;
  photo: string;
  address?: Address;
  inStock?: InStock[];
}
