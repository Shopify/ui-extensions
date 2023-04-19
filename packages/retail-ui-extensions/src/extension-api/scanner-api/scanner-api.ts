import type {RemoteSubscribable} from '@remote-ui/async-subscription';

/** The scanner source the POS device supports */
export type SupportedSource = 'camera' | 'external' | 'embedded';

export interface ScannerSubscriptionResult {
  /** The string data from the last scanner event received */
  data?: string;
  /** An array containing all supported scanner types on the POS device. */
  supportedSources: SupportedSource[];
}

export interface ScannerApiContent {
  /** Creates a subscription to scanned content changes and supported scanner sources.
   * Provides an initial value and a callback to subsribe to value changes. Currently supports only one subscription.
   * You can utilize `makeStatefulSubscribable` on a `RemoteSubscribable` to implement multiple subscriptions.
   * Using `makeStatefulSubscribable` or the corresponding hooks counts as a subscription.
   */
  subscribable: RemoteSubscribable<ScannerSubscriptionResult>;
}

export interface ScannerApi {
  api: ScannerApiContent;
}
