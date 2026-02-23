import type {RemoteSubscribable} from '@remote-ui/async-subscription';

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

/** @publicDocs */
export interface ConnectivityApiContent {
  /**
   * Creates a subscription to changes in connectivity. Provides an initial value and a callback to subscribe to value changes. Use for implementing offline-aware functionality and reactive connectivity handling.
   */
  subscribable: RemoteSubscribable<ConnectivityState>;
}

/**
 * The `ConnectivityApi` object provides access to current connectivity information and change notifications. Access these properties through `api.connectivity` to monitor network status.
 */
export interface ConnectivityApi {
  connectivity: ConnectivityApiContent;
}
