import { Address } from '@core/models';

export interface Stock {
  id: number;
  name: string;
  details: string;
  square: string;
  photo_url: string;
  address?: Address;
}
