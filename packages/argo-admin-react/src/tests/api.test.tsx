import React from 'react';
import {ExtensionPoint} from '@shopify/argo-admin';
import {render as remoteRender} from '@remote-ui/react';

import {render} from '../api';
import {ExtensionApiContext} from '../extension-api/utils';

jest.mock('@remote-ui/react', () => ({
  ...require.requireActual('@remote-ui/react'),
  render: jest.fn(),
}));

jest.mock('react', () => ({
  ...require.requireActual('react'),
  createElement: jest.fn(),
}));

jest.mock('@shopify/argo-admin', () => ({
  ...require.requireActual('@shopify/argo-admin'),
  extend: jest.fn(),
}));

const extend = require.requireMock('@shopify/argo-admin').extend;
const reactCreateElement = require.requireMock('react').createElement;

describe('extend()', () => {
  it('calls remote render with generated element', () => {
    reactCreateElement.mockReset();

    const element = <div />;
    extend(
      ExtensionPoint.Playground,
      render(() => element),
    );
    const root = {};
    const api = {locale: 'en'};

    const createdElement = <p />;

    reactCreateElement.mockImplementation(() => createdElement);

    const extendCallback = extend.mock.calls[0][1];
    extendCallback(root, api);

    expect(reactCreateElement).toHaveBeenCalledWith(
      ExtensionApiContext.Provider,
      {value: api},
      element,
    );
    expect(remoteRender).toHaveBeenCalledWith(createdElement, root);
  });
});
