import {BaseTransactionComplete} from '../../types/base-transaction-complete';
import {LineItem} from '../../types/cart';

/**
 * Defines the data structure for completed return transactions. Contains all information about items being returned to the merchant, refund amounts, and associated IDs for tracking returns through the Shopify system.
 */
export interface ReturnTransactionData extends BaseTransactionComplete {
  /**
   * The transaction type identifier, always `'Return'` for return transactions. This discriminator allows TypeScript to narrow the union type and helps systems identify returns vs sales or exchanges when processing mixed transaction types.
   */
  transactionType: 'Return';
  /**
   * The unique numeric identifier for the refund record created when processing this return. This ID links to Shopify's refund tracking system and can be used for refund lookups, audit trails, or accounting reconciliation. Returns `undefined` when the return doesn't generate a refund (for example, store credit only, exchange-only returns) or when the refund is still being processed asynchronously.
   */
  refundId?: number;
  /**
   * The unique numeric identifier for this return transaction in Shopify's system. This ID distinguishes this return from other returns and can be used for return tracking, reporting, or customer service lookups. Returns `undefined` when the return ID hasn't been assigned yet or when the return is processed through a different mechanism.
   */
  returnId?: number;
  /**
   * The unique numeric identifier linking this return to an associated exchange transaction. When present, indicates this return is the return portion of an exchange where the customer is swapping items. The exchange ID connects the return (items coming back) with the sale (items going out) in a single atomic exchange operation. Returns `undefined` for standalone returns that aren't part of an exchange.
   */
  exchangeId?: number;
  /**
   * An array of all line items being returned to the merchant in this transaction. Each line item contains the product details, quantities being returned, original pricing, and any refunds applied. The quantities represent items being returned to inventory. Line items maintain their original structure from the sale but the quantities reflect only what's being returned, not the original purchase quantity. The array must contain at least one item for a valid return transaction.
   */
  lineItems: LineItem[];
}
