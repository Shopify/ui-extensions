import { render as remoteRender } from '@remote-ui/react';
import { createElement } from 'react';
import { extend } from '@shopify/admin-ui-extensions';
import { ExtensionApiContext } from './extension-api/utils';
export { extend };
export function render(renderCallback) {
  return function (root, api) {
    var element = renderCallback(api);
    remoteRender( /*#__PURE__*/createElement(ExtensionApiContext.Provider, {
      value: api
    }, element), root, function () {
      root.mount();
    });
  };
}