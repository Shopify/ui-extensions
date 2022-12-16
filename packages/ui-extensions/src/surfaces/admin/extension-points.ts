import type {RenderExtension} from '../../extension';

import type {
  CheckoutEditorRenderSettingsApi,
  ProductDetailsComponentsApi,
  ProductVariantDetailsComponentsApi,
} from './api';
import type {AnyComponent} from './shared';

export interface ExtensionPoints {
  'Admin::CheckoutEditor::RenderSettings': RenderExtension<
    CheckoutEditorRenderSettingsApi,
    AnyComponent
  >;
  'Admin::ProductDetails::RenderComponents': RenderExtension<
    ProductDetailsComponentsApi,
    AnyComponent
  >;
  'Admin::ProductVariantDetails::RenderComponents': RenderExtension<
    ProductVariantDetailsComponentsApi,
    AnyComponent
  >;
}

export type ExtensionPoint = keyof ExtensionPoints;

export type ExtensionForExtensionPoint<T extends ExtensionPoint> =
  ExtensionPoints[T];
