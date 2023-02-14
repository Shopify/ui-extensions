import type {StandardApi} from '../standard';
import type {ValueOrPromise} from '../shared';

/** Input given to the ShouldRender extension point (Checkout::PostPurchase::ShouldRender). */
export interface SegmentationApi
  extends StandardApi<'Admin::SegmentationTemplateApps::Render'> {
  /** Input data given to the extension point. */
  inputData: InputData;
  /** General purpose storage for extensions. */
  storage: Storage;
}

/** Output expected from the ShouldRender extension point (Checkout::PostPurchase::ShouldRender) */
export type SegmentationApiResult = ValueOrPromise<{
  /** Whether or not to render the post-purchase page */
  render: boolean;
}>;

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
  // initialPurchase: Purchase;
  // /** Checkout customer locale. */
  // locale: string;
  // /** Shop where the checkout/order is from. */
  // shop: Shop;
  // /** JWT representing the input_data payload. For more information, refer to [JWT specification](/api/checkout-extensions/jwt-specification). */
  // token: string;
  // /** Post Purchase API version. */
  // version: string;
}
