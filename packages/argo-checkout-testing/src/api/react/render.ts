import {createElement, ReactElement} from 'react';
import {render as remoteRender} from '@remote-ui/react';

import {
  RenderExtensionPoints,
  InputForRenderExtension,
} from '../../extension-points';

import {extend} from '../extend';
import {ExtensionInputContext} from './context';

export function renderReact<ExtensionPoint extends RenderExtensionPoints>(
  extensionPoint: ExtensionPoint,
  render: (input: InputForRenderExtension<ExtensionPoint>) => ReactElement<any>,
) {
  return extend(extensionPoint, (root, input) => {
    remoteRender(
      createElement(
        ExtensionInputContext.Provider,
        {value: input},
        render(input as InputForRenderExtension<ExtensionPoint>),
      ),
      root,
    );

    return {};
  });
}
