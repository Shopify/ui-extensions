import type {MoneyV2} from './money';

/**
 * Represents a discount allocation showing how discounts are distributed across line items or carts. Discount allocations provide detailed breakdowns of how discount amounts are calculated and applied, particularly useful when multiple discounts interact or when discounts are split across multiple items.
 */
export interface DiscountAllocation {
  /**
   * The monetary amount allocated for this specific discount as a `MoneyV2` object with high-precision string-based calculation. This represents the actual discount value applied to the line item or cart after all discount calculations, combinations, and limitations are resolved. For example, if a 10% discount applies to a $100 item, the allocated amount would be `{amount: "10.00", currencyCode: "USD"}`. When multiple discounts apply to the same item, multiple allocation entries track how each discount contributes to the total savings.
   */
  allocatedAmount: MoneyV2;
}
