import {BaseTransactionComplete} from '../../types/base-transaction-complete';
import {LineItem} from '../../types/cart';

/**
 * Defines the data structure for completed sale transactions. Contains all information about a finalized sale including purchased items, payment details, pricing totals, and customer information.
 */
export interface SaleTransactionData extends BaseTransactionComplete {
  /**
   * The transaction type identifier, always `'Sale'` for sale transactions. This discriminator allows TypeScript to narrow the union type when working with mixed transaction data and helps identify sales in transaction lists or reports.
   */
  transactionType: 'Sale';
  /**
   * The [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) of the draft checkout if this sale originated from a draft order that was previously created and saved. Draft orders allow merchants to create orders offline, save them for later, send invoices to customers, or prepare complex orders before finalizing. Returns `undefined` for regular sales that weren't created from draft orders. This UUID links the completed sale back to the original draft for tracking and reconciliation.
   */
  draftCheckoutUuid?: string;
  /**
   * An array of all line items purchased in this sale transaction. Each line item contains product details, quantities, pricing, discounts, properties, and tax information. The line items represent what the customer actually bought, with quantities reflecting items leaving inventory. Line items are ordered as they appeared in the cart during checkout. Empty arrays aren't expected for completed sale transactions as sales require at least one item.
   */
  lineItems: LineItem[];
}
