import {createElement, ReactElement} from 'react';
import {
  CallbackTypeForExtensionPoint,
  render as coreRender,
  ExtensionPoint,
  ExtractedInputFromRenderExtension,
} from '@shopify/argo';
import {render as remoteRender} from '@shopify/remote-ui-react';

import {ExtensionInputContext} from './extension-input/utils';

export type RenderCallback<T extends ExtensionPoint> = (
  input: ExtractedInputFromRenderExtension<CallbackTypeForExtensionPoint<T>>,
) => ReactElement;

export function render<T extends ExtensionPoint>(
  extensionPoint: T,
  renderCallback: RenderCallback<T>,
) {
  return coreRender(extensionPoint, (root, input) => {
    const element = renderCallback(
      input as ExtractedInputFromRenderExtension<CallbackTypeForExtensionPoint<T>>,
    );
    remoteRender(createElement(ExtensionInputContext.Provider, {value: input}, element), root);
  });
}
