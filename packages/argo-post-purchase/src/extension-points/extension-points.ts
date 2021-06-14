import {RenderExtension} from './render-extension';
import type {
  StandardApi,
  PostPurchaseShouldRenderApi,
  PostPurchaseShouldRenderResult,
  PostPurchaseRenderApi,
} from './api';

type Components = typeof import('../components');

type AllComponents = Components[keyof Components];

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
