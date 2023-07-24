import {RenderExtension} from './extension';
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
   * A static extension target that is rendered immediately before any actions within each step.
   */
  'purchase.checkout.actions.render-before': RenderExtension<
    CheckoutApi & StandardApi<'purchase.checkout.actions.render-before'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered immediately before any actions within each step.
   *
   * @deprecated Use `purchase.checkout.actions.render-before` instead.
   */
  'Checkout::Actions::RenderBefore': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::Actions::RenderBefore'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered after all line items.
   */
  'purchase.checkout.cart-line-list.render-after': RenderExtension<
    CheckoutApi & StandardApi<'purchase.checkout.cart-line-list.render-after'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered after all line items.
   *
   * @deprecated Use `purchase.checkout.cart-line-list.render-after` instead.
   */
  'Checkout::CartLines::RenderAfter': RenderExtension<
    CheckoutApi &
      StandardApi<'Checkout::CartLines::RenderAfter'> &
      OrderStatusApi,
    AllComponents
  >;
  /**
   * A static extension target that renders on every line item, inside the details
   * under the line item properties element.
   */
  'purchase.checkout.cart-line-item.render-after': RenderExtension<
    CheckoutApi &
      CartLineDetailsApi &
      StandardApi<'purchase.checkout.cart-line-item.render-after'>,
    AllComponents
  >;
  /**
   * A static extension target that renders on every line item, inside the details
   * under the line item properties element.
   *
   * @deprecated Use `purchase.checkout.cart-line-item.render-after` instead.
   */
  'Checkout::CartLineDetails::RenderAfter': RenderExtension<
    CheckoutApi &
      CartLineDetailsApi &
      StandardApi<'Checkout::CartLineDetails::RenderAfter'> &
      OrderStatusApi,
    AllComponents
  >;
  /**
   * A static extension target that renders on every line item, inside the details
   * under the line item properties element. It replaces the default component rendering.
   */
  'purchase.cart-line-item.line-components.render': RenderExtension<
    CartLineDetailsApi &
      StandardApi<'purchase.cart-line-item.line-components.render'>,
    AllComponents
  >;
  /**
   * A static extension target that renders on every line item, inside the details
   * under the line item properties element. It replaces the default component rendering.
   *
   * @deprecated Use `purchase.cart-line-item.line-components.render` instead.
   */
  'Checkout::CartLineDetails::RenderLineComponents': RenderExtension<
    CartLineDetailsApi &
      StandardApi<'Checkout::CartLineDetails::RenderLineComponents'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered immediately after the contact form element.
   */
  'purchase.checkout.contact.render-after': RenderExtension<
    CheckoutApi & StandardApi<'purchase.checkout.contact.render-after'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered immediately after the contact form element.
   *
   * @deprecated Use `purchase.checkout.contact.render-after` instead.
   */
  'Checkout::Contact::RenderAfter': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::Contact::RenderAfter'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered after a purchase below the customer information.
   *
   * @deprecated Use `purchase.thank-you.customer-information.render-after` or
   * `customer-account.order-status.customer-information.render-after` instead.
   */
  'Checkout::CustomerInformation::RenderAfter': RenderExtension<
    OrderStatusApi &
      CheckoutApi &
      StandardApi<'Checkout::CustomerInformation::RenderAfter'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered between the shipping address header
   * and shipping address form elements.
   */
  'purchase.checkout.delivery-address.render-before': RenderExtension<
    CheckoutApi &
      StandardApi<'purchase.checkout.delivery-address.render-before'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered between the shipping address header
   * and shipping address form elements.
   *
   * @deprecated Use `purchase.checkout.delivery-address.render-before` instead.
   */
  'Checkout::DeliveryAddress::RenderBefore': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::DeliveryAddress::RenderBefore'>,
    AllComponents
  >;
  /**
   * A [dynamic extension target](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#dynamic-extension-targets) that isn't tied to a specific checkout section or feature.
   * Unlike static extension targets, dynamic extension targets render where the merchant
   * sets them using the [checkout editor](https://shopify.dev/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor).
   *
   * The [supported locations](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#supported-locations) for dynamic extension targets can be previewed during development
   * by [using a URL parameter](https://shopify.dev/docs/apps/checkout/best-practices/testing-ui-extensions#dynamic-extension-targets).
   */
  'purchase.checkout.block.render': RenderExtension<
    CheckoutApi & StandardApi<'purchase.checkout.block.render'>,
    AllComponents
  >;
  /**
   * A [dynamic extension target](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#dynamic-extension-targets) that isn't tied to a specific checkout section or feature.
   * Unlike static extension targets, dynamic extension targets render where the merchant
   * sets them using the [checkout editor](https://shopify.dev/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor).
   *
   * The [supported locations](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#supported-locations) for dynamic extension targets can be previewed during development
   * by [using a URL parameter](https://shopify.dev/docs/apps/checkout/best-practices/testing-ui-extensions#dynamic-extension-targets).
   *
   * @deprecated Use `purchase.checkout.block.render` instead.
   */
  'Checkout::Dynamic::Render': RenderExtension<
    CheckoutApi & OrderStatusApi & StandardApi<'Checkout::Dynamic::Render'>,
    AllComponents
  >;
  /**
   * A [dynamic extension target](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#dynamic-extension-targets) that renders exclusively on the Thank You Page.
   * Unlike static extension targets, dynamic extension targets render where the merchant
   * sets them using the [checkout editor](https://shopify.dev/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor).
   *
   * The [supported locations](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#supported-locations) for dynamic extension targets can be previewed during development
   * by [using a URL parameter](https://shopify.dev/docs/apps/checkout/best-practices/testing-ui-extensions#dynamic-extension-targets).
   *
   */
  'purchase.thank-you.block.render': RenderExtension<
    StandardApi<'purchase.thank-you.block.render'>,
    AllComponents
  >;
  /**
   * A [dynamic extension target](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#dynamic-extension-targets) that renders exclusively on the Thank You Page.
   * Unlike static extension targets, dynamic extension targets render where the merchant
   * sets them using the [checkout editor](https://shopify.dev/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor).
   *
   * The [supported locations](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#supported-locations) for dynamic extension targets can be previewed during development
   * by [using a URL parameter](https://shopify.dev/docs/apps/checkout/best-practices/testing-ui-extensions#dynamic-extension-targets).
   *
   * @deprecated Use `purchase.thank-you.block.render` instead.
   */
  'Checkout::ThankYou::Dynamic::Render': RenderExtension<
    StandardApi<'Checkout::ThankYou::Dynamic::Render'>,
    AllComponents
  >;
  /**
   * A static extension target that renders on every line item, inside the details
   * under the line item properties element on the Thank You Page.
   */
  'purchase.thank-you.cart-line-item.render-after': RenderExtension<
    CartLineDetailsApi &
      StandardApi<'purchase.thank-you.cart-line-item.render-after'>,
    AllComponents
  >;
  /**
   * A static extension target that renders on every line item, inside the details
   * under the line item properties element on the Thank You Page.
   *
   * @deprecated Use `purchase.thank-you.cart-line-item.render-after` instead.
   */
  'Checkout::ThankYou::CartLineDetails::RenderAfter': RenderExtension<
    CartLineDetailsApi &
      StandardApi<'Checkout::ThankYou::CartLineDetails::RenderAfter'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered after all line items on the Thank You page.
   */
  'purchase.thank-you.cart-line-list.render-after': RenderExtension<
    StandardApi<'purchase.thank-you.cart-line-list.render-after'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered after all line items on the Thank You page.
   *
   * @deprecated Use `purchase.thank-you.cart-line-list.render-after` instead.
   */
  'Checkout::ThankYou::CartLines::RenderAfter': RenderExtension<
    StandardApi<'Checkout::ThankYou::CartLines::RenderAfter'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered after a purchase below the customer information on the Thank You page.
   */
  'purchase.thank-you.customer-information.render-after': RenderExtension<
    StandardApi<'purchase.thank-you.customer-information.render-after'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered after a purchase below the customer information on the Thank You page.
   *
   * @deprecated Use `purchase.thank-you.customer-information.render-after` instead.
   */
  'Checkout::ThankYou::CustomerInformation::RenderAfter': RenderExtension<
    StandardApi<'Checkout::ThankYou::CustomerInformation::RenderAfter'>,
    AllComponents
  >;
  /**
   * A [dynamic extension target](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#dynamic-extension-targets) that renders exclusively on the Order Status Page.
   * Unlike static extension targets, dynamic extension targets render where the merchant
   * sets them using the [checkout editor](https://shopify.dev/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor).
   *
   * The [supported locations](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#supported-locations) for dynamic extension targets can be previewed during development
   * by [using a URL parameter](https://shopify.dev/docs/apps/checkout/best-practices/testing-ui-extensions#dynamic-extension-targets).
   */
  'customer-account.order-status.block.render': RenderExtension<
    OrderStatusApi & StandardApi<'customer-account.order-status.block.render'>,
    AllComponents
  >;
  /**
   * A [dynamic extension target](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#dynamic-extension-targets) that renders exclusively on the Order Status Page.
   * Unlike static extension targets, dynamic extension targets render where the merchant
   * sets them using the [checkout editor](https://shopify.dev/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor).
   *
   * The [supported locations](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#supported-locations) for dynamic extension targets can be previewed during development
   * by [using a URL parameter](https://shopify.dev/docs/apps/checkout/best-practices/testing-ui-extensions#dynamic-extension-targets).
   *
   * @deprecated Use `customer-account.order-status.block.render` instead.
   */
  'Checkout::OrderStatus::Dynamic::Render': RenderExtension<
    OrderStatusApi & StandardApi<'Checkout::OrderStatus::Dynamic::Render'>,
    AllComponents
  >;
  /**
   * A static extension target that renders on every line item, inside the details
   * under the line item properties element on the Order Status Page.
   */
  'customer-account.order-status.cart-line-item.render-after': RenderExtension<
    CartLineDetailsApi &
      OrderStatusApi &
      StandardApi<'customer-account.order-status.cart-line-item.render-after'>,
    AllComponents
  >;
  /**
   * A static extension target that renders on every line item, inside the details
   * under the line item properties element on the Order Status Page.
   *
   * @deprecated Use `customer-account.order-status.cart-line-item.render-after` instead.
   */
  'Checkout::OrderStatus::CartLineDetails::RenderAfter': RenderExtension<
    CartLineDetailsApi &
      OrderStatusApi &
      StandardApi<'Checkout::OrderStatus::CartLineDetails::RenderAfter'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered after all line items on the Order Status page.
   */
  'customer-account.order-status.cart-line-list.render-after': RenderExtension<
    OrderStatusApi &
      StandardApi<'customer-account.order-status.cart-line-list.render-after'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered after all line items on the Order Status page.
   *
   * @deprecated Use `customer-account.order-status.cart-line-list.render-after` instead.
   */
  'Checkout::OrderStatus::CartLines::RenderAfter': RenderExtension<
    OrderStatusApi &
      StandardApi<'Checkout::OrderStatus::CartLines::RenderAfter'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered after a purchase below the customer information on the Order Status page.
   */
  'customer-account.order-status.customer-information.render-after': RenderExtension<
    OrderStatusApi &
      StandardApi<'customer-account.order-status.customer-information.render-after'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered after a purchase below the customer information on the Order Status page.
   *
   * @deprecated Use `customer-account.order-status.customer-information.render-after` instead.
   */
  'Checkout::OrderStatus::CustomerInformation::RenderAfter': RenderExtension<
    OrderStatusApi &
      StandardApi<'Checkout::OrderStatus::CustomerInformation::RenderAfter'>,
    AllComponents
  >;
  /**
   * A static extension target that renders the gift card entry form fields after
   * the buyer ticks a box to use a gift card. This does not replace the
   * native gift card entry form which is rendered in a separate part of checkout.
   *
   * @private
   */
  'purchase.checkout.gift-card.render': RenderExtension<
    RedeemableRenderApi &
      CheckoutApi &
      StandardApi<'purchase.checkout.gift-card.render'>,
    AllComponents
  >;
  /**
   * A static extension target that renders the gift card entry form fields after
   * the buyer ticks a box to use a gift card. This does not replace the
   * native gift card entry form which is rendered in a separate part of checkout.
   *
   * @private
   * @deprecated Use `purchase.checkout.gift-card.render` instead.
   */
  'Checkout::GiftCard::Render': RenderExtension<
    RedeemableRenderApi &
      CheckoutApi &
      StandardApi<'Checkout::GiftCard::Render'>,
    AllComponents
  >;
  /**
   * A static extension target that renders the form fields for a payment method when selected by the buyer.
   *
   * @private
   */
  'purchase.checkout.payment-option-item.details.render': RenderExtension<
    PaymentMethodRenderApi &
      CheckoutApi &
      StandardApi<'purchase.checkout.payment-option-item.details.render'>,
    AllComponents
  >;
  /**
   * A static extension target that renders the form fields for a payment method when selected by the buyer.
   *
   * @private
   * @deprecated Use `purchase.checkout.payment-option-item.details.render` instead.
   */
  'Checkout::PaymentMethod::Render': RenderExtension<
    PaymentMethodRenderApi &
      CheckoutApi &
      StandardApi<'Checkout::PaymentMethod::Render'>,
    AllComponents
  >;
  /**
   * A static extension target that renders a form modal when a buyer selects the custom onsite payment method.
   *
   * @private
   */
  'purchase.checkout.payment-option-item.action-required.render': RenderExtension<
    CheckoutApi &
      StandardApi<'purchase.checkout.payment-option-item.action-required.render'>,
    AllComponents
  >;
  /**
   * A static extension target that renders a form modal when a buyer selects the custom onsite payment method.
   *
   * @private
   * @deprecated Use `purchase.checkout.payment-option-item.action-required.render` instead.
   */
  'Checkout::PaymentMethod::RenderRequiredAction': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::PaymentMethod::RenderRequiredAction'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered in the order summary, before the discount form element.
   */
  'purchase.checkout.reductions.render-before': RenderExtension<
    CheckoutApi & StandardApi<'purchase.checkout.reductions.render-before'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered in the order summary, before the discount form element.
   *
   * @deprecated Use `purchase.checkout.reductions.render-before` instead.
   */
  'Checkout::Reductions::RenderBefore': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::Reductions::RenderBefore'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered in the order summary, after the discount form
   * and discount tag elements.
   */
  'purchase.checkout.reductions.render-after': RenderExtension<
    CheckoutApi & StandardApi<'purchase.checkout.reductions.render-after'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered in the order summary, after the discount form
   * and discount tag elements.
   *
   * @deprecated Use `purchase.checkout.reductions.render-after` instead.
   */
  'Checkout::Reductions::RenderAfter': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::Reductions::RenderAfter'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered between the shipping method
   * header and shipping method options.
   */
  'purchase.checkout.shipping-option-list.render-before': RenderExtension<
    CheckoutApi &
      StandardApi<'purchase.checkout.shipping-option-list.render-before'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered between the shipping method
   * header and shipping method options.
   *
   * @deprecated Use `purchase.checkout.shipping-option-list.render-before` instead.
   */
  'Checkout::ShippingMethods::RenderBefore': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::ShippingMethods::RenderBefore'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered after the shipping method
   * options.
   */
  'purchase.checkout.shipping-option-list.render-after': RenderExtension<
    CheckoutApi &
      StandardApi<'purchase.checkout.shipping-option-list.render-after'>,
    AllComponents
  >;
  /**
   * A static extension target that is rendered after the shipping method
   * options.
   *
   * @deprecated Use `purchase.checkout.shipping-option-list.render-after` instead.
   */
  'Checkout::ShippingMethods::RenderAfter': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::ShippingMethods::RenderAfter'>,
    AllComponents
  >;
  /**
   * > Caution: This feature is in developer preview and is subject to change.
   *
   * A static extension target that is rendered before pickup location options.
   */
  'purchase.checkout.pickup-location-list.render-before': RenderExtension<
    PickupLocationsApi &
      CheckoutApi &
      StandardApi<'purchase.checkout.pickup-location-list.render-before'>,
    AllComponents
  >;
  /**
   * > Caution: This feature is in developer preview and is subject to change.
   *
   * A static extension target that is rendered before pickup location options.
   *
   * @deprecated Use `purchase.checkout.pickup-location-list.render-before` instead.
   */
  'Checkout::PickupLocations::RenderBefore': RenderExtension<
    PickupLocationsApi &
      CheckoutApi &
      StandardApi<'Checkout::PickupLocations::RenderBefore'>,
    AllComponents
  >;
  /**
   * > Caution: This feature is in developer preview and is subject to change.
   *
   * A static extension target that is rendered after pickup location options.
   */
  'purchase.checkout.pickup-location-list.render-after': RenderExtension<
    PickupLocationsApi &
      CheckoutApi &
      StandardApi<'purchase.checkout.pickup-location-list.render-after'>,
    AllComponents
  >;
  /**
   * > Caution: This feature is in developer preview and is subject to change.
   *
   * A static extension target that is rendered after pickup location options.
   *
   * @deprecated Use `purchase.checkout.pickup-location-list.render-after` instead.
   */
  'Checkout::PickupLocations::RenderAfter': RenderExtension<
    PickupLocationsApi &
      CheckoutApi &
      StandardApi<'Checkout::PickupLocations::RenderAfter'>,
    AllComponents
  >;
  /**
   * > Caution: This feature is in developer preview and is subject to change.
   *
   * A static extension target that is rendered after the shipping method
   * details within the shipping method option list, for each option.
   */
  'purchase.checkout.shipping-option-item.render-after': RenderExtension<
    ShippingMethodDetailsApi &
      CheckoutApi &
      StandardApi<'purchase.checkout.shipping-option-item.render-after'>,
    AllComponents
  >;
  /**
   * > Caution: This feature is in developer preview and is subject to change.
   *
   * A static extension target that is rendered after the shipping method
   * details within the shipping method option list, for each option.
   *
   * @deprecated Use `purchase.checkout.shipping-option-item.render-after` instead.
   */
  'Checkout::ShippingMethodDetails::RenderAfter': RenderExtension<
    ShippingMethodDetailsApi &
      CheckoutApi &
      StandardApi<'Checkout::ShippingMethodDetails::RenderAfter'>,
    AllComponents
  >;
  /**
   * > Caution: This feature is in developer preview and is subject to change.
   *
   * A static extension target that is rendered under the shipping method
   * within the shipping method option list, for each option.
   */
  'purchase.checkout.shipping-option-item.details.render': RenderExtension<
    ShippingMethodDetailsApi &
      CheckoutApi &
      StandardApi<'purchase.checkout.shipping-option-item.details.render'>,
    AllComponents
  >;
  /**
   * > Caution: This feature is in developer preview and is subject to change.
   *
   * A static extension target that is rendered under the shipping method
   * within the shipping method option list, for each option.
   *
   * @deprecated Use `purchase.checkout.shipping-option-item.details.render` instead.
   */
  'Checkout::ShippingMethodDetails::RenderExpanded': RenderExtension<
    ShippingMethodDetailsApi &
      CheckoutApi &
      StandardApi<'Checkout::ShippingMethodDetails::RenderExpanded'>,
    AllComponents
  >;
  /**
   * > Caution: This feature is in developer preview and is subject to change.
   *
   * A static extension target that is rendered immediately before the pickup points.
   */
  'purchase.checkout.pickup-point-list.render-before': RenderExtension<
    PickupPointsApi &
      CheckoutApi &
      StandardApi<'purchase.checkout.pickup-point-list.render-before'>,
    AllComponents
  >;
  /**
   * > Caution: This feature is in developer preview and is subject to change.
   *
   * A static extension target that is rendered immediately before the pickup points.
   *
   * @deprecated Use `purchase.checkout.pickup-point-list.render-before` instead.
   */
  'Checkout::PickupPoints::RenderBefore': RenderExtension<
    PickupPointsApi &
      CheckoutApi &
      StandardApi<'Checkout::PickupPoints::RenderBefore'>,
    AllComponents
  >;
  /**
   * > Caution: This feature is in developer preview and is subject to change.
   *
   * A static extension target that is rendered immediately after the pickup points.
   */
  'purchase.checkout.pickup-point-list.render-after': RenderExtension<
    PickupPointsApi &
      CheckoutApi &
      StandardApi<'purchase.checkout.pickup-point-list.render-after'>,
    AllComponents
  >;
  /**
   * > Caution: This feature is in developer preview and is subject to change.
   *
   * A static extension target that is rendered immediately after the pickup points.
   *
   * @deprecated Use `purchase.checkout.pickup-point-list.render-after` instead.
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
