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
export interface Payment {
  amount: number;
  currency: string;
  type: PaymentMethod;
}

/**
 * Information about the payment terminal or device used for processing
 */
export interface PaymentTerminal {
  /** Unique identifier for the terminal */
  id: string;
  /** Human-readable name of the terminal */
  name: string;
  /** Type of terminal (e.g., 'stripe_terminal', 'square_terminal', etc.) */
  type: string;
  /** Whether the terminal is currently online and available */
  isOnline: boolean;
  /** Additional terminal-specific metadata */
  metadata?: Record<string, any>;
}

/**
 * Extended payment information with additional processing details
 */
export interface PaymentWithDetails extends Payment {
  /** Optional payment terminal information */
  terminal?: PaymentTerminal;
  /** Optional tip amount */
  tip?: number;
  /** Whether the payment supports partial payments */
  allowPartial?: boolean;
  /** Customer-facing description of the payment */
  description?: string;
}
