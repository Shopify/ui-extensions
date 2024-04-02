import {AnyComponent} from '../checkout';

import {CartLineItemApi} from './api/cart-line/cart-line-item';
import type {OrderStatusApi} from './api/order-status/order-status';
import type {RenderExtension} from './extension';

/**
 * A UI extension will register for one or more extension targets using `shopify.extend()`.
 * An extension target in a UI extension is a plain JavaScript function.
 * This function receives some API for interacting with the application,
 * and is expected to return a value in a specific shape.
 * The input arguments and the output type are different
 * for each extension target.
 */
export interface ExtensionTargets {
  /**
   * A [dynamic extension target](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#dynamic-extension-targets) that renders exclusively on the **Order status** page.
   * Unlike static extension targets, dynamic extension targets render where the merchant
   * sets them using the [checkout editor](https://shopify.dev/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor).
   *
   * The [supported locations](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#supported-locations) for dynamic extension targets can be previewed during development
   * by [using a URL parameter](https://shopify.dev/docs/apps/checkout/best-practices/testing-ui-extensions#dynamic-extension-targets).
   */
  'customer-account.order-status.block.render': RenderExtension<
    OrderStatusApi<'customer-account.order-status.block.render'>,
    AnyComponent
  >;
  /**
   * A static extension target that renders on every line item, inside the details
   * under the line item properties element on the **Order status** page.
   */
  'customer-account.order-status.cart-line-item.render-after': RenderExtension<
    CartLineItemApi &
      OrderStatusApi<'customer-account.order-status.cart-line-item.render-after'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered after all line items on the **Order status** page.
   */
  'customer-account.order-status.cart-line-list.render-after': RenderExtension<
    OrderStatusApi<'customer-account.order-status.cart-line-list.render-after'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered after a purchase below the customer information on the **Order status** page.
   */
  'customer-account.order-status.customer-information.render-after': RenderExtension<
    OrderStatusApi<'customer-account.order-status.cart-line-list.render-after'>,
    AnyComponent
  >;
}

export type ExtensionTarget = keyof ExtensionTargets;

/**
 * For a given extension target, returns the value that is expected to be
 * returned by that extension target’s callback type.
 */
export type ReturnTypeForExtension<Target extends keyof ExtensionTargets> =
  ReturnType<ExtensionTargets[Target]>;

/**
 * For a given extension target, returns the tuple of arguments that would
 * be provided to that extension target’s callback type.
 */
export type ArgumentsForExtension<Target extends keyof ExtensionTargets> =
  Parameters<ExtensionTargets[Target]>;

/**
 * A union type containing all of the extension targets that follow the pattern of
 * accepting a [`@remote-ui/core` `RemoteRoot`](https://github.com/Shopify/remote-dom/tree/remote-ui/packages/core)
 * and an additional `api` argument, and using those arguments to render
 * UI.
 */
export type RenderExtensionTarget = {
  [Target in keyof ExtensionTargets]: ExtensionTargets[Target] extends RenderExtension<
    any,
    any
  >
    ? Target
    : never;
}[keyof ExtensionTargets];

/**
 * A mapping of each “render extension” name to its callback type.
 */
export type RenderExtensions = {
  [Target in RenderExtensionTarget]: ExtensionTargets[Target];
};

type ExtractedApiFromRenderExtension<T> = T extends RenderExtension<
  infer Api,
  any
>
  ? Api
  : never;

type ExtractedAllowedComponentsFromRenderExtension<T> =
  T extends RenderExtension<any, infer Components> ? Components : never;

/**
 * For a given rendering extension target, returns the type of the API that the
 * extension will receive at runtime. This API type is the second argument to
 * the callback for that extension target. The first callback for all of the rendering
 * extension targets each receive a `RemoteRoot` object.
 */
export type ApiForRenderExtension<Target extends keyof RenderExtensions> =
  ExtractedApiFromRenderExtension<RenderExtensions[Target]>;

/**
 * For a given rendering extension target, returns the UI components that the
 * extension target supports.
 */
export type AllowedComponentsForRenderExtension<
  Target extends keyof RenderExtensions,
> = ExtractedAllowedComponentsFromRenderExtension<RenderExtensions[Target]>;
