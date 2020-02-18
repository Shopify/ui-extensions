import React from 'react';
import {mount} from '@shopify/react-testing';
import {createWorkerFactory} from '@shopify/web-worker';
import {RemoteRenderer} from '@shopify/remote-ui-react/host';
import '@shopify/react-testing/matchers';

import {AppExtension, RenderRoot} from '..';

jest.mock('@shopify/remote-ui-react/host', () => ({
  ...require.requireActual('@shopify/remote-ui-react/host'),
  RemoteRenderer: function RemoteRenderer() {
    return null;
  },
}));

jest.mock('@shopify/web-worker', () => ({
  ...require.requireActual('@shopify/web-worker'),
  createWorkerFactory: function createWorkerFactory() {
    return () => null;
  },
}));

jest.mock('../hooks', () => ({
  ...require.requireActual('../hooks'),
  useExtensionSandbox: function useExtensionSandbox() {
    return {
      id: 'mock',
      render: () => null,
    };
  },
}));

describe('AppExtension', () => {
  const defaultProps = {
    root: RenderRoot.Default,
    createWorker: createWorkerFactory(() => 'worker'),
    components: [],
  };

  it('renders nothing if extension is empty', () => {
    const wrapper = mount(<AppExtension {...defaultProps} extension={undefined} />);
    expect(wrapper).toContainReactHtml('');
  });

  it('renders RemoteRenderer if extension is provided', () => {
    const wrapper = mount(<AppExtension {...defaultProps} extension="extension" />);
    expect(wrapper).toContainReactComponent(RemoteRenderer);
  });

  it('passes components to RemoteRenderer', () => {
    const MockComponent = () => <>Mock</>;
    const components = {MockComponent};
    const wrapper = mount(
      <AppExtension {...defaultProps} extension="extension" components={components} />,
    );
    expect(wrapper).toContainReactComponent(RemoteRenderer, {
      components,
    });
  });
});
