import { OrderState, Address, StockItem, User } from "@core/models";

export interface Order {
  id: number;
  number: number;
  recipient_name: string;
  delivery_date: Date;
  delivery_address: Address;
  state: OrderState;
  items: StockItem[];
  courier?: User;
}
