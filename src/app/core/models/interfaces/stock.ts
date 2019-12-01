import { Address } from "@core/models";

export interface Stock {
  id: number;
  details: string;
  square: string;
  photo_url: string;
  address: Address;
}