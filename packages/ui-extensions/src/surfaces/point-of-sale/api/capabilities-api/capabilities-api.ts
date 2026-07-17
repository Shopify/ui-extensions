import type {ReadonlySignalLike} from '../../../../shared';
import type {ShopifyInterceptMap} from '../../events';

/**
 * A granted validation severity for a POS intercept event. Event names are
 * derived from `ShopifyInterceptMap`.
 *
 * Grants are cumulative. An `.error` grant includes `.warning` and `.info`,
 * and a `.warning` grant includes `.info`.
 *
 * @publicDocs
 */
export type InterceptCapability = `${Extract<
  keyof ShopifyInterceptMap,
  string
>}.${'error' | 'warning' | 'info'}`;

/**
 * A capability granted to a POS extension.
 *
 * @publicDocs
 */
export type Capability = InterceptCapability;

/**
 * Provides the capabilities granted to a POS extension.
 *
 * @publicDocs
 */
export interface CapabilitiesApi {
  /**
   * The allowed capabilities of the extension, defined in your
   * [`shopify.extension.toml`](/docs/api/pos-ui-extensions/{API_VERSION}/configuration) file.
   */
  capabilities: ReadonlySignalLike<Capability[]>;
}
