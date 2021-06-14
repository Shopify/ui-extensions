import type {StandardApi} from '../standard';
import type {ValueOrPromise} from '../shared';

/** Input given to the ShouldRender extension point (Checkout::PostPurchase::ShouldRender) */
export interface PostPurchaseShouldRenderApi
  extends StandardApi<'Checkout::PostPurchase::ShouldRender'> {
  /** Input data given to the extension point */
  inputData: InputData;
  /** General purpose storage for extensions */
  storage: Storage;
}

/** Output expected from the ShouldRender extension point (Checkout::PostPurchase::ShouldRender) */
export type PostPurchaseShouldRenderResult = ValueOrPromise<{
  /** Whether or not to render the post-purchase page */
  render: boolean;
}>;

/** Input given to the render extension point (Checkout::PostPurchase::Render) */
export interface PostPurchaseRenderApi
  extends StandardApi<'Checkout::PostPurchase::Render'> {
  /** Input data given to the extension point */
  inputData: InputData;
  /** General purpose storage for extensions */
  storage: Storage;
  /** Returns the calculations that would result from the provided changeset being applied. Used to provide cost-clarity for buyers. */
  calculateChangeset(
    changeset: Readonly<Changeset> | string,
  ): Promise<CalculateChangesetResult>;
  /**  Requests a changeset to be applied to the initial purchase, and to charge the buyer with the difference in total price, if any. */
  applyChangeset(changeset: string): Promise<ApplyChangesetResult>;
  /**
   * Indicates that the extension has finished running.
   * Currently, effectively redirects buyers to the thank you page.
   */
  done(): Promise<void>;
}

/** General-purpose, key-value browser storage for extensions */
interface Storage {
  /** Data in the storage during the first load (read-only) */
  initialData: unknown;
  /** Updates the storage to the value that it's given */
  update(data: any): Promise<void>;
}

interface InputData {
  /** Identifier for the extension point */
  extensionPoint: string;
  /** Initial purchase */
  initialPurchase: Purchase;
  /** Checkout customer locale */
  locale: string;
  /** Shop where the checkout/order is from */
  shop: Shop;
  /** JWT representing the input_data payload */
  token: string;
  /** Post Purchase API version */
  version: string;
}

interface Purchase {
  /** Initial purchase's unique identifier */
  referenceId: string;
  customerId?: string;
  destinationCountryCode?: string;
  totalPriceSet: MoneyBag;
  /** Items being purchased */
  lineItems: LineItem[];
}

interface Shop {
  id: number;
  domain: string;
  /**
   * Only public listed metafields are available
   * https://shopify.dev/tutorials/retrieve-metafields-with-storefront-api#expose-metafields-to-the-storefront-api
   */
  metafields: Metafield[];
}

interface LineItem {
  /** Product being purchased */
  product: Product;
  quantity: number;
  totalPriceSet: MoneyBag;
}

interface Product {
  id: number;
  title: string;
  /** Variant being purchased */
  variant: Variant;

  /**
   * only public listed metafields are available
   * https://shopify.dev/tutorials/retrieve-metafields-with-storefront-api#expose-metafields-to-the-storefront-api
   */
  metafields: Metafield[];
}

interface Variant {
  id: number;
  title: string;
  /**
   * Only public listed metafields are available
   * https://shopify.dev/tutorials/retrieve-metafields-with-storefront-api#expose-metafields-to-the-storefront-api
   */
  metafields: Metafield[];
}

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
  value: number;
  valueType: ExplicitDiscountType;
  title: string;
}

interface AddVariantChange {
  type: 'add_variant';
  variantId: number;
  quantity: number;
  discount?: ExplicitDiscount;
}

interface AddShippingLineChange {
  type: 'add_shipping_line';
  price: number;
  title?: string;
  presentmentTitle?: string;
}

/** Requests to set a metafield on the initial purchase.
If a metafield with the same namespace and key pair already exists, then its contents are replaced. */
interface SetMetafieldChange extends Metafield {
  /** A fixed value of "set_metafield". */
  type: 'set_metafield';
}

type Changes = (
  | AddVariantChange
  | AddShippingLineChange
  | SetMetafieldChange
)[];
/** A list of requested changes to be made to the initial purchase. */
interface Changeset {
  /** A change request. */
  changes: Changes;
}

interface Money {
  amount: string;
  /** In ISO 4217 format */
  currencyCode: string;
}

/** Represents an amount in both shop and presentment currencies. */
interface MoneyBag {
  shopMoney: Money;
  presentmentMoney: Money;
}

interface AddedTaxLine {
  /** The tax amount */
  priceSet: MoneyBag;
  rate: number;
  title: string;
}

interface UpdatedLineItem {
  /** The discounted total price. */
  totalPriceSet: MoneyBag;
  /** The price per quantity */
  priceSet: MoneyBag;
  productId: number;
  variantId: number;
  productHandle: string;
  /** How many items are being purchased in this line.*/
  quantity: number;
}

interface AddedShippingLine {
  priceSet: MoneyBag;
  presentmentTitle: string;
}

interface CalculatedPurchase {
  /** Updated total price of the purchase with discounts but before shipping, taxes, and tips. */
  subtotalPriceSet: MoneyBag;
  /** Updated final price of the purchase */
  totalPriceSet: MoneyBag;
  addedTaxLines: AddedTaxLine[];
  updatedLineItems: UpdatedLineItem[];
  addedShippingLines: AddedShippingLine[];
  /** The amount left unpaid after the update */
  totalOutstandingSet: MoneyBag;
}

/** Represents an error occurred while calculating or applying a changeset.
 *
 * **Possible values for `code`:**
 *
 * - `payment_required` - The original payment method couldn't be charged.
 * - `insufficient_inventory` - An item requested to be added is out of stock.
 * - `changeset_already_applied` - Indicates if the changeset has been applied. Changesets can only be applied once.
 * - `unsupported_payment_method` - Indicates that the payment method was unsupported. The payment method used to pay for the initial purchase can't be used to pay for changesets.
 * - `invalid_request` - The request is invalid. It shouldn't be re-sent without modifications.
 * - `server_error` - An unexpected error has happened.
 */
interface ChangesetError {
  /** An error code corresponding to an error that occurred while calculating or applying a changeset.
  Useful for grouping errors that can be handled similarily.
  */
  code: string;
  /** The error description.
  */
  message: string;
}
type CalculateChangesetResult =
  | {
      errors: ChangesetError[];
      status: 'unprocessed';
      calculatedPurchase?: never;
    }
  | {
      errors: ChangesetError[];
      status: 'processed';
      calculatedPurchase: CalculatedPurchase;
    };
/** Requests a changeset to be applied to the initial purchase,
and to charge the buyer with the difference in total price if any. */
interface ApplyChangesetResult {
  /** Represents an error occurred while calculating or applying a changeset. */
  errors: ChangesetError[];
  /** An enum representing the result of attempting to apply or calculate a changeset. */
  status: ChangesetProcessingStatus;
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
