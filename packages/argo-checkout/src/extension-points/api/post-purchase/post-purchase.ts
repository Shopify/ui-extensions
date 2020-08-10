import type {StandardApi} from '../standard';
import type {ValueOrPromise} from '../shared';

/** Input given to the ShouldRender extension point (Checkout::PostPurchase::ShouldRender) */
export interface PostPurchaseShouldRenderApi
  extends StandardApi<'Checkout::PostPurchase::ShouldRender'> {
  /** Current cart being checked out */
  initialPurchase: Purchase;

  /** General purpose storage for extensions */
  storage: Storage;

  /** Shop where the checkout/order is from */
  shop: Shop;
}

/** Output expected from the ShouldRender extension point (Checkout::PostPurchase::ShouldRender) */
export type PostPurchaseShouldRenderResult = ValueOrPromise<{
  /** Whether or not to render the post-purchase page */
  render: boolean;
}>;

/** Input given to the render extension point (Checkout::PostPurchase::Render) */
export interface PostPurchaseRenderApi
  extends StandardApi<'Checkout::PostPurchase::Render'> {
  /** Initial purchase */
  initialPurchase: Purchase;
  /** General purpose storage for extensions */
  storage: Storage;
  /** Shop where the checkout/order is from */
  shop: Shop;
  /** Returns the calculations that would result from the provided changeset being applied. Used to provide cost-clarity for buyers. */
  calculateChangeset(changeset: Changeset): Promise<ChangesetResult>;
  /**  Requests a changeset to be applied to the initial purchase, and to charge the buyer with the difference in total price, if any. */
  applyChangeset(
    signature: string,
    changeset: Changeset,
  ): Promise<ChangesetResult>;
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

interface Purchase {
  /** Initial purchase's unique identifier */
  referenceId: string;
  /** Items being purchased */
  lineItems: LineItem[];
}

interface Shop {
  id: number;
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
  key: string;
  namespace: string;
  value: string | number;
  valueType: 'integer' | 'string' | 'json_string';
}

interface ExplicitDiscount {
  value: number;
  valueType: ExplicitDiscountType;
  title: string;
}

interface AddVariantChange {
  type: ChangeType.AddVariant;
  variantId: number;
  quantity: number;
  discount?: ExplicitDiscount;
}

type Changes = AddVariantChange[];

interface Changeset {
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

interface LineItem {
  /** The discounted price per quantity. */
  discountedPriceSet: MoneyBag;
  /** The price per quantity */
  priceSet: MoneyBag;
}

interface AddedTaxLine {
  /** The tax amount */
  priceSet: MoneyBag;
  rate: string;
  title: string;
}

interface UpdatedLineItem {
  /** The discounted price per quantity. */
  discountedPriceSet: MoneyBag;
  /** The price per quantity */
  priceSet: MoneyBag;
  productId: number;
  variantId: number;
  productHandle: string;
  /** How many items are being purchased in this line.*/
  quantity: number;
}

interface UpdatedPurchase {
  /** Updated total price of the purchase with discounts but before shipping, taxes, and tips. */
  subtotalPriceSet: MoneyBag;
  /** Updated final price of the purchase */
  totalPriceSet: MoneyBag;
  addedTaxLines: AddedTaxLine[];
  updatedLineItems: UpdatedLineItem[];
  /** The amount left unpaid after the update */
  totalOutstandingSet: MoneyBag;
}

interface ChangesetError {
  code: string;
  message: string;
}

type ChangesetResult =
  | {
      errors: ChangesetError[];
      status: ChangesetProcessingStatus.Unprocessed;
      updatedPurchase: UpdatedPurchase | null;
    }
  | {
      errors: ChangesetError[];
      status:
        | ChangesetProcessingStatus.Processed
        | ChangesetProcessingStatus.PartiallyProcessed;
      updatedPurchase: UpdatedPurchase;
    };

export enum ChangesetProcessingStatus {
  /** Changeset was successfully processed */
  Processed = 'processed',
  /**
   * Changeset was processed, but not fully.
   * Usually means the initial purchase was edited successfully, but payment failed - card didn't have enough funds, for example.
   */
  PartiallyProcessed = 'partially_processed',
  /** Changeset was not processed because an error occurred - for example, when adding a variant that's out-of-stock. */
  Unprocessed = 'unprocessed',
}

export enum ExplicitDiscountType {
  Percentage = 'percentage',
  FixedAmount = 'fixed_amount',
}

export enum ChangeType {
  AddVariant = 'add_variant',
}
