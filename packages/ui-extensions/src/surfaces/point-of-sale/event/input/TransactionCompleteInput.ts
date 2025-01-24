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
    draftCheckoutUuid: string;
    lineItems: LineItem[];
    orderId?: number;
    paymentMethods: PaymentMethod[];
    shippingLine?: ShippingLine;
    taxLines?: TaxLine[];
  };
}
