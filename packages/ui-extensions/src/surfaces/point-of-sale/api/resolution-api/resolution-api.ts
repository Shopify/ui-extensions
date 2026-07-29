/**
 * Describes the validation that the resolution screen is resolving.
 * @publicDocs
 */
export interface ResolutionApiContent {
  /**
   * The intercept event being resolved.
   */
  event: 'beforeCheckout';
  /**
   * The app-authored handle of the validation this screen is resolving.
   * Raw, NOT namespaced.
   */
  handle: string;
  /**
   * Severity of the validation being resolved.
   */
  level: 'error' | 'warning' | 'info';
  /**
   * The message POS would have shown natively.
   */
  message: string;
  /**
   * Optional pointer to what the validation applies to, e.g. a line item.
   */
  targetPath?: string;
  /**
   * App-supplied metafields carried through from the intercept result.
   */
  metafields?: Record<string, string>;
}

/**
 * Provides access to the resolution context for a `pos.resolution.action.render`
 * extension target. The `resolution` property describes the validation that
 * this screen is resolving.
 * @publicDocs
 */
export interface ResolutionApi {
  resolution: ResolutionApiContent;
}
