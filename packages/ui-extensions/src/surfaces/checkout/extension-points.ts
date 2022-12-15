import type {RenderExtension} from '../../extension';

import type {AnyComponent} from './shared';
import type {StandardApi, CartLineDetailsRenderAfterApi} from './api';

export interface ExtensionPoints {
  /**
   * A [dynamic extension point](https://shopify.dev/api/checkout-extensions/checkout#extension-points) that isn't tied to a specific checkout section or feature.
   * Unlike static extension points, dynamic extension points render where the merchant
   * sets them using the [checkout editor](https://shopify.dev/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor).
   *`
   * The [supported locations](https://shopify.dev/api/checkout-extensions/checkout#supported-locations) for dynamic extension points can be previewed during development
   * by [using a URL parameter](https://shopify.dev/apps/checkout/test-ui-extensions#dynamic-extension-points).
   */
  'Checkout::Dynamic::Render': RenderExtension<
    StandardApi<'Checkout::Dynamic::Render'>,
    AnyComponent
  >;

  /**
   * A static extension point that renders on every line item, inside the details
   * under the line item properties element.
   */
  'Checkout::CartLineDetails::RenderAfter': RenderExtension<
    CartLineDetailsRenderAfterApi,
    AnyComponent
  >;

  /**
   * A static extension point that is rendered after all line items.
   */
  'Checkout::CartLines::RenderAfter': RenderExtension<
    StandardApi<'Checkout::CartLines::RenderAfter'>,
    AnyComponent
  >;

  /**
   * A static extension point that is rendered between the shipping address header
   * and shipping address form elements.
   */
  'Checkout::DeliveryAddress::RenderBefore': RenderExtension<
    StandardApi<'Checkout::DeliveryAddress::RenderBefore'>,
    AnyComponent
  >;

  /**
   * A static extension point that is rendered between the shipping method
   * header and shipping method options.
   */
  'Checkout::ShippingMethods::RenderBefore': RenderExtension<
    StandardApi<'Checkout::ShippingMethods::RenderBefore'>,
    AnyComponent
  >;

  /**
   * A static extension point that is rendered after the shipping method
   * options.
   */
  'Checkout::ShippingMethods::RenderAfter': RenderExtension<
    StandardApi<'Checkout::ShippingMethods::RenderAfter'>,
    AnyComponent
  >;

  /**
   * A static extension point that is rendered in the order summary, before the discount form element.
   */
  'Checkout::Reductions::RenderBefore': RenderExtension<
    StandardApi<'Checkout::Reductions::RenderBefore'>,
    AnyComponent
  >;

  /**
   * A static extension point that is rendered in the order summary, after the discount form
   * and discount tag elements.
   */
  'Checkout::Reductions::RenderAfter': RenderExtension<
    StandardApi<'Checkout::Reductions::RenderAfter'>,
    AnyComponent
  >;

  /**
   * A static extension point that is rendered immediately before any actions within each step.
   */
  'Checkout::Actions::RenderBefore': RenderExtension<
    StandardApi<'Checkout::Actions::RenderBefore'>,
    AnyComponent
  >;

  /**
   * A static extension point that is rendered immediately after the contact form element.
   */
  'Checkout::Contact::RenderAfter': RenderExtension<
    StandardApi<'Checkout::Contact::RenderAfter'>,
    AnyComponent
  >;
}

export type ExtensionPoint = keyof ExtensionPoints;

export type ExtensionForExtensionPoint<T extends ExtensionPoint> =
  ExtensionPoints[T];

/**
 * For a given extension point, returns the value that is expected to be
 * returned by that extension point’s callback type.
 */
export type ReturnTypeForExtension<ID extends keyof ExtensionPoints> =
  ReturnType<ExtensionPoints[ID]>;

/**
 * For a given extension point, returns the tuple of arguments that would
 * be provided to that extension point’s callback type.
 */
export type ArgumentsForExtension<ID extends keyof ExtensionPoints> =
  Parameters<ExtensionPoints[ID]>;

/**
 * A union type containing all of the extension points that follow the pattern of
 * accepting a [`@remote-ui/core` `RemoteRoot`](https://github.com/Shopify/remote-ui/tree/main/packages/core)
 * and an additional `api` argument, and using those arguments to render
 * UI.
 */
export type RenderExtensionPoint = {
  [ID in keyof ExtensionPoints]: ExtensionPoints[ID] extends RenderExtension<
    any,
    any
  >
    ? ID
    : never;
}[keyof ExtensionPoints];

/**
 * A mapping of each “render extension” name to its callback type.
 */
export type RenderExtensions = {
  [ID in RenderExtensionPoint]: ExtensionPoints[ID];
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
 * For a given rendering extension point, returns the type of the API that the
 * extension will receive at runtime. This API type is the second argument to
 * the callback for that extension point. The first callback for all of the rendering
 * extension points each receive a `RemoteRoot` object.
 */
export type ApiForRenderExtension<ID extends keyof RenderExtensions> =
  ExtractedApiFromRenderExtension<RenderExtensions[ID]>;

/**
 * For a given rendering extension point, returns the UI components that the
 * extension point supports.
 */
export type AllowedComponentsForRenderExtension<
  ID extends keyof RenderExtensions,
> = ExtractedAllowedComponentsFromRenderExtension<RenderExtensions[ID]>;
