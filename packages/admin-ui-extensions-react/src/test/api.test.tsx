import {RemoteRoot} from '@remote-ui/react';

import {render, extend} from '../api';
import {ExtensionApiContext} from '../extension-api/utils';

jest.mock('@remote-ui/react', () => ({
  ...(jest.requireActual('@remote-ui/react') as any),
  render: jest.fn(),
}));

jest.mock('react', () => ({
  ...(jest.requireActual('react') as any),
  createElement: jest.fn(),
}));

jest.mock('@shopify/admin-ui-extensions', () => ({
  ...(jest.requireActual('@shopify/admin-ui-extensions') as any),
  extend: jest.fn(),
}));

const reactCreateElement = jest.requireMock('react').createElement;
const remoteRender = jest.requireMock('@remote-ui/react').render;
const adminUIExtensions = jest.requireMock('@shopify/admin-ui-extensions');

describe('api', () => {
  it('render calls remote render with generated element', () => {
    const element = <div />;

    const root = ({mount: jest.fn()} as unknown) as RemoteRoot;
    const api = {locale: 'en'} as any;

    const createdElement = <p />;

    reactCreateElement.mockImplementation(() => createdElement);

    render(() => element)(root, api);

    expect(reactCreateElement).toHaveBeenCalledWith(
      ExtensionApiContext.Provider,
      {value: api},
      element,
    );

    expect(remoteRender).toHaveBeenCalledWith(
      createdElement,
      root,
      expect.any(Function),
    );

    const renderCallback = remoteRender.mock.calls[0][2];
    renderCallback();

    expect(root.mount).toHaveBeenCalled();
  });

  it('extend calls extend from admin-ui-extensions', () => {
    const callback = () => {};
    jest.spyOn(adminUIExtensions, 'extend');

    extend('Playground', callback);

    expect(adminUIExtensions.extend).toHaveBeenCalledWith(
      'Playground',
      callback,
    );
  });
});
