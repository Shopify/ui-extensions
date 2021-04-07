import {RenderExtension} from './render-extension';
import type {StandardApi} from './api';

type Components = typeof import('../components');

type AllComponents = Components[keyof Components];

export interface ExtensionPoints {
  'Checkout::Feature::Render': RenderExtension<
    StandardApi<'Checkout::Feature::Render'>,
    AllComponents
  >;
  'Checkout::KitchenSink': RenderExtension<
    StandardApi<'Checkout::KitchenSink'>,
    AllComponents
  >;
}

export type ExtensionPoint = keyof ExtensionPoints;
