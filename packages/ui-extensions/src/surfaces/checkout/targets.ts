import type {RenderExtension} from './extension';
import type {
  CartLineItemApi,
  PaymentOptionItemApi,
  PickupLocationListApi,
  RedeemableApi,
  ShippingOptionItemApi,
  PickupPointListApi,
  StandardApi,
  CheckoutApi,
  OrderStatusApi,
} from './api';
import type {AnyComponent} from './shared';

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
   * A static extension target that is rendered immediately before any actions within each step.
   */
  'purchase.checkout.actions.render-before': RenderExtension<
    CheckoutApi & StandardApi<'purchase.checkout.actions.render-before'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered immediately before any actions within each step.
   *
   * @deprecated Use `purchase.checkout.actions.render-before` instead.
   */
  'Checkout::Actions::RenderBefore': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::Actions::RenderBefore'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered after all line items.
   */
  'purchase.checkout.cart-line-list.render-after': RenderExtension<
    CheckoutApi & StandardApi<'purchase.checkout.cart-line-list.render-after'>,
    AnyComponent
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
    AnyComponent
  >;
  /**
   * A static extension target that renders on every line item, inside the details
   * under the line item properties element.
   */
  'purchase.checkout.cart-line-item.render-after': RenderExtension<
    CheckoutApi &
      CartLineItemApi &
      StandardApi<'purchase.checkout.cart-line-item.render-after'>,
    AnyComponent
  >;
  /**
   * A static extension target that renders on every line item, inside the details
   * under the line item properties element.
   *
   * @deprecated Use `purchase.checkout.cart-line-item.render-after` instead.
   */
  'Checkout::CartLineDetails::RenderAfter': RenderExtension<
    CheckoutApi &
      CartLineItemApi &
      StandardApi<'Checkout::CartLineDetails::RenderAfter'> &
      OrderStatusApi,
    AnyComponent
  >;
  /**
   * A static extension target that renders on every line item, inside the details
   * under the line item properties element. It replaces the default component rendering.
   * @private
   */
  'purchase.cart-line-item.line-components.render': RenderExtension<
    CartLineItemApi &
      StandardApi<'purchase.cart-line-item.line-components.render'>,
    AnyComponent
  >;
  /**
   * A static extension target that renders on every line item, inside the details
   * under the line item properties element. It replaces the default component rendering.
   *
   * @deprecated Use `purchase.cart-line-item.line-components.render` instead.
   * @private
   */
  'Checkout::CartLineDetails::RenderLineComponents': RenderExtension<
    CartLineItemApi &
      StandardApi<'Checkout::CartLineDetails::RenderLineComponents'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered immediately after the contact form element.
   */
  'purchase.checkout.contact.render-after': RenderExtension<
    CheckoutApi & StandardApi<'purchase.checkout.contact.render-after'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered immediately after the contact form element.
   *
   * @deprecated Use `purchase.checkout.contact.render-after` instead.
   */
  'Checkout::Contact::RenderAfter': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::Contact::RenderAfter'>,
    AnyComponent
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
    AnyComponent
  >;
  /**
   * A static extension target that is rendered between the shipping address header
   * and shipping address form elements.
   */
  'purchase.checkout.delivery-address.render-before': RenderExtension<
    CheckoutApi &
      StandardApi<'purchase.checkout.delivery-address.render-before'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered between the shipping address header
   * and shipping address form elements.
   *
   * @deprecated Use `purchase.checkout.delivery-address.render-before` instead.
   */
  'Checkout::DeliveryAddress::RenderBefore': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::DeliveryAddress::RenderBefore'>,
    AnyComponent
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
    AnyComponent
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
    AnyComponent
  >;
  /**
   * A [dynamic extension target](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#dynamic-extension-targets) that renders exclusively on the **Thank you** page.
   * Unlike static extension targets, dynamic extension targets render where the merchant
   * sets them using the [checkout editor](https://shopify.dev/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor).
   *
   * The [supported locations](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#supported-locations) for dynamic extension targets can be previewed during development
   * by [using a URL parameter](https://shopify.dev/docs/apps/checkout/best-practices/testing-ui-extensions#dynamic-extension-targets).
   *
   */
  'purchase.thank-you.block.render': RenderExtension<
    StandardApi<'purchase.thank-you.block.render'>,
    AnyComponent
  >;
  /**
   * A [dynamic extension target](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#dynamic-extension-targets) that renders exclusively on the **Thank you** page.
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
    AnyComponent
  >;
  /**
   * A static extension target that renders on every line item, inside the details
   * under the line item properties element on the **Thank you** page.
   */
  'purchase.thank-you.cart-line-item.render-after': RenderExtension<
    CartLineItemApi &
      StandardApi<'purchase.thank-you.cart-line-item.render-after'>,
    AnyComponent
  >;
  /**
   * A static extension target that renders on every line item, inside the details
   * under the line item properties element on the **Thank you** page.
   *
   * @deprecated Use `purchase.thank-you.cart-line-item.render-after` instead.
   */
  'Checkout::ThankYou::CartLineDetails::RenderAfter': RenderExtension<
    CartLineItemApi &
      StandardApi<'Checkout::ThankYou::CartLineDetails::RenderAfter'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered after all line items on the **Thank you** page.
   */
  'purchase.thank-you.cart-line-list.render-after': RenderExtension<
    StandardApi<'purchase.thank-you.cart-line-list.render-after'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered after all line items on the **Thank you** page.
   *
   * @deprecated Use `purchase.thank-you.cart-line-list.render-after` instead.
   */
  'Checkout::ThankYou::CartLines::RenderAfter': RenderExtension<
    StandardApi<'Checkout::ThankYou::CartLines::RenderAfter'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered after a purchase below the customer information on the **Thank you** page.
   */
  'purchase.thank-you.customer-information.render-after': RenderExtension<
    StandardApi<'purchase.thank-you.customer-information.render-after'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered after a purchase below the customer information on the **Thank you** page.
   *
   * @deprecated Use `purchase.thank-you.customer-information.render-after` instead.
   */
  'Checkout::ThankYou::CustomerInformation::RenderAfter': RenderExtension<
    StandardApi<'Checkout::ThankYou::CustomerInformation::RenderAfter'>,
    AnyComponent
  >;
  /**
   * A [dynamic extension target](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#dynamic-extension-targets) that renders exclusively on the **Order status** page.
   * Unlike static extension targets, dynamic extension targets render where the merchant
   * sets them using the [checkout editor](https://shopify.dev/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor).
   *
   * The [supported locations](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#supported-locations) for dynamic extension targets can be previewed during development
   * by [using a URL parameter](https://shopify.dev/docs/apps/checkout/best-practices/testing-ui-extensions#dynamic-extension-targets).
   */
  'customer-account.order-status.block.render': RenderExtension<
    OrderStatusApi &
      CustomerAccountStandardApi<'customer-account.order-status.block.render'>,
    AnyComponent
  >;
  /**
   * A [dynamic extension target](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#dynamic-extension-targets) that renders exclusively on the **Order status** page.
   * Unlike static extension targets, dynamic extension targets render where the merchant
   * sets them using the [checkout editor](https://shopify.dev/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor).
   *
   * The [supported locations](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#supported-locations) for dynamic extension targets can be previewed during development
   * by [using a URL parameter](https://shopify.dev/docs/apps/checkout/best-practices/testing-ui-extensions#dynamic-extension-targets).
   *
   * @deprecated Use `customer-account.order-status.block.render` instead.
   */
  'Checkout::OrderStatus::Dynamic::Render': RenderExtension<
    OrderStatusApi &
      CustomerAccountStandardApi<'Checkout::OrderStatus::Dynamic::Render'>,
    AnyComponent
  >;
  /**
   * A static extension target that renders on every line item, inside the details
   * under the line item properties element on the **Order status** page.
   */
  'customer-account.order-status.cart-line-item.render-after': RenderExtension<
    CartLineItemApi &
      OrderStatusApi &
      CustomerAccountStandardApi<'customer-account.order-status.cart-line-item.render-after'>,
    AnyComponent
  >;
  /**
   * A static extension target that renders on every line item, inside the details
   * under the line item properties element on the **Order status** page.
   *
   * @deprecated Use `customer-account.order-status.cart-line-item.render-after` instead.
   */
  'Checkout::OrderStatus::CartLineDetails::RenderAfter': RenderExtension<
    CartLineItemApi &
      OrderStatusApi &
      CustomerAccountStandardApi<'Checkout::OrderStatus::CartLineDetails::RenderAfter'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered after all line items on the **Order status** page.
   */
  'customer-account.order-status.cart-line-list.render-after': RenderExtension<
    OrderStatusApi &
      CustomerAccountStandardApi<'customer-account.order-status.cart-line-list.render-after'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered after all line items on the **Order status** page.
   *
   * @deprecated Use `customer-account.order-status.cart-line-list.render-after` instead.
   */
  'Checkout::OrderStatus::CartLines::RenderAfter': RenderExtension<
    OrderStatusApi &
      CustomerAccountStandardApi<'Checkout::OrderStatus::CartLines::RenderAfter'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered after a purchase below the customer information on the **Order status** page.
   */
  'customer-account.order-status.customer-information.render-after': RenderExtension<
    OrderStatusApi &
      CustomerAccountStandardApi<'customer-account.order-status.customer-information.render-after'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered after a purchase below the customer information on the **Order status** page.
   *
   * @deprecated Use `customer-account.order-status.customer-information.render-after` instead.
   */
  'Checkout::OrderStatus::CustomerInformation::RenderAfter': RenderExtension<
    OrderStatusApi &
      CustomerAccountStandardApi<'Checkout::OrderStatus::CustomerInformation::RenderAfter'>,
    AnyComponent
  >;
  /**
   * A static extension target that renders the gift card entry form fields after
   * the buyer ticks a box to use a gift card. This does not replace the
   * native gift card entry form which is rendered in a separate part of checkout.
   *
   * @private
   */
  'purchase.checkout.gift-card.render': RenderExtension<
    RedeemableApi &
      CheckoutApi &
      StandardApi<'purchase.checkout.gift-card.render'>,
    AnyComponent
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
    RedeemableApi & CheckoutApi & StandardApi<'Checkout::GiftCard::Render'>,
    AnyComponent
  >;
  /**
   * A static extension target that renders the form fields for a payment method when selected by the buyer.
   *
   * @private
   */
  'purchase.checkout.payment-option-item.details.render': RenderExtension<
    PaymentOptionItemApi &
      CheckoutApi &
      StandardApi<'purchase.checkout.payment-option-item.details.render'>,
    AnyComponent
  >;
  /**
   * A static extension target that renders the form fields for a payment method when selected by the buyer.
   *
   * @private
   * @deprecated Use `purchase.checkout.payment-option-item.details.render` instead.
   */
  'Checkout::PaymentMethod::Render': RenderExtension<
    PaymentOptionItemApi &
      CheckoutApi &
      StandardApi<'Checkout::PaymentMethod::Render'>,
    AnyComponent
  >;
  /**
   * A static extension target that renders a form modal when a buyer selects the custom onsite payment method.
   *
   * @private
   */
  'purchase.checkout.payment-option-item.action-required.render': RenderExtension<
    CheckoutApi &
      StandardApi<'purchase.checkout.payment-option-item.action-required.render'>,
    AnyComponent
  >;
  /**
   * A static extension target that renders a form modal when a buyer selects the custom onsite payment method.
   *
   * @private
   * @deprecated Use `purchase.checkout.payment-option-item.action-required.render` instead.
   */
  'Checkout::PaymentMethod::RenderRequiredAction': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::PaymentMethod::RenderRequiredAction'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered in the order summary, before the discount form element.
   */
  'purchase.checkout.reductions.render-before': RenderExtension<
    CheckoutApi & StandardApi<'purchase.checkout.reductions.render-before'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered in the order summary, before the discount form element.
   *
   * @deprecated Use `purchase.checkout.reductions.render-before` instead.
   */
  'Checkout::Reductions::RenderBefore': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::Reductions::RenderBefore'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered in the order summary, after the discount form
   * and discount tag elements.
   */
  'purchase.checkout.reductions.render-after': RenderExtension<
    CheckoutApi & StandardApi<'purchase.checkout.reductions.render-after'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered in the order summary, after the discount form
   * and discount tag elements.
   *
   * @deprecated Use `purchase.checkout.reductions.render-after` instead.
   */
  'Checkout::Reductions::RenderAfter': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::Reductions::RenderAfter'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered between the shipping method
   * header and shipping method options.
   */
  'purchase.checkout.shipping-option-list.render-before': RenderExtension<
    CheckoutApi &
      StandardApi<'purchase.checkout.shipping-option-list.render-before'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered between the shipping method
   * header and shipping method options.
   *
   * @deprecated Use `purchase.checkout.shipping-option-list.render-before` instead.
   */
  'Checkout::ShippingMethods::RenderBefore': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::ShippingMethods::RenderBefore'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered after the shipping method
   * options.
   */
  'purchase.checkout.shipping-option-list.render-after': RenderExtension<
    CheckoutApi &
      StandardApi<'purchase.checkout.shipping-option-list.render-after'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered after the shipping method
   * options.
   *
   * @deprecated Use `purchase.checkout.shipping-option-list.render-after` instead.
   */
  'Checkout::ShippingMethods::RenderAfter': RenderExtension<
    CheckoutApi & StandardApi<'Checkout::ShippingMethods::RenderAfter'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered before pickup location options.
   */
  'purchase.checkout.pickup-location-list.render-before': RenderExtension<
    PickupLocationListApi &
      CheckoutApi &
      StandardApi<'purchase.checkout.pickup-location-list.render-before'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered before pickup location options.
   *
   * @deprecated Use `purchase.checkout.pickup-location-list.render-before` instead.
   */
  'Checkout::PickupLocations::RenderBefore': RenderExtension<
    PickupLocationListApi &
      CheckoutApi &
      StandardApi<'Checkout::PickupLocations::RenderBefore'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered after pickup location options.
   */
  'purchase.checkout.pickup-location-list.render-after': RenderExtension<
    PickupLocationListApi &
      CheckoutApi &
      StandardApi<'purchase.checkout.pickup-location-list.render-after'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered after pickup location options.
   *
   * @deprecated Use `purchase.checkout.pickup-location-list.render-after` instead.
   */
  'Checkout::PickupLocations::RenderAfter': RenderExtension<
    PickupLocationListApi &
      CheckoutApi &
      StandardApi<'Checkout::PickupLocations::RenderAfter'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered after the shipping method
   * details within the shipping method option list, for each option.
   */
  'purchase.checkout.shipping-option-item.render-after': RenderExtension<
    ShippingOptionItemApi &
      CheckoutApi &
      StandardApi<'purchase.checkout.shipping-option-item.render-after'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered after the shipping method
   * details within the shipping method option list, for each option.
   *
   * @deprecated Use `purchase.checkout.shipping-option-item.render-after` instead.
   */
  'Checkout::ShippingMethodDetails::RenderAfter': RenderExtension<
    ShippingOptionItemApi &
      CheckoutApi &
      StandardApi<'Checkout::ShippingMethodDetails::RenderAfter'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered under the shipping method
   * within the shipping method option list, for each option.
   */
  'purchase.checkout.shipping-option-item.details.render': RenderExtension<
    ShippingOptionItemApi &
      CheckoutApi &
      StandardApi<'purchase.checkout.shipping-option-item.details.render'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered under the shipping method
   * within the shipping method option list, for each option.
   *
   * @deprecated Use `purchase.checkout.shipping-option-item.details.render` instead.
   */
  'Checkout::ShippingMethodDetails::RenderExpanded': RenderExtension<
    ShippingOptionItemApi &
      CheckoutApi &
      StandardApi<'Checkout::ShippingMethodDetails::RenderExpanded'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered immediately before the pickup points.
   */
  'purchase.checkout.pickup-point-list.render-before': RenderExtension<
    PickupPointListApi &
      CheckoutApi &
      StandardApi<'purchase.checkout.pickup-point-list.render-before'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered immediately before the pickup points.
   *
   * @deprecated Use `purchase.checkout.pickup-point-list.render-before` instead.
   */
  'Checkout::PickupPoints::RenderBefore': RenderExtension<
    PickupPointListApi &
      CheckoutApi &
      StandardApi<'Checkout::PickupPoints::RenderBefore'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered immediately after the pickup points.
   */
  'purchase.checkout.pickup-point-list.render-after': RenderExtension<
    PickupPointListApi &
      CheckoutApi &
      StandardApi<'purchase.checkout.pickup-point-list.render-after'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered immediately after the pickup points.
   *
   * @deprecated Use `purchase.checkout.pickup-point-list.render-after` instead.
   */
  'Checkout::PickupPoints::RenderAfter': RenderExtension<
    PickupPointListApi &
      CheckoutApi &
      StandardApi<'Checkout::PickupPoints::RenderAfter'>,
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
 * accepting a [`@remote-ui/core` `RemoteRoot`](https://github.com/Shopify/remote-ui/tree/main/packages/core)
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

/**
 * The part of the standard API implemented for customer-account targets. Must
 * match the types defined in the `surfaces/customer-account` section of this package.
 */
export type CustomerAccountStandardApi<Target extends keyof ExtensionTargets> =
  Pick<
    StandardApi<Target>,
    | 'analytics'
    | 'appliedGiftCards'
    | 'appMetafields'
    | 'attributes'
    | 'buyerIdentity'
    | 'checkoutSettings'
    | 'cost'
    | 'discountCodes'
    | 'discountAllocations'
    | 'extension'
    | 'extensionPoint'
    | 'i18n'
    | 'lines'
    | 'localization'
    | 'metafields'
    | 'note'
    | 'query'
    | 'sessionToken'
    | 'settings'
    | 'shippingAddress'
    | 'shop'
    | 'storage'
    | 'ui'
    | 'version'
  >;
