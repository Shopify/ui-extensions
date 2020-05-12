import {createContext} from 'react';

import {
  InputForRenderExtension,
  RenderExtensionPoints,
} from '../../extension-points';

export const ExtensionInputContext = createContext<InputForRenderExtension<
  RenderExtensionPoints
> | null>(null);
