import type {Money} from './money';
import type {TaxLine} from './tax-line';

/**
 * Represents a shipping charge applied to an order, including the price and applicable taxes.
 */
export interface ShippingLine {
  /**
   * A unique string identifier for this shipping line entry. This handle distinguishes between multiple shipping options on the same order and is commonly used for tracking, updates, or API operations. Returns `undefined` when no handle is assigned.
   */
  handle?: string;
  /**
   * The shipping charge amount as a Money object containing both the numeric value and currency information. This is the cost the customer pays for shipping, excluding any taxes which are tracked separately in `taxLines`.
   */
  price: Money;
  /**
   * The customer-facing display name for the shipping method (for example, "Standard Shipping", "Express Delivery", "Local Pickup", "Free Shipping"). This title appears on receipts, order confirmations, and in the checkout flow. Returns `undefined` when no title is provided.
   */
  title?: string;
  /**
   * An array of tax lines applied to this shipping charge. Each tax line represents a separate tax jurisdiction or type (for example, state tax, federal tax, VAT). The sum of all tax line amounts represents the total tax on shipping. Returns `undefined` or empty array when shipping is tax-exempt or tax information isn't available.
   */
  taxLines?: TaxLine[];
}

/**
 * Represents a calculated shipping line with specific shipping or retail method type.
 */
export interface CalculatedShippingLine extends ShippingLine {
  /**
   * The type identifier for custom shipping. This is always `'Custom'` to distinguish from calculated shipping lines. Custom shipping rates are manually set by merchants rather than calculated by carrier APIs or automated systems.
   */
  type: 'Calculated';
  /**
   * The shipping method category indicating whether this is standard shipping delivery or in-store retail pickup:
   * - `'SHIPPING'`: Traditional carrier-based shipping where items are delivered to a customer address.
   * - `'RETAIL'`: In-store pickup or buy-online-pickup-in-store (BOPIS) where customers collect items at a physical location.
   */
  methodType: 'SHIPPING' | 'RETAIL';
}

/**
 * Represents a custom shipping line with merchant-defined shipping charges.
 */
export interface CustomShippingLine extends ShippingLine {
  /**
   * The type identifier for custom shipping. This is always `'Custom'` to distinguish from calculated shipping lines. Custom shipping rates are manually set by merchants rather than calculated by carrier APIs or automated systems.
   */
  type: 'Custom';
}
