import {RenderExtension} from './render-extension';

type Components = typeof import('../components');
type AllComponents = Components[keyof Components];

export type Version = 'unstable';

export interface StandardApi {
  version: Version;
}

// Separator
// Image

export interface ExtensionPoints {
  'Checkout::KitchenSink': RenderExtension<StandardApi, AllComponents>;
  'Checkout::PostPurchaseCrossSell::Render': RenderExtension<
    StandardApi,
    AllComponents
  >;
  'Checkout::PostPurchaseCrossSell::Inquiry': () => boolean;
}
