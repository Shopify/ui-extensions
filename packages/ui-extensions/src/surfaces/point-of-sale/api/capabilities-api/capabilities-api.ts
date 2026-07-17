import type {ReadonlySignalLike} from '../../../../shared';
import type {ShopifyInterceptMap} from '../../events';

/**
 * A granted validation severity for a POS intercept event. Event names are
 * derived from `ShopifyInterceptMap`; `warning` corresponds to the `WARNING`
 * validation level.
 *
 * @publicDocs
 */
export type InterceptCapability = `${Extract<
  keyof ShopifyInterceptMap,
  string
>}.${'error' | 'warning' | 'info'}`;

/**
 * Provides the validation severities granted for POS intercept events.
 *
 * @publicDocs
 */
export interface CapabilitiesApi {
  /**
   * A read-only list of granted intercept capabilities. The signal is available
   * to every POS target, but only the target that registers an interceptor
   * declares its event in `shopify.extension.toml`.
   *
   * Grants are cumulative. An `.error` grant includes `.warning` and `.info`,
   * and a `.warning` grant includes `.info`.
   *
   * @example
   * ```ts
   * if (shopify.capabilities.value.includes('beforecheckout.error')) {
   *   // This interceptor can return ERROR, WARNING, or INFO validations.
   * }
   * ```
   */
  capabilities: ReadonlySignalLike<InterceptCapability[]>;
}
