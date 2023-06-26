import {RenderExtension} from './render-extension';
import type {
  CartLineDetailsApi,
  PaymentMethodRenderApi,
  PickupLocationsApi,
  RedeemableRenderApi,
  ShippingMethodDetailsApi,
  PickupPointsApi,
  StandardApi,
  CheckoutApi,
  OrderStatusApi,
} from './api';

type Components = typeof import('./components');

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
    CheckoutApi & StandardApi<'Checkout::Actions::RenderBefore'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered after all line items.
   */
  'Checkout::CartLines::RenderAfter': RenderExtension<
    CheckoutApi &
      StandardApi<'Checkout::CartLines::RenderAfter'> &
      OrderStatusApi,
    AllComponents
  >;
  /**
   * A static extension point that renders on every line item, inside the details
   * under the line item properties element.
   */
  'Checkout::CartLineDetails::RenderAfter': RenderExtension<
    CheckoutApi &
      CartLineDetailsApi &
      StandardApi<'Checkout::CartLineDetails::RenderAfter'> &
      OrderStatusApi,
    AllComponents
  >;
  /**
   * A static extension point that is rendered immediately after the contact form element.
   */
  'Checkout::Contact::RenderAfter': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::Contact::RenderAfter'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered after a purchase below the customer information.
   */
  'Checkout::CustomerInformation::RenderAfter': RenderExtension<
    OrderStatusApi &
      CheckoutApi &
      StandardApi<'Checkout::CustomerInformation::RenderAfter'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered between the shipping address header
   * and shipping address form elements.
   */
  'Checkout::DeliveryAddress::RenderBefore': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::DeliveryAddress::RenderBefore'>,
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
    CheckoutApi & OrderStatusApi & StandardApi<'Checkout::Dynamic::Render'>,
    AllComponents
  >;
  /**
   * A [dynamic extension point](https://shopify.dev/docs/api/checkout-ui-extensions/extension-points-overview#dynamic-extension-points) that renders exclusively on the Thank You Page.
   * Unlike static extension points, dynamic extension points render where the merchant
   * sets them using the [checkout editor](https://shopify.dev/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor).
   *
   * The [supported locations](https://shopify.dev/docs/api/checkout-ui-extensions/extension-points-overview#supported-locations) for dynamic extension points can be previewed during development
   * by [using a URL parameter](https://shopify.dev/docs/apps/checkout/best-practices/testing-ui-extensions#dynamic-extension-points).
   *
   */
  'Checkout::ThankYou::Dynamic::Render': RenderExtension<
    StandardApi<'Checkout::ThankYou::Dynamic::Render'>,
    AllComponents
  >;

  /**
   * A static extension point that renders on every line item, inside the details
   * under the line item properties element on the Thank You Page.
   *
   */
  'Checkout::ThankYou::CartLineDetails::RenderAfter': RenderExtension<
    CartLineDetailsApi &
      StandardApi<'Checkout::ThankYou::CartLineDetails::RenderAfter'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered after all line items on the Thank You page.
   *
   */
  'Checkout::ThankYou::CartLines::RenderAfter': RenderExtension<
    StandardApi<'Checkout::ThankYou::CartLines::RenderAfter'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered after a purchase below the customer information on the Thank You page.
   *
   */
  'Checkout::ThankYou::CustomerInformation::RenderAfter': RenderExtension<
    StandardApi<'Checkout::ThankYou::CustomerInformation::RenderAfter'>,
    AllComponents
  >;

  /**
   * A [dynamic extension point](https://shopify.dev/docs/api/checkout-ui-extensions/extension-points-overview#dynamic-extension-points) that renders exclusively on the Order Status Page.
   * Unlike static extension points, dynamic extension points render where the merchant
   * sets them using the [checkout editor](https://shopify.dev/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor).
   *
   * The [supported locations](https://shopify.dev/docs/api/checkout-ui-extensions/extension-points-overview#supported-locations) for dynamic extension points can be previewed during development
   * by [using a URL parameter](https://shopify.dev/docs/apps/checkout/best-practices/testing-ui-extensions#dynamic-extension-points).
   *
   */
  'Checkout::OrderStatus::Dynamic::Render': RenderExtension<
    OrderStatusApi & StandardApi<'Checkout::OrderStatus::Dynamic::Render'>,
    AllComponents
  >;
  /**
   * A static extension point that renders on every line item, inside the details
   * under the line item properties element on the Order Status Page.
   *
   */
  'Checkout::OrderStatus::CartLineDetails::RenderAfter': RenderExtension<
    CartLineDetailsApi &
      OrderStatusApi &
      StandardApi<'Checkout::OrderStatus::CartLineDetails::RenderAfter'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered after all line items on the Order Status page.
   *
   */
  'Checkout::OrderStatus::CartLines::RenderAfter': RenderExtension<
    OrderStatusApi &
      StandardApi<'Checkout::OrderStatus::CartLines::RenderAfter'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered after a purchase below the customer information on the Order Status page.
   *
   */
  'Checkout::OrderStatus::CustomerInformation::RenderAfter': RenderExtension<
    OrderStatusApi &
      StandardApi<'Checkout::OrderStatus::CustomerInformation::RenderAfter'>,
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
    RedeemableRenderApi &
      CheckoutApi &
      StandardApi<'Checkout::GiftCard::Render'>,
    AllComponents
  >;
  /**
   * A static extension point that renders the form fields for a payment method when selected by the buyer.
   *
   * @private
   */
  'Checkout::PaymentMethod::Render': RenderExtension<
    PaymentMethodRenderApi &
      CheckoutApi &
      StandardApi<'Checkout::PaymentMethod::Render'>,
    AllComponents
  >;
  /**
   * A static extension point that renders a form modal when a buyer selects the custom onsite payment method.
   *
   * @private
   */
  'Checkout::PaymentMethod::RenderRequiredAction': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::PaymentMethod::RenderRequiredAction'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered in the order summary, before the discount form element.
   */
  'Checkout::Reductions::RenderBefore': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::Reductions::RenderBefore'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered in the order summary, after the discount form
   * and discount tag elements.
   */
  'Checkout::Reductions::RenderAfter': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::Reductions::RenderAfter'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered between the shipping method
   * header and shipping method options.
   */
  'Checkout::ShippingMethods::RenderBefore': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::ShippingMethods::RenderBefore'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered after the shipping method
   * options.
   */
  'Checkout::ShippingMethods::RenderAfter': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::ShippingMethods::RenderAfter'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered before pickup location options.
   */
  'Checkout::PickupLocations::RenderBefore': RenderExtension<
    PickupLocationsApi &
      CheckoutApi &
      StandardApi<'Checkout::PickupLocations::RenderBefore'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered after pickup location options.
   */
  'Checkout::PickupLocations::RenderAfter': RenderExtension<
    PickupLocationsApi &
      CheckoutApi &
      StandardApi<'Checkout::PickupLocations::RenderAfter'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered after the shipping method
   * details within the shipping method option list, for each option.
   */
  'Checkout::ShippingMethodDetails::RenderAfter': RenderExtension<
    ShippingMethodDetailsApi &
      CheckoutApi &
      StandardApi<'Checkout::ShippingMethodDetails::RenderAfter'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered under the shipping method
   * within the shipping method option list, for each option.
   */
  'Checkout::ShippingMethodDetails::RenderExpanded': RenderExtension<
    ShippingMethodDetailsApi &
      CheckoutApi &
      StandardApi<'Checkout::ShippingMethodDetails::RenderExpanded'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered immediately before the pickup points.
   */
  'Checkout::PickupPoints::RenderBefore': RenderExtension<
    PickupPointsApi &
      CheckoutApi &
      StandardApi<'Checkout::PickupPoints::RenderBefore'>,
    AllComponents
  >;
  /**
   * A static extension point that is rendered immediately after the pickup points.
   */
  'Checkout::PickupPoints::RenderAfter': RenderExtension<
    PickupPointsApi &
      CheckoutApi &
      StandardApi<'Checkout::PickupPoints::RenderAfter'>,
    AllComponents
  >;
}

export type ExtensionPoint = keyof ExtensionPoints;

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
