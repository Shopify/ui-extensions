import {RenderExtension} from './render-extension';
import type {LineItemRenderAfterApi, StandardApi} from './api';

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
   * This extension point is used to render completely
   * new content added to the flow of checkout. This extension point is not attached
   * to any other element in checkout. Instead, a merchant can select the step and position
   * of your extension when configuring the overall flow of their checkout.
   */
  'Checkout::Dynamic::Render': RenderExtension<
    StandardApi<'Checkout::Dynamic::Render'>,
    AllComponents
  >;
  'Checkout::KitchenSink': RenderExtension<
    StandardApi<'Checkout::KitchenSink'>,
    AllComponents
  >;
  /**
   * This static extension point renders on every line item, inside the details,
   * under the line item properties element.
   */
  'Checkout::LineItemDetails::RenderAfter': RenderExtension<
    LineItemRenderAfterApi,
    AllComponents
  >;
  /**
   * This is a static extension point rendered after all line items.
   */
  'Checkout::LineItems::RenderAfter': RenderExtension<
    StandardApi<'Checkout::LineItems::RenderAfter'>,
    AllComponents
  >;
  /**
   * This is a static extension point rendered between the shipping address header
   * and shipping address form elements.
   */
  'Checkout::DeliveryAddress::RenderBefore': RenderExtension<
    StandardApi<'Checkout::DeliveryAddress::RenderBefore'>,
    AllComponents
  >;
  /**
   * This is a static extension point that is rendered between the shipping method
   * header and shipping method options.
   */
  'Checkout::ShippingMethods::RenderBefore': RenderExtension<
    StandardApi<'Checkout::ShippingMethods::RenderBefore'>,
    AllComponents
  >;
  'Checkout::ShippingMethods::RenderAfter': RenderExtension<
    StandardApi<'Checkout::ShippingMethods::RenderAfter'>,
    AllComponents
  >;
  'Checkout::PaymentMethods::Header::RenderAfter': RenderExtension<
    StandardApi<'Checkout::PaymentMethods::Header::RenderAfter'>,
    AllComponents
  >;
  'Checkout::PriceLines::RenderAfter': RenderExtension<
    StandardApi<'Checkout::PriceLines::RenderAfter'>,
    AllComponents
  >;
  /**
   * This is a static extension point rendered in the order summary, before the discount form.
   */
  'Checkout::Reductions::RenderBefore': RenderExtension<
    StandardApi<'Checkout::Reductions::RenderBefore'>,
    AllComponents
  >;
  /**
   * This is a static extension point rendered in the order summary, after the discount form
   * and discount tag elements.
   */
  'Checkout::Reductions::RenderAfter': RenderExtension<
    StandardApi<'Checkout::Reductions::RenderAfter'>,
    AllComponents
  >;
  /**
   * This is a static extension point that is rendered immediately before any actions within each step.
   */
  'Checkout::Actions::RenderBefore': RenderExtension<
    StandardApi<'Checkout::Actions::RenderBefore'>,
    AllComponents
  >;
  /**
   * This is a static extension point that is rendered immediately after any actions within each step.
   */
  'Checkout::Actions::RenderAfter': RenderExtension<
    StandardApi<'Checkout::Actions::RenderAfter'>,
    AllComponents
  >;
  /**
   * This is a static extension point that is rendered immediately after the Contact Form block.
   */
  'Checkout::Contact::RenderAfter': RenderExtension<
    StandardApi<'Checkout::Contact::RenderAfter'>,
    AllComponents
  >;
}

export type ExtensionPoint = keyof ExtensionPoints;
