import type {RenderExtension} from '../../extension';

import type {CheckoutEditorRenderSettingsApi} from './api';
import type {AnyComponent} from './shared';

export interface ExtensionPoints {
  'Admin::CheckoutEditor::RenderSettings': RenderExtension<
    CheckoutEditorRenderSettingsApi,
    AnyComponent
  >;
}

export type ExtensionPoint = keyof ExtensionPoints;

export type ExtensionForExtensionPoint<
  T extends ExtensionPoint
> = ExtensionPoints[T];
