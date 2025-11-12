import type {ReadonlySignalLike} from '../../../../shared';

export type ConnectivityStateSeverity = 'Connected' | 'Disconnected';

/**
 * Represents the current Internet connectivity status of the device. Indicates whether the device has an active Internet connection or is offline.
 */
export interface ConnectivityState {
  /**
   * Whether the device is connected to the Internet. Returns `'Connected'` when the device has an active Internet connection and can communicate with remote servers, or `'Disconnected'` when the device is offline and can't reach the Internet.
   *
   * This state reflects the actual network connectivity, not just WiFi/cellular availability—a device can be connected to WiFi but still show `'Disconnected'` if that network has no Internet access.
   *
   * Commonly used for implementing offline-aware functionality (queuing operations, showing cached data), displaying connectivity indicators in the UI, disabling network-dependent features when offline, or providing user feedback about connection status.
   */
  internetConnected: ConnectivityStateSeverity;
}

export interface ConnectivityApiContent {
  /**
   * Provides read-only access to the current connectivity state with subscription support for real-time connectivity changes. The `value` property contains the current connectivity status (`'Connected'` or `'Disconnected'`), and the `subscribe` method allows listening for connectivity transitions.
   *
   * This enables reactive connectivity handling where your extension can respond immediately when the device goes online or offline. Subscriptions fire when connectivity state changes (for example, WiFi connects, network drops), not continuously.
   *
   * Commonly used for implementing offline-aware functionality (queuing operations when offline, syncing when online), displaying connectivity indicators in the UI, showing offline mode warnings, or enabling/disabling network-dependent features based on connectivity status.
   */
  current: ReadonlySignalLike<ConnectivityState>;
}

/**
 * The `ConnectivityApi` object provides access to current connectivity information and change notifications. Access these properties through `shopify.connectivity` to monitor network status.
 */
export interface ConnectivityApi {
  connectivity: ConnectivityApiContent;
}
