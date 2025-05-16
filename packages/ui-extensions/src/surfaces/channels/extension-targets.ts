import type {RenderExtension, RunnableExtension} from '../../extension';

import type {FieldExtensionApi} from './api';
import {FieldPrefetchApi, FieldPrefetchOutput} from './api/prefetch/prefetch';
import {FieldPrefetchStandardApi} from './api/prefetch/standard';

import type {FieldExtensionComponents} from './components/FieldExtensionComponents';

export interface RenderExtensionTargets {
  // Blocks
  /**
   * Renders an admin block in the product details page.
   *
   * See the [list of available components](/docs/api/admin-extensions/components).
   */
  'admin.product-details.dynamic.render': RenderExtension<
    FieldExtensionApi<'admin.product-details.dynamic.render'>,
    FieldExtensionComponents
  >;
}

export interface RunnableExtensionTargets {
  /**
   * An extension target that provides address autocomplete suggestions. These suggestions are shown to buyers as they
   * interact with address forms during checkout.
   *
   * It must return a list of address suggestions. If a formatted address is provided with each suggestion, it will be
   * used to auto-populate the fields in the address form when the buyer selects a suggestion.
   *
   * This target does not support rendering UI components.
   */
  'admin.product-details.dynamic.prefetch': RunnableExtension<
    FieldPrefetchStandardApi<'admin.product-details.dynamic.prefetch'> &
      FieldPrefetchApi,
    FieldPrefetchOutput
  >;
}

/**
 * A union of all extension targets.
 * This is a special interface that is referenced by name "ExtensionTargets", in the `buildTargetDts.ts` script in ui-extensions.
 * It is used to to generate the `shopify.d.ts` file, to provide type safety when coding UI extensions.
 */
export interface ExtensionTargets
  extends RenderExtensionTargets,
    RunnableExtensionTargets {}

export type ExtensionTarget = keyof ExtensionTargets;

export type AvailableExtensionDefinitions<Api> =
  | RenderExtension<Api, any>
  | RunnableExtension<Api, any>;

/**
 * For a given extension target, returns the value that is expected to be
 * returned by that extension target’s callback type.
 */
export type ReturnTypeForExtension<Target extends keyof ExtensionTargets> =
  ExtensionTargets[Target]['output'];

/**
 * For a given extension target, returns the type of the API that the
 * extension will receive at runtime.
 */
export type ApiForExtension<Target extends ExtensionTarget> =
  ExtractedApiFromExtensionDefinition<ExtensionTargets[Target]>;

type ExtractedApiFromExtensionDefinition<T> =
  T extends AvailableExtensionDefinitions<infer Api> ? Api : never;

/**
 * A union type containing all of the extension targets that follow the pattern of
 * accepting a [`@remote-ui/core` `RemoteRoot`](https://github.com/Shopify/remote-dom/tree/remote-ui/packages/core)
 * and an additional `api` argument, and using those arguments to render
 * UI.
 */
export type RenderExtensionTarget = keyof RenderExtensionTargets;
