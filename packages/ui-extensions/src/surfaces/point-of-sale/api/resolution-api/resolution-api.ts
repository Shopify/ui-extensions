import type {ReadonlySignalLike} from '../../../../shared';

/**
 * The `ResolutionApi` object gives a validation resolution target access to
 * the intercepted event it was opened to resolve. Access it through
 * `shopify.resolution`.
 *
 * @private
 */
export interface ResolutionApi<TEvent> {
  resolution: ResolutionApiContent<TEvent>;
}

/**
 * @private
 */
export interface ResolutionApiContent<TEvent> {
  /**
   * The intercepted event instance this resolution target was opened for.
   * The `value` property provides the current event, and `subscribe` allows
   * listening for host-owned revalidation updates.
   */
  event: ReadonlySignalLike<TEvent>;
}
