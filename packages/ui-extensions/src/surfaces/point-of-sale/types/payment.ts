export type PaymentMethod =
  | CashPayment
  | CreditPayment
  | GiftCardPayment
  | ShopPayPayment
  | CustomPayment
  | UnknownPayment;

export type CardSource = 'manual' | 'swiped' | 'emv';

interface BasePayment {
  amount: string;
}

interface CreditPayment extends BasePayment {
  type: 'CreditCard';
  brand: string;
  tipAmount: string;
  cardSource?: CardSource;
  hasPendingOfflineTransactions: boolean;
}

interface CashPayment extends BasePayment {
  type: 'Cash';
  changeAmount: string;
  roundedAmount?: string;
}

interface GiftCardPayment extends BasePayment {
  type: 'GiftCard';
  lastCharacters: string;
  balance?: string;
}

interface ShopPayPayment extends BasePayment {
  type: 'ShopPay';
  isInstallmentsPayment: boolean;
  orderTransactionId?: string;
}

interface CustomPayment extends BasePayment {
  type: 'Custom';
  name: string;
}

interface UnknownPayment extends BasePayment {
  type: 'Unknown';
}
