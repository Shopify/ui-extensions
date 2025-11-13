/**
 * The available payment method types for POS transactions.
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
 */
export interface Payment {
  /**
   * The payment amount as a numeric value in the currency's base unit. For example, `100` represents $100.00 USD or €100.00 EUR. This is the actual amount tendered by the customer using this specific payment method. When multiple payment methods are used for a single transaction, multiple Payment objects exist, each with its own amount.
   */
  amount: number;
  /**
   * The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code for this payment (for example, `"USD"` for US dollars, `"CAD"` for Canadian dollars, `"EUR"` for euros, `"GBP"` for British pounds). This indicates which currency was used for this specific payment tender and determines how the amount is interpreted and displayed.
   */
  currency: string;
  /**
   * The payment method type used for this tender. Indicates how the customer paid (for example, `'Cash'` for physical cash, `'CreditCard'` for card payments, `'GiftCard'` for gift card redemption, `'ShopPay'` for Shop Pay, `'StoreCredit'` for store credit). Multiple payment types can be combined in a single transaction through multiple Payment objects.
   */
  type: PaymentMethod;
}
