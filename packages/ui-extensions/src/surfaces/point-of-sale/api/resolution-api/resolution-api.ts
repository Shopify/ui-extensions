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
 * Runs when staff advance the resolution flow. Return a promise to have POS
 * wait for pending work to finish before it re-runs validation.
 *
 * @publicDocs
 */
export type ResolutionSaveHandler = () => void | Promise<void>;

/**
 * @publicDocs
 */
export interface ResolutionApiContent<TEventData> {
  /**
   * The data of the intercepted event this resolution target was opened for.
   * The `value` property provides the current data, and `subscribe` receives
   * Shopify POS revalidation updates.
   */
  event: ReadonlySignalLike<TEventData>;

  /**
   * Registers a handler that runs when staff tap Done in the resolution
   * flow. POS awaits the handler before it re-runs the
   * intercepted validation, so use it to commit any pending work, for example
   * cart updates or storage writes, and `await` those calls inside the handler.
   * A rejected promise does not stop the flow; POS still re-runs validation and
   * the interceptor result decides what happens next.
   *
   * Only the most recent handler is kept.
   *
   * @returns A promise that resolves to an async cleanup function that
   * unregisters the handler.
   */
  onSave(handler: ResolutionSaveHandler): Promise<() => Promise<void>>;
}
