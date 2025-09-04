import type {ReadonlySignalLike} from '../../../../shared';

export type ConnectivityStateSeverity = 'Connected' | 'Disconnected';

export interface ConnectivityState {
  /**
   * Whether the device is connected to the internet
   */
  internetConnected: ConnectivityStateSeverity;
}

export interface ConnectivityApiContent {
  /**
   * Provides read-only access to the current connectivity state and allows subscribing to connectivity changes.
   * The `value` property provides the current connectivity state, and `subscribe` allows listening to changes.
   */
  current: ReadonlySignalLike<ConnectivityState>;
}

/**
 * Access information about the device connectivity
 */
export interface ConnectivityApi {
  connectivity: ConnectivityApiContent;
}
