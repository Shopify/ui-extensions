import type {ExtensionPoint as RegisteredExtensionPoint} from '../../extension-points';
import type {Purchase, Shop} from '../shared';

export type Version = 'unstable';

export interface InputData<ExtensionPoint extends RegisteredExtensionPoint> {
  /** Identifier for the extension point */
  extensionPoint: ExtensionPoint;
  /** Initial purchase */
  initialPurchase: Purchase;
  /** Checkout customer locale */
  locale: string;
  /** Shop where the checkout/order is from */
  shop: Shop;
  /** JWT representing the input_data payload */
  token: string;
  /** Post Purchase API version */
  version: Version;
}

/** General-purpose, key-value browser storage for extensions */
export interface Storage {
  /** Data in the storage during the first load (read-only) */
  initialData: unknown;
  /** Updates the storage to the value that it's given */
  update(data: any): Promise<void>;
}

export interface StandardApi<ExtensionPoint extends RegisteredExtensionPoint> {
  /** Input data given to the extension point */
  inputData: InputData<ExtensionPoint>;
  /** General purpose storage for extensions */
  storage: Storage;
}
