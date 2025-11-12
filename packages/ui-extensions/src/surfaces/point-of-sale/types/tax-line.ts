import type {Money} from './money';

/**
 * Represents an individual tax line item showing tax details including title, amount, and rate.
 */
export interface TaxLine {
  /**
   * The display name of the tax as shown to merchants and customers (for example, "Sales Tax", "VAT", "GST", "State Tax"). This title identifies which tax jurisdiction or type is being applied to the item.
   */
  title: string;
  /**
   * The calculated tax amount as a `Money` object containing both the numeric value and currency information. This represents the actual tax charged on the item or cart, calculated by multiplying the taxable amount by the tax rate.
   */
  price: Money;
  /**
   * The tax rate as a decimal value between 0 and 1. For example, `0.05` represents 5% tax, `0.13` represents 13% tax, and `0.20` represents 20% tax. This rate is applied to the taxable amount to calculate the tax price.
   */
  rate: number;
  /**
   * A unique identifier for this specific tax line entry. Commonly used for tracking individual tax applications, reconciliation, or referencing specific tax calculations. Returns `undefined` when no identifier is assigned.
   */
  uuid?: string;
  /**
   * The range of possible tax rates when the tax has variable rates based on conditions like product type, customer location, or tax thresholds. Contains `min` and `max` values as decimals (for example, `{min: 0.05, max: 0.10}` for 5-10% variable tax). Returns `undefined` for fixed-rate taxes.
   */
  rateRange?: {min: number; max: number};
  /**
   * Whether this tax is currently active and being applied. When `false`, the tax exists in configuration but isn't being charged. Returns `undefined` when enable status isn't specified.
   */
  enabled?: boolean;
}
