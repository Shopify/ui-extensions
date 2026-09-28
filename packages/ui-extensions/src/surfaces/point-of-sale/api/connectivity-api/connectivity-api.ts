import type {ReadonlySignalLike} from '../../../../shared';

/**
 * @publicDocs
 */
export type ConnectivityStateSeverity = 'Connected' | 'Disconnected';

/**
 * Represents the current Internet connectivity status of the device. Indicates whether the device is connected or disconnected from the Internet.
 * @publicDocs
 */
export interface ConnectivityState {
  /**
   * The Internet connection status of the POS device. The state defaults to `'Connected'` until POS has confirmed connectivity, and a confirmed outage is required before `'Disconnected'` is reported.
   */
  internetConnected: ConnectivityStateSeverity;
}

/**
 * Provides access to the current connectivity state for the POS device.
 * @publicDocs
 */
export interface ConnectivityApiContent {
  /**
   * Provides read-only access to the current connectivity state and allows subscribing to connectivity changes. Use for implementing connectivity-aware functionality and reactive connectivity handling. The state defaults to `Connected` until POS has confirmed connectivity, so an initial `Connected` value doesn't guarantee that the device is online.
   */
  current: ReadonlySignalLike<ConnectivityState>;
}

/**
 * The `ConnectivityApi` object provides access to current connectivity information and change notifications. Access these properties through `shopify.connectivity` to monitor network status.
 * @publicDocs
 */
export interface ConnectivityApi {
  connectivity: ConnectivityApiContent;
}
