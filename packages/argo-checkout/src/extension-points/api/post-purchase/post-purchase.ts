import type {StandardApi} from '../standard';
import type {ValueOrPromise} from '../shared';

/** Input given to the ShouldRender extension point (Checkout::PostPurchase::ShouldRender) */
export interface PostPurchaseShouldRenderApi
  extends StandardApi<'Checkout::PostPurchase::ShouldRender'> {
  /** Initial purchase */
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
  calculateChangeset(
    changeset: Readonly<Changeset>,
  ): Promise<CalculateChangesetResult>;
  /**  Requests a changeset to be applied to the initial purchase, and to charge the buyer with the difference in total price, if any. */
  applyChangeset(
    signature: string,
    changeset: Readonly<Changeset>,
  ): Promise<ApplyChangesetResult>;
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
  customerId?: string;
  destinationCountryCode?: string;
  totalPriceSet: MoneyBag;
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
  phone?: string;
}

type Changes = (AddVariantChange | AddShippingLineChange)[];

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
  rate: number;
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

interface ChangesetError {
  code: string;
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

interface ApplyChangesetResult {
  errors: ChangesetError[];
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
