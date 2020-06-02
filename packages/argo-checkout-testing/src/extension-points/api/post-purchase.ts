import type {StandardApi} from './standard';
import type {ValueOrPromise} from './shared';

export interface PostPurchaseInquiryApi extends StandardApi {}

interface PostPurchaseInquirySignedResult {
  signature: string;
  payload: {
    allowedOrderChangesets: Changeset[];
    pagePayload: any;
  };
}

export type PostPurchaseInquiryResult = ValueOrPromise<
  boolean | PostPurchaseInquirySignedResult
>;

export interface PostPurchaseRenderApi extends StandardApi {
  order: Order;
  storedPayload: unknown;

  applyUnsignedChangeset(changeset: Changeset): Promise<AppliedChangesetResult>;
  applySignedChangeset(
    signature: string,
    changeset: Changeset,
  ): Promise<AppliedChangesetResult>;
  applyStoredChangeset(changeset: number): Promise<AppliedChangesetResult>;

  calculateChangeset(changeset: Changeset): Promise<CalculatedChangesetResult>;

  performNetworkCall(url: string, data?: unknown): Promise<unknown>;

  done(): Promise<void>;
}

interface PercentageDiscountChangeset {
  valueType: 'percentage';
  value: number;
}

type DiscountChangeset = PercentageDiscountChangeset;

interface AddVariantChangeset {
  type: 'add_variant';
  variantId: number;
  quantity: number;
  discount?: DiscountChangeset;
}

type Changeset = AddVariantChangeset;

interface AppliedChangesetResult {
  // Unsure
  errors?: string[];
}

interface CalculatedChangesetResult {}

interface Order {
  lineItems: LineItem[];
}

interface LineItem {
  variant: LineItemVariant;
}

interface LineItemVariant {
  id: number;
  metafields: {[key: string]: string};
}
