import {Discount, LineItem} from './cart';
import {PaymentMethod} from './payment';
import {ShippingLine} from './shipping-line';
import {TaxLine} from './tax-line';

export interface Checkout {
  discounts: Discount[];
  draftCheckoutUuid: string;
  lineItems: LineItem[];
  orderId?: number;
  paymentMethods: PaymentMethod[];
  shippingLine?: ShippingLine;
  taxLines?: TaxLine[];
}
