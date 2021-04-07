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
  'Checkout::PostPurchase::Render': RenderExtension<
    PostPurchaseRenderApi,
    AllComponents
  >;
  'Checkout::PostPurchase::ShouldRender': (
    api: PostPurchaseShouldRenderApi,
  ) => PostPurchaseShouldRenderResult;
}

export type ExtensionPoint = keyof ExtensionPoints;
