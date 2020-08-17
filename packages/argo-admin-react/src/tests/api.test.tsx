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
  render: jest.fn(),
}));

const coreRender = require.requireMock('@shopify/argo-admin').render;
const reactCreateElement = require.requireMock('react').createElement;

describe('render()', () => {
  it('calls shopify argo renderer', () => {
    render(ExtensionPoint.Playground, () => <div />);

    expect(coreRender).toHaveBeenCalledWith(ExtensionPoint.Playground, expect.any(Function));
    coreRender.mockReset();
  });

  it('calls remote render with generated element', () => {
    reactCreateElement.mockReset();

    const element = <div />;
    render(ExtensionPoint.Playground, () => element);
    const root = {};
    const api = {locale: 'en'};

    const createdElement = <p />;

    reactCreateElement.mockImplementation(() => createdElement);

    const coreRenderCallback = coreRender.mock.calls[0][1];
    coreRenderCallback(root, api);

    expect(reactCreateElement).toHaveBeenCalledWith(
      ExtensionApiContext.Provider,
      {value: api},
      element,
    );
    expect(remoteRender).toHaveBeenCalledWith(createdElement, root);
  });
});
