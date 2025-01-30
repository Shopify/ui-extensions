export type PaymentMethod =
  | 'Cash'
  | 'Custom'
  | 'CreditCard'
  | 'CardPresentRefund'
  | 'StripeCardPresentRefund'
  | 'GiftCard'
  | 'StripeCreditCard'
  | 'ShopPay'
  | 'Unknown';
export interface Payment {
  amount: number;
  currency: string;
  type: PaymentMethod;
}
