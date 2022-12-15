import {createContext} from 'react';
import type {
  ApiForRenderExtension,
  RenderExtensionPoint,
} from '@shopify/ui-extensions/checkout';

export const ExtensionApiContext =
  createContext<ApiForRenderExtension<RenderExtensionPoint> | null>(null);
