import type {RenderExtension} from '../../extension';

import type {AnyComponent} from './shared';
import type {StandardApi, CartLineDetailsRenderAfterApi} from './api';

export interface ExtensionPoints {
  /**
   * A [dynamic extension point](https://shopify.dev/api/checkout-extensions/checkout#extension-points) that isn't tied to a specific checkout section or feature.
   * Unlike static extension points, dynamic extension points render where the merchant
   * sets them using the [checkout editor](https://shopify.dev/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor).
   *
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
