import {RenderExtension} from './render-extension';
import type {
  StandardApi,
  PostPurchaseShouldRenderApi,
  PostPurchaseShouldRenderResult,
  PostPurchaseRenderApi,
} from './api';

type Components = typeof import('../components');

type AllComponents = Components[keyof Components];

/** Post-purchase checkout extensions allow developers and Plus merchants to add a post-purchase page directly into the Shopify checkout.
 * The page appears after the order is confirmed, but before the thank you page.
 * Post-purchase checkout extensions can use the `ShouldRender` and `Render` extension points.
 * For more information, refer to the [post-purchase checkout extensions overview](/apps/checkout/post-purchase).
 */
export interface ExtensionPoints {
  'Checkout::KitchenSink': RenderExtension<
    StandardApi<'Checkout::KitchenSink'>,
    AllComponents
  >;
  /** The `Render` extension point is used to render the section in the post-purchase page.
  Also, it provides additional functionality, such as communicating with Shopify to add items to the initial purchase. */
  'Checkout::PostPurchase::Render': RenderExtension<
    PostPurchaseRenderApi,
    AllComponents
  >;
  /** The `ShouldRender` extension point is used to determine whether a post-purchase page should be shown to the customer.
  It also allows data to be pre-cached and used when the page renders. */
  'Checkout::PostPurchase::ShouldRender': (
    api: PostPurchaseShouldRenderApi,
  ) => PostPurchaseShouldRenderResult;
}

export type ExtensionPoint = keyof ExtensionPoints;
