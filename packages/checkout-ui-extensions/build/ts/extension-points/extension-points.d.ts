import { RenderExtension } from './render-extension';
import type { LineItemRenderAfterApi, StandardApi } from './api';
declare type Components = typeof import('../components');
declare type AllComponents = Components[keyof Components];
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
    'Checkout::Feature::Render': RenderExtension<StandardApi<'Checkout::Feature::Render'>, AllComponents>;
    'Checkout::KitchenSink': RenderExtension<StandardApi<'Checkout::KitchenSink'>, AllComponents>;
    'Checkout::LineItem::RenderAfter': RenderExtension<LineItemRenderAfterApi, AllComponents>;
    'Checkout::ShippingMethod::RenderAfter': RenderExtension<StandardApi<'Checkout::ShippingMethod::RenderAfter'>, AllComponents>;
    'Checkout::PaymentMethods::Header::RenderAfter': RenderExtension<StandardApi<'Checkout::PaymentMethods::Header::RenderAfter'>, AllComponents>;
    'Checkout::PriceLines::RenderAfter': RenderExtension<StandardApi<'Checkout::PriceLines::RenderAfter'>, AllComponents>;
    'Checkout::Actions::RenderAfter': RenderExtension<StandardApi<'Checkout::Actions::RenderAfter'>, AllComponents>;
}
export declare type ExtensionPoint = keyof ExtensionPoints;
export {};
//# sourceMappingURL=extension-points.d.ts.map