import {Discount, LineItem} from './cart';
import {Payment} from './payment';
import {ShippingLine} from './shipping-line';
import {TaxLine} from './tax-line';

export interface Checkout {
  uuid: string;
  discounts: Discount[];
  draftCheckoutUuid: string;
  lineItems: LineItem[];
  orderId?: number;
  paymentMethods: Payment[];
  shippingLine?: ShippingLine;
  taxLines?: TaxLine[];
}
