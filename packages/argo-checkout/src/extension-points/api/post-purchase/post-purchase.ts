import type {StandardApi} from '../standard';
import type {ValueOrPromise, Metafield, MoneyBag} from '../shared';

/** Input given to the ShouldRender extension point (Checkout::PostPurchase::ShouldRender) */
export interface PostPurchaseShouldRenderApi
  extends StandardApi<'Checkout::PostPurchase::ShouldRender'> {}

/** Output expected from the ShouldRender extension point (Checkout::PostPurchase::ShouldRender) */
export type PostPurchaseShouldRenderResult = ValueOrPromise<{
  /** Whether or not to render the post-purchase page */
  render: boolean;
}>;

/** Input given to the render extension point (Checkout::PostPurchase::Render) */
export interface PostPurchaseRenderApi
  extends StandardApi<'Checkout::PostPurchase::Render'> {
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

interface AddedShippingLine {
  priceSet: MoneyBag;
  presentmentTitle: string;
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

interface Changeset {
  changes: Changes;
}

type Changes = (
  | AddVariantChange
  | AddShippingLineChange
  | SetMetafieldChange
)[];

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

interface ExplicitDiscount {
  value: number;
  valueType: ExplicitDiscountType;
  title: string;
}

interface SetMetafieldChange extends Metafield {
  type: 'set_metafield';
}

type ChangesetProcessingStatus =
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
