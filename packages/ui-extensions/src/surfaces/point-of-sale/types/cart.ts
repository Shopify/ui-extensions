import {CountryCode} from './country-code';
import {TaxLine} from './tax-line';
import {DiscountAllocation} from './discount-allocation';

export interface Cart {
  /**
   * Indicates whether the cart is currently editable.
   *
   * An undefined value should be treated as `true` for backward compatibility.
   */
  editable?: boolean;
  subtotal: string;
  taxTotal: string;
  grandTotal: string;
  note?: string;
  cartDiscount?: Discount;
  cartDiscounts: Discount[];
  customer?: Customer;
  lineItems: LineItem[];
  properties: Record<string, string>;
}

export interface CartUpdateInput {
  note?: string;
  cartDiscount?: Discount;
  cartDiscounts: Discount[];
  customer?: Customer;
  lineItems: LineItem[];
  properties: Record<string, string>;
}

export interface Customer {
  id: number;
}

export interface LineItem {
  uuid: string;
  price?: number;
  quantity: number;
  title?: string;
  variantId?: number;
  productId?: number;
  discounts: Discount[];
  discountAllocations?: DiscountAllocation[];
  taxable: boolean;
  taxLines: TaxLine[];
  sku?: string;
  vendor?: string;
  properties: {[key: string]: string};
  isGiftCard: boolean;
  attributedUserId?: number;
  requiresSellingPlan?: boolean;
  hasSellingPlanGroups?: boolean;
  /**
   * The currently selected selling plan for this line item.
   */
  sellingPlan?: SellingPlan;
  /**
   * Bundle components for this line item. Only present for product bundles.
   * Each component represents an individual item within the bundle with its own tax information.
   */
  components?: LineItemComponent[];
}

/**
 * Represents a component of a product bundle line item.
 * Bundle components contain the individual items that make up a bundle,
 * each with their own pricing and tax information.
 */
export interface LineItemComponent {
  /** The title/name of the component product */
  title?: string;
  /** The quantity of this component in the bundle */
  quantity: number;
  /** The price of this component */
  price?: number;
  /** Whether this component is taxable */
  taxable: boolean;
  /** Tax lines applied to this component */
  taxLines: TaxLine[];
  /** The variant ID of this component, if applicable */
  variantId?: number;
  /** The product ID of this component, if applicable */
  productId?: number;
}

/**
 * Represents a selling plan associated with a line item.
 */
export interface SellingPlan {
  /**
   * The unique identifier of the selling plan.
   */
  id: number;
  /**
   * The name of the selling plan.
   */
  name: string;
  /**
   * The fingerprint of the applied selling plan within this cart session.
   * Provided by POS. Not available during refund / exchanges.
   */
  digest?: string;
  /**
   * The interval of the selling plan. (DAY, WEEK, MONTH, YEAR).
   */
  deliveryInterval?: string;
  /**
   * The number of intervals between deliveries.
   */
  deliveryIntervalCount?: number;
}

export interface Discount {
  amount: number;
  currency?: string;
  discountDescription?: string;
  type?: string;
}

/**
 * Parameters for adding custom properties to a line item.
 */
export interface SetLineItemPropertiesInput {
  /**
   * The uuid belonging to the line item which should receive the custom properties.
   */
  lineItemUuid: string;
  /**
   * The custom properties to apply to the line item.
   */
  properties: Record<string, string>;
}

/**
 * Parameters for adding a line item discount.
 */
export interface SetLineItemDiscountInput {
  /**
   * The uuid belonging to the line item which should receive the discount.
   */
  lineItemUuid: string;
  /**
   * The discount to be applied to the line item.
   */
  lineItemDiscount: LineItemDiscount;
}

export interface LineItemDiscount {
  /**
   * The title of the line item discount.
   */
  title: string;
  /**
   * The discount type.
   */
  type: 'Percentage' | 'FixedAmount';
  /**
   * The percentage or fixed amount for the discount.
   */
  amount: string;
}

export interface CustomSale {
  quantity: number;
  title: string;
  price: string;
  taxable: boolean;
}

export interface Address {
  address1?: string;
  address2?: string;
  city?: string;
  company?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  province?: string;
  country?: string;
  zip?: string;
  name?: string;
  provinceCode?: string;
  countryCode?: CountryCode;
}

export interface SetLineItemSellingPlanInput {
  /**
   * The uuid of the line item to which the selling plan should be applied.
   */
  lineItemUuid: string;
  /**
   * The ID of the selling plan to apply to the line item.
   */
  sellingPlanId: number;
  /**
   * The name of the selling plan to apply to the line item.
   * If not provided, POS will try to fetch it from the server after syncing the cart.
   */
  sellingPlanName?: string;
}
