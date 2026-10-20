import type {ReadonlySignalLike} from '../../../../shared';

/**
 * A merchant-granted capability for the current POS extension registration.
 *
 * `block_progress` means the merchant enabled **Allow app to block checkout**
 * for this extension in POS Editor, according to the settings synchronized to
 * this POS device. It does not describe the extension's TOML configuration,
 * registered interceptors, offline support, or current ability to block a
 * particular checkout action.
 *
 * @publicDocs
 */
export type PosCapability = 'block_progress';

/**
 * Provides read-only access to the merchant-granted capabilities of the current
 * extension registration through `shopify.capabilities` on all POS targets.
 *
 * @publicDocs
 */
export interface CapabilitiesApi {
  /**
   * The merchant permissions most recently synchronized to this POS device for
   * the current extension registration. Subscribe to changes with `subscribe()`
   * and read the current state with `value`.
   *
   * - `undefined`: the device has not loaded an authoritative setting, the
   *   setting is unavailable, or the current extension cannot be identified.
   *   Wait for a known value before showing instructions to enable blocking.
   * - `[]`: the synchronized permission is disabled or has never been enabled.
   *   Deactivating the extension clears this permission. Reactivating it does
   *   not restore the previous grant.
   * - `['block_progress']`: the merchant enabled **Allow app to block checkout**
   *   for this extension.
   *
   * All targets in the same extension registration, including its Smart Grid
   * tile and home modal, receive the same grant. Other extension registrations
   * in the same app have independent grants. Reading this signal requires no
   * intercept declaration or `runs_offline` capability.
   *
   * Changes appear after settings synchronize to this device. While offline,
   * the value can reflect an earlier synchronized configuration. This signal
   * cannot change permissions or guarantee that an interceptor can block a
   * checkout action. Checkout eligibility and enforcement remain separate.
   */
  readonly capabilities: ReadonlySignalLike<
    ReadonlyArray<PosCapability> | undefined
  >;
}
