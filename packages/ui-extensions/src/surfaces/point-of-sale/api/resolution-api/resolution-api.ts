import type {ReadonlySignalLike} from '../../../../shared';
import type {ShopifyInterceptMap} from '../../events';

/**
 * Provides access to the intercepted workflow that initiated a resolution flow.
 *
 * @private
 */
export interface ResolutionApiContent {
  /** The intercepted workflow event being resolved. */
  event: ReadonlySignalLike<ShopifyInterceptMap[keyof ShopifyInterceptMap]>;
}

/**
 * Provides access to the current resolution context.
 *
 * @private
 */
export interface ResolutionApi {
  resolution: ResolutionApiContent;
}
