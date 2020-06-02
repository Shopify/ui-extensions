import {RenderExtension} from './render-extension';
import type {StandardApi, PostPurchaseApi} from './input';

type Components = typeof import('../components');
type AllComponents = Components[keyof Components];

export interface ExtensionPoints {
  'Checkout::KitchenSink': RenderExtension<StandardApi, AllComponents>;
  'Checkout::PostPurchase::Render': RenderExtension<
    PostPurchaseApi,
    AllComponents
  >;
  'Checkout::PostPurchase::Inquiry': () => boolean;
}

export type ExtensionPoint = keyof ExtensionPoints;
