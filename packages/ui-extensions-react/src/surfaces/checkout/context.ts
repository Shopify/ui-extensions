import {createContext} from 'react';
import type {
  ApiForRenderExtension,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

export const ExtensionApiContext =
  createContext<ApiForRenderExtension<RenderExtensionTarget> | null>(null);
