import {createElement, ReactElement} from 'react';
import {render as coreRender, ExtensionPoint, ExtensionInput} from '@shopify/argo';
import {render as remoteRender} from '@shopify/remote-ui-react';

import {ExtensionInputContext} from './extension-input/utils';

export type RenderCallback<T extends ExtensionPoint> = (input: ExtensionInput[T]) => ReactElement;

export function render<T extends ExtensionPoint>(
  extensionPoint: T,
  renderCallback: RenderCallback<T>,
) {
  return coreRender(extensionPoint, (root, input) => {
    const element = renderCallback(input as ExtensionInput[T]);
    remoteRender(createElement(ExtensionInputContext.Provider, {value: input}, element), root);
  });
}
