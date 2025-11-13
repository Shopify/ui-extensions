import {BaseTransactionComplete} from '../../types/base-transaction-complete';
import {LineItem} from '../../types/cart';

/**
 * Defines the data structure for completed exchange transactions. Contains all information about an atomic swap where a customer returns items and simultaneously purchases replacement items in a single transaction.
 */
export interface ExchangeTransactionData extends BaseTransactionComplete {
  /**
   * The transaction type identifier, always `'Exchange'` for exchange transactions. This discriminator allows TypeScript to narrow the union type and helps systems identify exchanges vs sales or returns when processing mixed transaction types.
   */
  transactionType: 'Exchange';
  /**
   * The unique numeric identifier for the return portion of this exchange in Shopify's system. This ID tracks the items being returned back to the merchant and can be used for return reporting, inventory management, or linking to the original sale. Returns `undefined` when the return ID hasn't been assigned yet or when processed through a different tracking mechanism.
   */
  returnId?: number;
  /**
   * The unique numeric identifier for this exchange transaction in Shopify's system. This ID represents the entire exchange operation (both return and new sale portions combined) and can be used for exchange tracking, reporting, or customer service lookups. Returns `undefined` when the exchange ID hasn't been assigned yet or when the exchange is still being processed.
   */
  exchangeId?: number;
  /**
   * An array of new line items that the customer is purchasing as part of the exchange. These are the replacement items being added to the customer—they represent products leaving inventory just like a regular sale. Each line item contains product details, quantities, pricing, and any discounts applied to the new items. The pricing totals in `BaseTransactionComplete` reflect the net transaction after accounting for both returned and new items. This array can be empty for exchanges where the customer is only returning items without taking new ones (though this is more commonly processed as a regular return).
   */
  lineItemsAdded: LineItem[];
  /**
   * An array of line items that the customer is returning as part of the exchange. These are the original items coming back to the merchant—they represent products being returned to inventory. Each line item contains the original product details, quantities being returned, and original pricing. The quantities indicate how many units of each item are being returned, not the original purchase quantity. Together with `lineItemsAdded`, this shows the complete picture of what's being swapped. This array can be empty for exchanges where the customer is only taking new items without returning anything (though this is more commonly processed as a regular sale).
   */
  lineItemsRemoved: LineItem[];
}
