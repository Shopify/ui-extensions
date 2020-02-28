import React from 'react';
import {extend, render, RenderCallback} from '../api';
import {render as remoteRender} from '@shopify/remote-ui-react';
import {ExtensionPoint} from '../extension-points';

jest.mock('@shopify/remote-ui-react', () => ({
  ...require.requireActual('@shopify/remote-ui-react'),
  render: jest.fn(),
}));

describe('api', () => {
  describe('extend', () => {
    it('delegates to shopify global extend function', () => {
      const extendSpy = jest.fn();
      (global as any).shopify = {extend: extendSpy};

      const extensionPoint = ExtensionPoint.AppLink;
      const callback = () => undefined;

      extend(extensionPoint, callback);
      expect(extendSpy).toBeCalledWith(extensionPoint, callback);
    });
  });

  describe('render', () => {
    it('calls remote-ui render as part of the extend callback', () => {
      const extensionPoint = ExtensionPoint.AppLink;
      const shopifyGlobalExtend = (_, callback) => callback();
      (global as any).shopify = {extend: shopifyGlobalExtend};

      const App = () => null;
      const renderCallback: RenderCallback<ExtensionPoint.AppLink> = () => <App />;

      render(extensionPoint, renderCallback);
      expect(remoteRender).toBeCalled();
    });
  });
});
