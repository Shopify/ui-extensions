import type {StandardApi} from '../standard';
import type {ValueOrPromise} from '../shared';

/** input given to the ShouldRender extension point (Checkout::PostPurchase::ShouldRender) */
export interface PostPurchaseShouldRenderApi
  extends StandardApi<'Checkout::PostPurchase::ShouldRender'> {
  /** current cart being checked out */
  checkout: Checkout;

  /**
   * provides update method to store data in the browser
   *
   * also contains initialData which holds the value of the previously updated storage value
   * this allows sync access to stored data when rendering initially
   * */
  storage: Storage;
}

/**
 * output expected from the ShouldRender extension point (Checkout::PostPurchase::ShouldRender)
 * if the result sets requestPostPurchasePage to be true, the post purchase page might be shown after payment
 *
 */
export type PostPurchaseShouldRenderResult = ValueOrPromise<{
  render: boolean;
}>;

/** input given to the render extension point (Checkout::PostPurchase::Render) */
export interface PostPurchaseRenderApi
  extends StandardApi<'Checkout::PostPurchase::Render'> {
  /** initial purchase */
  order: Order;

  storage: Storage;

  /**
   * edits the initial purchase, charging the vaulted payment method for the difference in price
   * only perform edits that can also be performed by buyers in the storefront
   */
  applyUnsignedChangeset(changeset: Changeset): Promise<AppliedChangesetResult>;

  /**
   * same as applyUnsignedChangeset(), but requires the changeset to be signed
   * this allows it to accept more sensitive edits, such as applying an arbitrary discount
   */
  applySignedChangeset(
    signature: string,
    changeset: Changeset,
  ): Promise<AppliedChangesetResult>;

  /**
   * applies the changeset to the initial purchase, but *without* saving it
   * useful to get cost clarity info, such as final price, discounts, taxes, shipping, etc
   */
  calculateChangeset(changeset: Changeset): Promise<CalculatedChangesetResult>;

  /**
   * signals that the extension is finished running
   * essentially redirects buyers to the thank you page
   */
  done(): Promise<void>;
}

/**
 * kept small for development
 * many more attributes will be added before making it available to partners
 */
interface Order {
  lineItems: LineItem[];
}

type Checkout = Order;

interface LineItem {
  variant: LineItemVariant;
}

interface LineItemVariant {
  id: number;

  /**
   * only public listed metafields are available
   * https://shopify.dev/tutorials/retrieve-metafields-with-storefront-api#expose-metafields-to-the-storefront-api
   */
  metafields: {[key: string]: string};
}

/**
 * list of requested changes to the initial purchase
 * only accepts adding a variant for now, but other edit types will be added
 */
type Changeset = AddVariantChange[];

interface AddVariantChange {
  type: 'add_variant';
  variantId: number;
  quantity: number;
  discount?: DiscountChange;
}

/** a fixed amount discount will also be available */
type DiscountChange = PercentageDiscountChange;

interface PercentageDiscountChange {
  valueType: 'percentage';
  value: number;
}

/**
 * will also get improved and have more properties
 * only kept small for development
 */
interface AppliedChangesetResult {
  errors?: string[];
}

/**
 * cost clarity after edits: final price , discounts, taxes, shipping, etc
 * final API still needs some work; right now, it returns a CalculatedOrder object
 * https://shopify.dev/docs/admin-api/graphql/reference/object/calculatedorder?api[version]=2020-04
 */
interface CalculatedChangesetResult {}

interface Storage {
  update(value: any): Promise<void>;
  initialData: unknown;
}
