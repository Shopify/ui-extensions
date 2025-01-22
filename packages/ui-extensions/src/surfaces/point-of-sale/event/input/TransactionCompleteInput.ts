import {
  Discount,
  LineItem,
  PaymentMethod,
  ShippingLine,
  TaxLine,
} from '../../api';
import {BaseInput} from './BaseInput';

export interface TransactionCompleteInput extends BaseInput {
  transactionComplete: {
    discounts: Discount[];
    draftCheckoutId: number;
    lineItems: LineItem[];
    orderId?: number;
    paymentMethods: PaymentMethod[];
    shippingLines?: ShippingLine;
    taxLines?: TaxLine[];
  };
}
