import {RenderExtension} from './render-extension';
import type {CartLineRenderAfterApi, StandardApi} from './api';

type Components = typeof import('../components');

type AllComponents = Components[keyof Components];
/**
 * A UI extension will register for one or more extension points using `shopify.extend()`.
 * An extension point in a UI extension is a plain JavaScript function.
 * This function receives some API for interacting with the application,
 * and is expected to return a value in a specific shape.
 * The input arguments and the output type are different
 * for each extension point.
 */
export interface ExtensionPoints {
  /**
   * A static extension point that is rendered immediately before any actions within each step.
   */
  'Checkout::Actions::RenderBefore': RenderExtension<
    StandardApi<'Checkout::Actions::RenderBefore'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered after all line items.
   */
  'Checkout::CartLines::RenderAfter': RenderExtension<
    StandardApi<'Checkout::CartLines::RenderAfter'>,
    AllComponents
  >;
  /**
   * A static extension point that renders on every line item, inside the details
   * under the line item properties element.
   */
  'Checkout::CartLineDetails::RenderAfter': RenderExtension<
    CartLineRenderAfterApi,
    AllComponents
  >;
  /**
   * A static extension point that is rendered immediately after the contact form element.
   */
  'Checkout::Contact::RenderAfter': RenderExtension<
    StandardApi<'Checkout::Contact::RenderAfter'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered after a purchase below the customer information.
   */
  'Checkout::CustomerInformation::RenderAfter': RenderExtension<
    StandardApi<'Checkout::CustomerInformation::RenderAfter'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered between the shipping address header
   * and shipping address form elements.
   */
  'Checkout::DeliveryAddress::RenderBefore': RenderExtension<
    StandardApi<'Checkout::DeliveryAddress::RenderBefore'>,
    AllComponents
  >;
  /**
   * A [dynamic extension point](https://shopify.dev/docs/api/checkout-ui-extensions/extension-points-overview#dynamic-extension-points) that isn't tied to a specific checkout section or feature.
   * Unlike static extension points, dynamic extension points render where the merchant
   * sets them using the [checkout editor](https://shopify.dev/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor).
   *
   * The [supported locations](https://shopify.dev/docs/api/checkout-ui-extensions/extension-points-overview#supported-locations) for dynamic extension points can be previewed during development
   * by [using a URL parameter](https://shopify.dev/docs/apps/checkout/best-practices/testing-ui-extensions#dynamic-extension-points).
   */
  'Checkout::Dynamic::Render': RenderExtension<
    StandardApi<'Checkout::Dynamic::Render'>,
    AllComponents
  >;
  /**
   * A static extension point that renders the gift card entry form fields after
   * the buyer ticks a box to use a gift card. This does not replace the
   * native gift card entry form which is rendered in a separate part of checkout.
   *
   * @private
   */
  'Checkout::GiftCard::Render': RenderExtension<
    StandardApi<'Checkout::GiftCard::Render'>,
    AllComponents
  >;
  /**
   * A static extension point that renders the form fields for a payment method when selected by the buyer.
   *
   * @private
   */
  'Checkout::PaymentMethod::Render': RenderExtension<
    StandardApi<'Checkout::PaymentMethod::Render'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered in the order summary, before the discount form element.
   */
  'Checkout::Reductions::RenderBefore': RenderExtension<
    StandardApi<'Checkout::Reductions::RenderBefore'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered in the order summary, after the discount form
   * and discount tag elements.
   */
  'Checkout::Reductions::RenderAfter': RenderExtension<
    StandardApi<'Checkout::Reductions::RenderAfter'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered between the shipping method
   * header and shipping method options.
   */
  'Checkout::ShippingMethods::RenderBefore': RenderExtension<
    StandardApi<'Checkout::ShippingMethods::RenderBefore'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered after the shipping method
   * options.
   */
  'Checkout::ShippingMethods::RenderAfter': RenderExtension<
    StandardApi<'Checkout::ShippingMethods::RenderAfter'>,
    AllComponents
  >;
}

export type ExtensionPoint = keyof ExtensionPoints;
