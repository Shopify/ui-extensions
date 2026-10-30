import {CountryCode} from './country-code';
import {TaxLine} from './tax-line';
import {DiscountAllocation} from './discount-allocation';
import type {OrderApiContent} from '../api/order-api/order-api';

/**
 * The properties shared by every cart view. `Cart` combines them with the `cartType` discriminant and, for return and exchange carts, the `return` property.
 */
interface CartBase {
  /**
   * Indicates whether the cart is currently editable. An `undefined` value should be treated as `true` for backward compatibility. Use this to determine if cart modification operations are allowed.
   */
  editable?: boolean;
  /**
   * The subtotal amount of the cart before taxes and discounts, formatted as a currency string.
   */
  subtotal: string;
  /**
   * The total tax amount for the cart, formatted as a currency string.
   */
  taxTotal: string;
  /**
   * The final total amount including all items, taxes, and discounts, formatted as a currency string.
   */
  grandTotal: string;
  /**
   * The ISO 4217 currency code for this cart.
   */
  currency: string;
  /**
   * The cart note to set during bulk update. Replaces existing note or sets new note if none exists. Set to `undefined` to remove current note.
   */
  note?: string;
  /**
   * The cart-level discount to apply during bulk update. Replaces existing cart discount. Set to `undefined` to remove current discount.
   */
  cartDiscount?: Discount;
  /**
   * An array of cart-level discounts to apply during bulk update. Replaces all existing cart discounts with the provided array.
   */
  cartDiscounts: Discount[];
  /**
   * The customer to associate with the cart during bulk update. Replaces existing customer or converts guest cart to customer cart.
   */
  customer?: Customer;
  /**
   * The line items in the cart. In a `Checkout` cart, these are the items being sold. In a `Return` or `Exchange` cart, these are only the exchange line items that the customer is buying in place of the returned items; the returned items are listed in `cart.return.lineItems` instead. An `Unsupported` cart that the returns and exchanges pilot provides has no line items.
   */
  lineItems: LineItem[];
  /**
   * The custom key-value properties to apply to the line item. Merged with existing properties—duplicate keys overwrite existing values.
   */
  properties: Record<string, string>;
  /**
   * The metafields on the cart for the current sale. Checkout only: this array is empty in `Return`, `Exchange`, and `Unsupported` carts, and it never contains the original order's metafields (to read those, use the Admin API with `cart.return.order.id` once it's defined). In the returns and exchanges pilot it's always an empty array until the supporting read data exists, so an empty array doesn't mean that the cart has no metafields. It's `undefined` when the extension isn't enrolled in the pilot or the running POS version doesn't provide it.
   */
  metafields?: Metafield[];
}

/**
 * Represents the shopping cart state, including line items, pricing, customer information, and applied discounts. Provides comprehensive access to all cart data and operations.
 *
 * The `cartType` property identifies what the cart represents. Check it to narrow the type: when `cartType` is `'Return'` or `'Exchange'`, the `return` property is available and lists the items selected for return.
 *
 * Return and exchange carts are available only when all of the following are true:
 * - The extension runs on API version `2027-01` or later.
 * - The app is enrolled in the returns and exchanges pilot.
 * - The POS app version supports it.
 *
 * When any of these isn't true, the cart keeps the shape and behavior it had before return and exchange support: `cartType` can be `'Checkout'`, `'Unsupported'`, or `undefined` (older POS versions don't provide it), `return` is absent, the returned items aren't included, and the optional `metafields` properties are `undefined`.
 *
 * Consumers must handle the absence of these properties. Absence means the information isn't available; it doesn't mean that nothing was returned or that the cart has no metafields.
 * @publicDocs
 */
export type Cart = CartBase &
  (
    | {
        /**
         * The kind of cart this is. `undefined` when the running POS version doesn't provide it, and on cart snapshots in events that don't include it.
         */
        cartType?: 'Checkout' | 'Unsupported';
      }
    | {
        /**
         * The kind of cart this is. `'Return'` or `'Exchange'` while native POS has a return or exchange in progress.
         */
        cartType: 'Return' | 'Exchange';
        /**
         * The original order and the items selected for return. Only present when `cartType` is `'Return'` or `'Exchange'`.
         */
        return: {
          /** The original order being returned against. Its `id` and `name` can each be `undefined` when POS doesn't know them. */
          order: OriginalOrder;
          /** The items selected for return in native POS. Staff choose which items and how many to return in native POS; extensions can read the selection but can't change it. */
          lineItems: ReturnLineItem[];
        };
      }
  );

/**
 * The kind of cart that a `Cart` represents.
 *
 * - `'Checkout'`: A regular sale.
 * - `'Return'`: A return that native POS started. The items selected for return are in `cart.return.lineItems`.
 * - `'Exchange'`: A return that has at least one exchange line item. A return becomes an exchange when its first exchange line item is added, and becomes a return again when the last one is removed. The exchange line items are in `cart.lineItems`.
 * - `'Unsupported'`: A native flow that doesn't expose its contents to extensions, such as a refund-only return, removing unfulfilled items, or a return without a verified original order. The cart is read-only and has no `return` property.
 *
 * `CartType` never includes `undefined`. `Cart['cartType']` does, because older POS versions and some event snapshots don't provide it.
 * @publicDocs
 */
export type CartType = NonNullable<Cart['cartType']>;

/**
 * The original order reference available during a return or exchange. Contains the order `id` and `name`. Each can be `undefined` when POS doesn't know it, for example while POS is still loading the order, or `name` on a return that POS restored from older data stored on the device. Check each before using it.
 * @publicDocs
 */
export type OriginalOrder = Partial<Pick<OrderApiContent, 'id' | 'name'>>;

/**
 * An item selected for return in native POS. This is a read-only snapshot: staff choose which items and how many to return in native POS, and the reason, note, and restock values are read from native POS. Returned items are listed separately from `cart.lineItems`, and their `uuid` values don't identify exchange line items.
 * @publicDocs
 */
export interface ReturnLineItem {
  /**
   * Identifies the returned item. It's not the `uuid` of an exchange line item in `cart.lineItems`.
   */
  uuid: string;
  /**
   * The ID of the original order line item that this item returns.
   */
  orderLineItemId: number;
  /**
   * The quantity selected for return. This is the selected quantity, not the original ordered quantity (see `lineItem.quantity`) and not the quantity that remains refundable.
   */
  quantity: number;
  /**
   * The return reason that's selected in native POS. `undefined` when no reason is selected.
   */
  returnReason?: ReturnReason;
  /**
   * The note for the return reason that's entered in native POS. An empty string when there's no note.
   */
  returnReasonNote: string;
  /**
   * Whether native POS has the item set to be restocked when the return is processed.
   */
  shouldRestock: boolean;
  /**
   * Whether the item can be restocked.
   */
  canRestock: boolean;
  /**
   * A read-only snapshot of the original order line item, including its variant and product IDs, SKU, and properties when POS has them. Its `metafields` are an empty array in the returns and exchanges pilot until the supporting read data exists.
   *
   * `lineItem.quantity` is the quantity ordered on the original order line. It's `undefined` when POS doesn't know it, for example on a return that POS restored from older data stored on the device. It's never the selected quantity and never the quantity that remains refundable, so check for `undefined` before using it.
   *
   * `lineItem.price` is the original unit price after the line's line-level discounts, and `lineItem.discounts` lists those discounts for information only. They're already included in `price`, so don't subtract them again. A `'FixedAmount'` discount's `amount` is per unit: multiply it by a quantity, such as `quantity`, and round to the currency's precision to get a total. The exception is a discount code: it's listed in `lineItem.discounts`, but `price` doesn't include it. Order-level discounts aren't exposed. `lineItem.discounts` is also empty on a return that POS restored from data that an older POS version saved, so an empty array doesn't always mean that the line had no discounts.
   */
  lineItem: Omit<LineItem, 'quantity'> & {quantity?: number};
}

/**
 * A return reason that's selected in native POS, from Shopify's return reason library.
 * @publicDocs
 */
export interface ReturnReason {
  /**
   * The ID of the return reason definition.
   */
  id: number;
  /**
   * The handle of the return reason definition, such as `damaged-or-defective`: the reason's stable key in Shopify's return reason library. An empty string when POS couldn't resolve the reason, on a cart that an older POS version saved or when looking up the reason failed while POS restored a saved cart.
   */
  handle: string;
  /**
   * The display name of the return reason.
   */
  name: string;
}

/**
 * A typed metafield. The same shape is used wherever a cart exposes metafields: on the cart, on a cart line item, and on the original order line item of a returned item.
 * @publicDocs
 */
export interface Metafield {
  /**
   * The namespace of the metafield.
   */
  namespace: string;
  /**
   * The key of the metafield within its namespace.
   */
  key: string;
  /**
   * The metafield type, such as `single_line_text_field`.
   */
  type: string;
  /**
   * The value of the metafield, serialized as a string according to its type.
   */
  value: string;
}

/**
 * Specifies the parameters for updating cart information. Includes options for modifying customer data, notes, references, and other cart-level metadata.
 * @publicDocs
 */
export interface CartUpdateInput {
  /**
   * The cart note to set during bulk update. Replaces existing note or sets new note if none exists. Set to `undefined` to remove current note.
   */
  note?: string;
  /**
   * The cart-level discount to apply during bulk update. Replaces existing cart discount. Set to `undefined` to remove current discount.
   */
  cartDiscount?: Discount;
  /**
   * An array of cart-level discounts to apply during bulk update. Replaces all existing cart discounts with the provided array.
   */
  cartDiscounts: Discount[];
  /**
   * The customer to associate with the cart during bulk update. Replaces existing customer or converts guest cart to customer cart.
   */
  customer?: Customer;
  /**
   * An array of line items to set during bulk update. Completely replaces existing cart contents—removes all current items and adds the provided ones. Line items in this input can't carry `metafields`.
   */
  lineItems: Omit<LineItem, 'metafields'>[];
  /**
   * The custom key-value properties to apply to the line item. Merged with existing properties—duplicate keys overwrite existing values.
   */
  properties: Record<string, string>;
}

/**
 * Represents basic customer identification information. Contains the customer ID for linking to detailed customer data and enabling customer-specific features.
 * @publicDocs
 */
export interface Customer {
  /**
   * The unique numeric identifier for the customer in Shopify's system. This ID is consistent across all Shopify systems and APIs. Used to link this customer reference to the full customer record with complete profile information. Commonly used for customer lookups, applying customer-specific pricing or discounts, linking orders to customer accounts, or integrating with customer management systems.
   */
  id: number;
}

/**
 * Represents an individual item in the shopping cart. Contains product information, pricing, quantity, discounts, and customization details for a single cart entry.
 * @publicDocs
 */
export interface LineItem {
  /**
   * The unique identifier for this line item within the cart. Use for line item-specific operations like updates, removals, or property modifications.
   */
  uuid: string;
  /**
   * The unit price of the line item. Returns 'undefined' for custom sales without set prices. Use for pricing calculations and displays.
   */
  price?: number;
  /**
   * The quantity of this item in the cart. Always a positive integer. Use for quantity displays, calculations, and inventory management.
   */
  quantity: number;
  /**
   * The display title of the line item. Returns 'undefined' for items without titles. Use for customer-facing displays and cart item identification.
   */
  title?: string;
  /**
   * The product variant 'ID' this line item represents. Returns 'undefined' for custom sales or non-variant items. Use for variant-specific operations and product details.
   */
  variantId?: number;
  /**
   * The product 'ID' this line item represents. Returns 'undefined' for custom sales or non-product items. Use for product-specific operations and linking to product details.
   */
  productId?: number;
  /**
   * An array of discounts applied to this line item. Empty array if no discounts are active. Use for displaying line item savings and discount details.
   */
  discounts: Discount[];
  /**
   * An array of discount allocations applied to this line item, providing detailed breakdown of how discounts are distributed. Returns 'undefined' if no allocations exist. Use for enhanced discount tracking and reporting.
   */
  discountAllocations?: DiscountAllocation[];
  /**
   * Determines whether this line item is subject to tax calculations. Use for tax computation, compliance, and pricing displays.
   */
  taxable: boolean;
  /**
   * An array of tax lines applied to this line item, containing tax amounts and rates. Use for detailed tax reporting and compliance.
   */
  taxLines: TaxLine[];
  /**
   * The Stock Keeping Unit (SKU) identifier for this line item. Returns 'undefined' if no SKU is configured. Use for inventory tracking and product identification.
   */
  sku?: string;
  /**
   * The vendor or brand name for this line item. Returns 'undefined' if no vendor is set. Use for vendor-specific displays and organization.
   */
  vendor?: string;
  /**
   * The custom key-value properties attached to this line item. Empty object if no properties are set. Use for metadata, customization options, or integration data.
   */
  properties: {[key: string]: string};
  /**
   * Determines whether this line item is a gift card. Gift cards have special handling requirements and business logic. Use for implementing gift card-specific workflows.
   */
  isGiftCard: boolean;
  /**
   * The staff member 'ID' attributed to this line item. Returns 'undefined' if no staff attribution is set. Use for commission tracking and performance analytics.
   */
  attributedUserId?: number;
  /**
   * Determines whether this line item requires a selling plan (subscription) to be purchased. Returns 'undefined' if selling plan information is unavailable. Use for implementing subscription-based product handling.
   */
  requiresSellingPlan?: boolean;
  /**
   * Determines whether this line item has selling plan groups (subscription options) available. Returns 'undefined' if selling plan information is unavailable. Use for displaying subscription options.
   */
  hasSellingPlanGroups?: boolean;
  /**
   * The currently selected selling plan for this line item. Returns 'undefined' if no selling plan is applied. Contains selling plan details including 'ID', name, and delivery intervals. Use for subscription management and recurring purchase functionality.
   */
  sellingPlan?: SellingPlan;
  /**
   * Bundle components for this line item. Only present for [product bundles](/docs/apps/build/product-merchandising/bundles). Each component represents an individual item within the bundle with its own tax information.
   */
  components?: LineItemComponent[];
  /**
   * The metafields on this line item that are visible to the calling app in this snapshot. In the returns and exchanges pilot it's always an empty array until the supporting read data exists, so an empty array doesn't mean that the line item has no metafields. `undefined` when the data isn't available, such as outside the pilot and on the line items of transactions.
   */
  metafields?: Metafield[];
}

/**
 * Represents a component of a [product bundle](/docs/apps/build/product-merchandising/bundles) line item. Bundle components contain the individual items that make up a bundle, each with their own pricing and tax information.
 * @publicDocs
 */
export interface LineItemComponent {
  /**
   * The display name for the custom sale item. Appears on receipts and in cart displays. Should be descriptive and customer-friendly.
   */
  title?: string;
  /**
   * The quantity of the custom sale item. Must be a positive integer. Use for quantity-based pricing and inventory management.
   */
  quantity: number;
  /**
   * The price for the custom sale item as currency string. Must be a valid positive amount. Use for non-catalog items and custom pricing.
   */
  price?: number;
  /**
   * Determines whether the custom sale item is taxable. Set to `true` to apply tax calculations, `false` to exempt from taxes.
   */
  taxable: boolean;
  /**
   * An array of tax lines applied to this component.
   */
  taxLines: TaxLine[];
  /**
   * An array of discount allocations applied to this component, providing a detailed breakdown of how discounts are distributed across bundle components. Returns `undefined` if no allocations exist.
   */
  discountAllocations?: DiscountAllocation[];
  /**
   * The unique numeric identifier for the product variant this component represents, if applicable.
   */
  variantId?: number;
  /**
   * The unique numeric identifier for the product this component represents, if applicable.
   */
  productId?: number;
}

/**
 * Represents a selling plan (subscription) associated with a line item, containing delivery schedule and plan identification details.
 * @publicDocs
 */
export interface SellingPlan {
  /**
   * The unique identifier of the selling plan.
   */
  id: number;
  /**
   * The name of the POS device.
   */
  name: string;
  /**
   * The fingerprint of the applied selling plan within this cart session. Provided by POS. Not available during refund / exchanges.
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

/**
 * Represents a discount applied to a cart or transaction, including amount and description.
 * @publicDocs
 */
export interface Discount {
  /**
   * The discount value to apply. For `'Percentage'` type, this represents the percentage value (For example, "10" for 10% off). For `'FixedAmount'` type, this represents the fixed monetary amount to deduct from the line item price. Commonly used for discount calculations and displaying the discount value to merchants.
   */
  amount: number;
  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code associated with the location currently active on POS.
   */
  currency?: string;
  /**
   * A human-readable description of the discount shown to merchants and customers. This typically includes the discount name, promotion details, or discount code (for example, "SUMMER2024", "10% off entire order", "Buy 2 Get 1 Free"). Returns `undefined` when no description is provided.
   */
  discountDescription?: string;
  /**
   * The [discount type](https://help.shopify.com/en/manual/discounts/discount-types) applied to this line item. Can be either `'Percentage'` for percentage-based discounts or `'FixedAmount'` for fixed monetary amount discounts. This determines how the discount amount is calculated and displayed.
   */
  type?: string;
}

/**
 * Optional configuration for `addLineItem`. Lets a single call create a line item and decorate it with line-item properties, avoiding the extra native call and cart sync of a separate `addLineItemProperties` call.
 * @publicDocs
 */
export interface AddLineItemOptions {
  /**
   * Custom key-value properties to attach to the newly created line item. Equivalent to calling `addLineItemProperties` with the returned `UUID`, but applied in the same operation.
   */
  properties?: Record<string, string>;
}

/**
 * Specifies the parameters for adding custom properties to line items. Properties are key-value pairs used for storing metadata, tracking information, or integration data.
 * @publicDocs
 */
export interface SetLineItemPropertiesInput {
  /**
   * The target line item `UUID` for selling plan assignment. Must match an existing line item in the cart.
   */
  lineItemUuid: string;
  /**
   * The custom key-value properties to apply to the line item. Merged with existing properties—duplicate keys overwrite existing values.
   */
  properties: Record<string, string>;
}

/**
 * Specifies the parameters for applying discounts to individual line items. Includes the discount type, value, and reason for audit and reporting purposes.
 * @publicDocs
 */
export interface SetLineItemDiscountInput {
  /**
   * The target line item `UUID` for selling plan assignment. Must match an existing line item in the cart.
   */
  lineItemUuid: string;
  /**
   * The discount details to apply to the line item. Contains title, type (`'Percentage'` or `'FixedAmount'`), and amount value.
   */
  lineItemDiscount: LineItemDiscount;
}

/**
 * Represents a discount applied to an individual line item in the cart.
 * @publicDocs
 */
export interface LineItemDiscount {
  /**
   * The display name for the custom sale item. Appears on receipts and in cart displays. Should be descriptive and customer-friendly.
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

/**
 * Represents a custom sale item that is not associated with a product in the catalog. Includes pricing, taxation, and descriptive information for manually created line items.
 * @publicDocs
 */
export interface CustomSale {
  /**
   * The quantity of the custom sale item. Must be a positive integer. Use for quantity-based pricing and inventory management.
   */
  quantity: number;
  /**
   * The display name for the custom sale item. Appears on receipts and in cart displays. Should be descriptive and customer-friendly.
   */
  title: string;
  /**
   * The price for the custom sale item as currency string. Must be a valid positive amount. Use for non-catalog items and custom pricing.
   */
  price: string;
  /**
   * Determines whether the custom sale item is taxable. Set to `true` to apply tax calculations, `false` to exempt from taxes.
   */
  taxable: boolean;
}

/**
 * Represents physical address information for customer shipping and billing. Contains standard address fields including street, city, region, postal code, and country data.
 * @publicDocs
 */
export interface Address {
  /**
   * The primary street address line. Required for most shipping and billing operations. Should contain street number and name.
   */
  address1?: string;
  /**
   * The secondary address line for apartment, suite, or unit information. Optional field for additional address details.
   */
  address2?: string;
  /**
   * The city name for the address. Required for shipping calculations and location-based services.
   */
  city?: string;
  /**
   * The company name associated with the address. Optional field for business customers and B2B transactions.
   */
  company?: string;
  /**
   * The first name for the address contact. Used for personalized shipping labels and customer communication.
   */
  firstName?: string;
  /**
   * The last name for the address contact. Required for complete customer identification and shipping labels.
   */
  lastName?: string;
  /**
   * The phone number for the address contact. Used for delivery notifications, shipping updates, and customer communication.
   */
  phone?: string;
  /**
   * The province or state name for the address. Required for regional shipping rates and tax calculations.
   */
  province?: string;
  /**
   * The country name for the address. Required for international shipping, tax calculations, and compliance.
   */
  country?: string;
  /**
   * The postal or ZIP code for the address. Required for accurate shipping rates and location-based services.
   */
  zip?: string;
  /**
   * The full name for the address contact. Use when first and last names are combined or unavailable as separate fields.
   */
  name?: string;
  /**
   * The standardized province or state code. Use for precise regional identification and automated shipping calculations.
   */
  provinceCode?: string;
  /**
   * The standardized country code (ISO format). Use for precise country identification and international shipping operations.
   */
  countryCode?: CountryCode;
}

/**
 * Specifies the parameters for assigning selling plans to line items. Used to add subscription or purchase option configurations to products.
 * @publicDocs
 */
export interface SetLineItemSellingPlanInput {
  /**
   * The target line item `UUID` for selling plan assignment. Must match an existing line item in the cart.
   */
  lineItemUuid: string;
  /**
   * The selling plan `ID` to apply to the line item. Must be a valid selling plan available for the product.
   */
  sellingPlanId: number;
  /**
   * The selling plan name for display purposes. Required for proper selling plan display in the cart.
   */
  sellingPlanName?: string;
}
