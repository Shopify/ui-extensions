import {RenderExtension} from './render-extension';
import type {StandardApi, PostPurchaseCrossSellApi} from './input';

type Components = typeof import('../components');
type AllComponents = Components[keyof Components];

export interface ExtensionPoints {
  'Checkout::KitchenSink': RenderExtension<StandardApi, AllComponents>;
  'Checkout::PostPurchaseCrossSell::Render': RenderExtension<
    PostPurchaseCrossSellApi,
    AllComponents
  >;
  'Checkout::PostPurchaseCrossSell::Inquiry': () => boolean;
}

export type ExtensionPoint = keyof ExtensionPoints;
