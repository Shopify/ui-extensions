import type {StandardApi} from '../standard';
import type {ValueOrPromise} from '../shared';

/** Input given to the ShouldRender extension point (Checkout::PostPurchase::ShouldRender). */
export interface PostPurchaseShouldRenderApi
  extends StandardApi<'Checkout::PostPurchase::ShouldRender'> {
  /** Input data given to the extension point. */
  inputData: InputData;
  /** General purpose storage for extensions. */
  storage: Storage;
}

/** Output expected from the ShouldRender extension point (Checkout::PostPurchase::ShouldRender) */
export type PostPurchaseShouldRenderResult = ValueOrPromise<{
  /** Whether or not to render the post-purchase page */
  render: boolean;
}>;

export interface ApplyChangesetOptions {
  buyerConsentToSubscriptions?: boolean;
}

/** Input given to the render extension point (Checkout::PostPurchase::Render). */
export interface PostPurchaseRenderApi
  extends StandardApi<'Checkout::PostPurchase::Render'> {
  /** Input data given to the extension point. */
  inputData: InputData;
  /** General purpose storage for extensions. */
  storage: Storage;
  /** Returns the calculations that would result from the provided changeset being applied. Used to provide cost-clarity for buyers. */
  calculateChangeset(
    changeset: Readonly<Changeset> | string,
  ): Promise<CalculateChangesetResult>;
  /**  Requests a changeset to be applied to the initial purchase, and to charge the buyer with the difference in total price, if any. */
  applyChangeset(
    changeset: string,
    options?: ApplyChangesetOptions,
  ): Promise<ApplyChangesetResult>;
  /**
   * Indicates that the extension has finished running.
   * Currently, effectively redirects buyers to the thank you page.
   */
  done(): Promise<void>;
}

/** General-purpose, key-value browser storage for extensions. */
interface Storage {
  /** Data in the storage during the first load (read-only). */
  initialData: unknown;
  /** Updates the storage to the value that it's given. */
  update(data: any): Promise<void>;
}
/** The data given as input to both extension points. */
interface InputData {
  /** Identifier for the extension point. */
  extensionPoint: string;
  /** Initial purchase. */
  initialPurchase: Purchase;
  /** Checkout customer locale. */
  locale: string;
  /** Shop where the checkout/order is from. */
  shop: Shop;
  /** JWT representing the input_data payload. For more information, refer to [JWT specification](/api/checkout-extensions/jwt-specification). */
  token: string;
  /** Post Purchase API version. */
  version: string;
}
/** Represents the initial purchase's state when the extension is loaded. */
interface Purchase {
  /** Initial purchase's unique identifier. */
  referenceId: string;
  /** The unique identifier of the buyer. */
  customerId?: string;
  /** The unique identifier of the country for shipping. */
  destinationCountryCode?: string;
  /** The total price of the purchase, including shipping, taxes and discounts. */
  totalPriceSet: MoneyBag;
  /** Items being purchased. */
  lineItems: LineItem[];
}
/** The shop where the extension is running. */
interface Shop {
  /** The shop's unique identifier. */
  id: number;
  /** The primary domain of the shop (ending with “.myshopify.com”). */
  domain: string;
  /**
   * Only [public listed](/api/examples/metafields#step-1-expose-metafields) metafields are available.
   */
  metafields: Metafield[];
}
/** The items purchased. */
interface LineItem {
  /** Product being purchased. */
  product: Product;
  /** The amount of items for the line. */
  quantity: number;
  /** The total price of the line item, with line discounts. */
  totalPriceSet: MoneyBag;
  /** The selling plan's unique identifier */
  sellingPlanId?: number;
}
/** The product for purchase. */
interface Product {
  /** The product's unique identifier. */
  id: number;
  /** The product title. */
  title: string;
  /** Variant being purchased. */
  variant: Variant;
  /**
   * Only [public listed](/api/examples/metafields#step-1-expose-metafields) metafields are available.
   */
  metafields: Metafield[];
}
/** The product variant for purchase. */
interface Variant {
  /** The variant's unique identifier. */
  id: number;
  /** The variant title. */
  title: string;
  /**
   * Only [public listed](/api/examples/metafields#step-1-expose-metafields) metafields are available.
   */
  metafields: Metafield[];
}
/**
 * The metafields associated with a resource.
 * You'll need to individually request which metafields you need in the [configuration file](/api/checkout-extensions/extension-points#configuration-file).
 */
interface Metafield {
  /** The metafield key. */
  key: string;
  /** The metafield namespace. */
  namespace: string;
  /** The metafield value. */
  value: string | number;
  /** The metafield value type. */
  valueType: 'integer' | 'string' | 'json_string';
}
/** Requests to attach an explicit discount to a compatible change. */
interface ExplicitDiscount {
  /** The discount value. */
  value: number;
  /** The discount type. */
  valueType: ExplicitDiscountType;
  /** The reason for adding the discount. */
  title: string;
}
/** Requests a variant to be added to the initial purchase. */
interface AddVariantChange {
  /** A fixed value of "add_variant". */
  type: 'add_variant';
  /** The product variant to add. */
  variantId: number;
  /** The quantity of the specified variant. */
  quantity: number;
  /** Refer to [ExplicitDiscount](/api/checkout-extensions/extension-points/api#explicitdiscount). */
  discount?: ExplicitDiscount;
}
/** Requests a shipping line to be added to the initial purchase. */
interface AddShippingLineChange {
  /** A fixed value of "add_shipping_line". */
  type: 'add_shipping_line';
  /** The shipping line price without taxes. */
  price: number;
  /** The merchant-facing line title. */
  title?: string;
  /** The buyer-facing line title. */
  presentmentTitle?: string;
}

/** Requests to set a metafield on the initial purchase.
If a metafield with the same namespace and key pair already exists, then its contents are replaced. */
interface SetMetafieldChange extends Metafield {
  /** A fixed value of "set_metafield". */
  type: 'set_metafield';
}

/** Requests a subscription to be added to the initial purchase. */
interface AddSubscriptionChange {
  /** A fixed value of "add_subscription". */
  type: 'add_subscription';
  /** The product variant to add. */
  variantId: number;
  /** The selling plan to apply. */
  sellingPlanId: number;
  /** The shipping line price without taxes for the first shipping cycle. */
  initialShippingPrice: number;
  /** The shipping line price without taxes for the recurring shipping cycles. */
  recurringShippingPrice: number;
  /** The quantity of the specified variant. */
  quantity: number;
  /** Additional information concerning shipping. */
  shippingOption: ShippingOption;
  /** Refer to [ExplicitDiscount](/api/checkout-extensions/extension-points/api#explicitdiscount). */
  discount?: ExplicitDiscount;
}

interface ShippingOption {
  title?: string;
  presentmentTitle?: string;
}

type Changes = (
  | AddVariantChange
  | AddShippingLineChange
  | SetMetafieldChange
  | AddSubscriptionChange
)[];
/** A list of requested changes to be made to the initial purchase. */
interface Changeset {
  /** A change request. */
  changes: Changes;
}
/** A list of requested changes to be made to the initial purchase. */
interface Money {
  /** The actual amount. */
  amount: string;
  /** In ISO 4217 format. */
  currencyCode: string;
}

/** Represents an amount in both shop and presentment currencies. */
interface MoneyBag {
  /** Amount in shop currency. */
  shopMoney: Money;
  /** Amount in presentment currency. */
  presentmentMoney: Money;
}
/** Represents the information about the tax charged on the associated line item. */
interface AddedTaxLine {
  /** The tax amount. */
  priceSet: MoneyBag;
  /** The tax rate to be applied. */
  rate: number;
  /** The name of the tax. */
  title: string;
}
/** Represents the updated state of a line item after a changeset has been calculated including any added line items. */
interface UpdatedLineItem {
  /** The discounted total price. */
  totalPriceSet: MoneyBag;
  /** The price per quantity */
  priceSet: MoneyBag;
  /** The product ID. */
  productId: number;
  /** The variant ID. */
  variantId: number;
  /** The selling plan ID. */
  sellingPlanId?: number;
  /** The product slug in kebab-case. */
  productHandle: string;
  /** How many items are being purchased in this line.*/
  quantity: number;
}
/** Represents a shipping line that was added after a changeset was calculated.*/
interface AddedShippingLine {
  /** The shipping line price.*/
  priceSet: MoneyBag;
  /** The customer facing line title.*/
  presentmentTitle: string;
}
/** Represents the updated state of the initial purchase.*/
interface CalculatedPurchase {
  /** Updated total price of the purchase with discounts but before shipping, taxes, and tips. */
  subtotalPriceSet: MoneyBag;
  /** Updated final price of the purchase. */
  totalPriceSet: MoneyBag;
  /** Array of `AddedTaxLine`. */
  addedTaxLines: AddedTaxLine[];
  /** Array of `UpdatedLineItem`. */
  updatedLineItems: UpdatedLineItem[];
  /** Array of `AddedShippingLine`. */
  addedShippingLines: AddedShippingLine[];
  /** The amount left unpaid after the update. */
  totalOutstandingSet: MoneyBag;
}

/** Error code while calculating or applying a changeset.
 *
 * **Possible values :**
 *
 * - `payment_required` - The original payment method couldn't be charged.
 * - `insufficient_inventory` - An item requested to be added is out of stock.
 * - `changeset_already_applied` - Indicates if the changeset has been applied. Changesets can only be applied once.
 * - `unsupported_payment_method` - Indicates that the payment method was unsupported. The payment method used to pay for the initial purchase can't be used to pay for changesets.
 * - `invalid_request` - The request is invalid. It shouldn't be re-sent without modifications.
 * - `server_error` - An unexpected error has happened.
 * - `buyer_consent_required` - Indicates that the buyer's consent was required in order to apply the changeset, but none was provided.
 * - `subscription_vaulting_error` - Indicates that an error occurred during the payment method vaulting phase of the application of an `add_subscription` change. The subscription could not be created.
 * - `subscription_contract_creation_error` - Indicates that an error occurred during the contract creation phase of the application of an `add_subscription` change. The subscription could not be created.
 * - `subscription_no_shipping_address_error` - Indicates that the order is missing the required customer shipping address for an `add_subscription` change.
 * - `subscription_limit_error` - Indicates that no more subscriptions can be added to this order via the post-purchase API.
 * - `order_released_error` - Indicates that the checkout was already completed and the order has been released to fulfillment.
 */
type ChangesetErrorCode =
  | 'payment_required'
  | 'insufficient_inventory'
  | 'changeset_already_applied'
  | 'unsupported_payment_method'
  | 'invalid_request'
  | 'server_error'
  | 'buyer_consent_required'
  | 'subscription_vaulting_error'
  | 'subscription_contract_creation_error'
  | 'subscription_no_shipping_address_error'
  | 'subscription_limit_error'
  | 'order_released_error';

/** Represents an error occurred while calculating or applying a changeset.
 */
interface ChangesetError {
  /** An error code corresponding to an error that occurred while calculating or applying a changeset.
  Useful for grouping errors that can be handled similarily.
  */
  code: ChangesetErrorCode;
  /**
   * The error description.
   */
  message: string;
}
type CalculateChangesetResult =
  | CalculateChangesetUnprocessedResult
  | CalculateChangesetProcessedResult;
/** Returns an array of `ChangesetError`, when the changeset can't be processed. */
interface CalculateChangesetUnprocessedResult {
  /** Array of errors. */
  errors: ChangesetError[];
  /** Always returns `unprocessed`. */
  status: 'unprocessed';
  /** Not returned for unprocessed result. */
  calculatedPurchase?: never;
}
/** Returns a `CalculatedPurchase` for processed changeset. */
interface CalculateChangesetProcessedResult {
  /** Empty array of errors. */
  errors: ChangesetError[];
  /** Always returns `processed`. */
  status: 'processed';
  /** Returns `CalculatedPurchase`. */
  calculatedPurchase: CalculatedPurchase;
}
/** Requests a changeset to be applied to the initial purchase,
and to charge the buyer with the difference in total price if any. */
interface ApplyChangesetResult {
  /** Represents an error occurred while calculating or applying a changeset. */
  errors: ChangesetError[];
  /** An enum representing the result of attempting to apply or calculate a changeset. */
  status: ChangesetProcessingStatus;
  /** How many changesets can still be applied to the initial purchase. */
  changesetApplicationsRemaining: number;
}

export type ChangesetProcessingStatus =
  /** Changeset was successfully processed */
  | 'processed'
  /**
   * Changeset was processed, but not fully.
   * Usually means the initial purchase was edited successfully, but payment failed - card didn't have enough funds, for example.
   */
  | 'partially_processed'
  /** Changeset was not processed because an error occurred - for example, when adding a variant that's out-of-stock. */
  | 'unprocessed';

export type ExplicitDiscountType = 'percentage' | 'fixed_amount';

export type ChangeType = 'add_variant' | 'add_shipping_line';
