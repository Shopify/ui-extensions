import type {RenderExtension} from '../../extension';

import type {AnyComponent} from './shared';
import type {StandardApi, CartLineDetailsRenderAfterApi} from './api';

export interface ExtensionPoints {
  'Checkout::Dynamic::Render': RenderExtension<
    StandardApi<'Checkout::Dynamic::Render'>,
    AnyComponent
  >;
  'Checkout::CartLineDetails::RenderAfter': RenderExtension<
    CartLineDetailsRenderAfterApi,
    AnyComponent
  >;
}

export type ExtensionPoint = keyof ExtensionPoints;

export type ExtensionForExtensionPoint<
  T extends ExtensionPoint
> = ExtensionPoints[T];
