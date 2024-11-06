import type {RunnableExtension} from '../../extension';

import {ShouldRenderApi} from './api/should-render/should-render';

interface ShouldRenderOutput {
  display: boolean;
}

export interface ExtensionTargets {
  // Admin action shouldRender targets
  /**
   * Controls the render state of an admin action extension in the product details page. Open this extension from the "More Actions" menu.
   */
  'admin.product-details.action.render': RunnableExtension<
    ShouldRenderApi<'admin.product-details.action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin action extension in the catalog details page. Open this extension from the "More Actions" menu.
   */
  'admin.catalog-details.action.render': RunnableExtension<
    ShouldRenderApi<'admin.catalog-details.action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin action extension in the company details page. Open this extension from the "More Actions" menu.
   */
  'admin.company-details.action.render': RunnableExtension<
    ShouldRenderApi<'admin.company-details.action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin action extension in the gift card details page. Open this extension from the "More Actions" menu.
   */
  'admin.gift-card-details.action.render': RunnableExtension<
    ShouldRenderApi<'admin.gift-card-details.action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin action extension in the order details page. Open this extension from the "More Actions" menu.
   */
  'admin.order-details.action.render': RunnableExtension<
    ShouldRenderApi<'admin.order-details.action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin action extension in the customer details page. Open this extension from the "More Actions" menu.
   */
  'admin.customer-details.action.render': RunnableExtension<
    ShouldRenderApi<'admin.customer-details.action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin action extension in the customer segment details page. Open this extension from the "Use segment" button.
   */
  'admin.customer-segment-details.action.render': RunnableExtension<
    ShouldRenderApi<'admin.customer-segment-details.action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin action extension in the product index page. Open this extension from the "More Actions" menu.
   */
  'admin.product-index.action.render': RunnableExtension<
    ShouldRenderApi<'admin.product-index.action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin action extension in the order index page. Open this extension from the "More Actions" menu.
   */
  'admin.order-index.action.render': RunnableExtension<
    ShouldRenderApi<'admin.order-index.action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin action extension in the customer index page. Open this extension from the "More Actions" menu.
   */
  'admin.customer-index.action.render': RunnableExtension<
    ShouldRenderApi<'admin.customer-index.action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin action extension in the discount index page. Open this extension from the "More Actions" menu.
   */
  'admin.discount-index.action.render': RunnableExtension<
    ShouldRenderApi<'admin.discount-index.action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin action extension in the collection details page. Open this extension from the "More Actions" menu.
   */
  'admin.collection-details.action.render': RunnableExtension<
    ShouldRenderApi<'admin.collection-details.action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin action extension in the collection index page. Open this extension from the "More Actions" menu.
   */
  'admin.collection-index.action.render': RunnableExtension<
    ShouldRenderApi<'admin.collection-index.action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin action extension in the abandoned checkout page. Open this extension from the "More Actions" menu.
   */
  'admin.abandoned-checkout-details.action.render': RunnableExtension<
    ShouldRenderApi<'admin.abandoned-checkout-details.action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin action extension in the product variant details page. Open this extension from the "More Actions" menu.
   */
  'admin.product-variant-details.action.render': RunnableExtension<
    ShouldRenderApi<'admin.product-variant-details.action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin action extension in the draft order details page. Open this extension from the "More Actions" menu.
   */
  'admin.draft-order-details.action.render': RunnableExtension<
    ShouldRenderApi<'admin.draft-order-details.action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin action extension in the draft orders page. Open this extension from the "More Actions" menu.
   */
  'admin.draft-order-index.action.render': RunnableExtension<
    ShouldRenderApi<'admin.draft-order-index.action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin action extension in the discount details page. Open this extension from the "More Actions" menu.
   */
  'admin.discount-details.action.render': RunnableExtension<
    ShouldRenderApi<'admin.discount-details.action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin action extension in the order fulfilled card. Open this extension from the "3-dot" menu inside the order fulfilled card.
   * Note: This extension will only be visible on orders which were fulfilled by your app.
   */
  'admin.order-fulfilled-card.action.render': RunnableExtension<
    ShouldRenderApi<'admin.order-fulfilled-card.action.render'>,
    ShouldRenderOutput
  >;

  // Admin bulk action shouldRender targets

  /**
   * Controls the render state of an admin action extension in the product index page when multiple resources are selected. Open this extension from the "More Actions"  menu of the resource list. The resource ids are available to this extension at runtime.
   */
  'admin.product-index.selection-action.render': RunnableExtension<
    ShouldRenderApi<'admin.product-index.selection-action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin action extension in the order index page when multiple resources are selected. Open this extension from the "More Actions"  menu of the resource list. The resource ids are available to this extension at runtime.
   */
  'admin.order-index.selection-action.render': RunnableExtension<
    ShouldRenderApi<'admin.order-index.selection-action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin action extension in the customer index page when multiple resources are selected. Open this extension from the "More Actions" menu of the resource list. The resource ids are available to this extension at runtime.
   */
  'admin.customer-index.selection-action.render': RunnableExtension<
    ShouldRenderApi<'admin.customer-index.selection-action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin action extension in the draft order page when multiple resources are selected. Open this extension from the "3-dot" menu.
   */
  'admin.draft-order-index.selection-action.render': RunnableExtension<
    ShouldRenderApi<'admin.draft-order-index.selection-action.render'>,
    ShouldRenderOutput
  >;

  // Admin print action and bulk print action shouldRender targets

  /**
   * Controls the render state of an admin print action extension in the order index page when multiple resources are selected. Open this extension from the "Print" menu of the resource list. The resource ids are available to this extension at runtime.
   */
  'admin.order-details.print-action.render': RunnableExtension<
    ShouldRenderApi<'admin.order-details.print-action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin print action extension in the product index page when multiple resources are selected. Open this extension from the "Print" menu of the resource list. The resource ids are available to this extension at runtime.
   */
  'admin.product-details.print-action.render': RunnableExtension<
    ShouldRenderApi<'admin.product-details.print-action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin print action extension in the order index page when multiple resources are selected. Open this extension from the "Print" menu of the resource list. The resource ids are available to this extension at runtime.
   */
  'admin.order-index.selection-print-action.render': RunnableExtension<
    ShouldRenderApi<'admin.order-index.selection-print-action.render'>,
    ShouldRenderOutput
  >;

  /**
   * Controls the render state of an admin print action extension in the product index page when multiple resources are selected. Open this extension from the "Print" menu of the resource list. The resource ids are available to this extension at runtime.
   */
  'admin.product-index.selection-print-action.render': RunnableExtension<
    ShouldRenderApi<'admin.product-index.selection-print-action.render'>,
    ShouldRenderOutput
  >;
}

export type ExtensionTarget = keyof ExtensionTargets;

export type ExtensionForExtensionTarget<T extends ExtensionTarget> =
  ExtensionTargets[T];

/**
 * For a given extension target, returns the value that is expected to be
 * returned by that extension target’s callback type.
 */
export type ReturnTypeForExtension<ID extends keyof ExtensionTargets> =
  ReturnType<ExtensionTargets[ID]>;

/**
 * For a given extension target, returns the tuple of arguments that would
 * be provided to that extension target’s callback type.
 */
export type ArgumentsForExtension<ID extends keyof ExtensionTargets> =
  Parameters<ExtensionTargets[ID]>;

/**
 * A union type containing all of the extension targets that follow the pattern of
 * accepting a [`@remote-ui/core` `RemoteRoot`](https://github.com/Shopify/remote-dom/tree/remote-ui/packages/core)
 * and an additional `api` argument, and using those arguments to render
 * UI.
 */
export type RenderExtensionTarget = {
  [ID in keyof ExtensionTargets]: ExtensionTargets[ID] extends RunnableExtension<
    any,
    any
  >
    ? ID
    : never;
}[keyof ExtensionTargets];

/**
 * A mapping of each “render extension” name to its callback type.
 */
export type RenderExtensions = {
  [ID in RenderExtensionTarget]: ExtensionTargets[ID];
};

type ExtractedApiFromRenderExtension<T> = T extends RunnableExtension<
  infer Api,
  any
>
  ? Api
  : never;

type ExtractedAllowedComponentsFromRenderExtension<T> =
  T extends RunnableExtension<any, infer Components> ? Components : never;

/**
 * For a given rendering extension target, returns the type of the API that the
 * extension will receive at runtime. This API type is the second argument to
 * the callback for that extension target. The first callback for all of the rendering
 * extension targets each receive a `RemoteRoot` object.
 */
export type ApiForRenderExtension<ID extends keyof RenderExtensions> =
  ExtractedApiFromRenderExtension<RenderExtensions[ID]>;

/**
 * For a given rendering extension target, returns the UI components that the
 * extension target supports.
 */
export type AllowedComponentsForRenderExtension<
  ID extends keyof RenderExtensions,
> = ExtractedAllowedComponentsFromRenderExtension<RenderExtensions[ID]>;
