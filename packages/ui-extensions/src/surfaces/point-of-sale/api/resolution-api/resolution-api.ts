import type {ReadonlySignalLike} from '../../../../shared';

/**
 * The `ResolutionApi` object gives a validation resolution target access to
 * the data of the intercepted event it was opened to resolve. Access it
 * through `shopify.resolution`.
 *
 * @private
 */
export interface ResolutionApi<TEventData> {
  resolution: ResolutionApiContent<TEventData>;
}

/**
 * @private
 */
export interface ResolutionApiContent<TEventData> {
  /**
   * The data of the intercepted event this resolution target was opened for.
   * The `value` property provides the current data, and `subscribe` allows
   * listening for host-owned revalidation updates.
   */
  event: ReadonlySignalLike<TEventData>;
}
