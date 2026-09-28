/**
 * The available payment method types for POS transactions.
 *
 * Not every value is produced in every context. `Unknown` is returned only for
 * sale transactions whose payment details can't be classified. On return and
 * exchange transactions, unrecognized payment gateways are returned as
 * `Custom`. `CardPresentRefund` isn't currently returned by POS.
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
   * The payment amount.
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
