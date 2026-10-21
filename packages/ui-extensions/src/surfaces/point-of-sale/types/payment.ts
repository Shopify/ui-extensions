/**
 * The available payment method types for POS transactions.
 * @publicDocs
 */
export type PaymentMethod =
  | 'Cash'
  | 'Custom'
  | 'CreditCard'
  | 'CardPresentRefund'
  | 'StripeCardPresentRefund'
  | 'GiftCard'
  | 'StripeCreditCard'
  | 'ShopPay'
  | 'StoreCredit'
  | 'Unknown';

/**
 * Represents a payment applied to a transaction, including the amount, currency, and payment method type.
 * @publicDocs
 */
export interface Payment {
  /**
   * The payment amount. For cash payments on `Sale` transactions in POS 11.16.0 and later, this is the cash the customer handed over, including any change given back. For other payment methods, other transaction types, and cash in earlier POS versions, it's the amount recorded on the payment transaction.
   */
  amount: number;
  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code associated with the location currently active on POS.
   */
  currency: string;
  /**
   * The payment method type.
   */
  type: PaymentMethod;
}
