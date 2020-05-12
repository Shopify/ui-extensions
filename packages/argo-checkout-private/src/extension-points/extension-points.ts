import {RenderExtension} from './render-extension';

type Components = typeof import('../components');
type AllComponents = Components[keyof Components];

export interface StandardApi {
  readonly version: string;
}

export interface ExtensionPoints {
  Checkout: RenderExtension<StandardApi, AllComponents>;
}
