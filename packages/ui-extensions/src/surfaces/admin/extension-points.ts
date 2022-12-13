import type {RenderExtension} from '../../extension';

import type {CheckoutEditorRenderSettingsApi, StandardApi} from './api';
import type {AnyComponent} from './shared';

export interface ExtensionPoints {
  'Admin::CheckoutEditor::RenderSettings': RenderExtension<
    CheckoutEditorRenderSettingsApi,
    AnyComponent
  >;
  'Admin::ProductDetails::RenderBundleCard': RenderExtension<
    StandardApi<'Admin::ProductDetails::RenderBundleCard'>,
    AnyComponent
  >;
}

export type ExtensionPoint = keyof ExtensionPoints;

export type ExtensionForExtensionPoint<
  T extends ExtensionPoint
> = ExtensionPoints[T];
