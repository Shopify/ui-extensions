import {LineItem} from './cart';

export interface LineItemRefund {
  createdAt: string;
  quantity: number;
}

export interface OrderLineItem extends LineItem {
  // Number of remaining goods
  currentQuantity: number;
  refunds?: LineItemRefund[];
}
