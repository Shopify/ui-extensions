import type {LineItem} from '../../../types/cart';

/**
 * The `CartLineItemApi` object provides access to the current cart line item in line item-specific extension contexts. Access this property through `api.cartLineItem` to retrieve detailed information about the specific cart line item currently being viewed or interacted with.
 */
export interface CartLineItemApi {
  /**
   * The complete line item object representing the selected item in the merchant's current cart. Contains all line item data including product identification (`productId`, `variantId`), display information (`title`, `vendor`, `sku`), pricing details (`price`), quantity, tax information (`taxable`, `taxLines`), applied discounts (`discounts`, `discountAllocations`), custom properties (`properties`), selling plan configuration (`sellingPlan`), and unique identifier (`uuid`).
   *
   * This represents the line item's current state at the moment the extension is triggered, reflecting all modifications, discounts, and properties. The line item object is read-only in this context—modifications should be made through the Cart API methods using the line item's `uuid`.
   *
   * Commonly used for displaying detailed item information, implementing item-specific business logic (restrictions, validations, special handling), showing custom line item properties, calculating item-level totals with discounts, or building line item configuration interfaces.
   */
  cartLineItem: LineItem;
}
