import React from 'react';

import {Toast as PolarisToast} from '@shopify/polaris';
import {ToastApi} from '@shopify/argo-admin';
import {useToastApi} from '../useToastApi';
import {mountWithAppProvider as mount} from '../../../../../test-utils/mount';

jest.mock('@shopify/polaris', () => ({
  ...require.requireActual('@shopify/polaris'),
  Toast: function Toast() {
    return null;
  },
}));

describe('useToastApi', () => {
  function MockComponent({children}) {
    const [Toast, toastApi] = useToastApi();

    children(toastApi);
    return <Toast />;
  }

  it('starts by not showing toast', async () => {
    const container = await mount(<MockComponent>{() => {}}</MockComponent>);

    expect(container).not.toContainReactComponent(PolarisToast);
  });

  it('shows and hides toast', async () => {
    let toastApi: ToastApi;
    const container = await mount(<MockComponent>{(api) => (toastApi = api)}</MockComponent>);

    container.act(() => {
      toastApi.toast.show('Test');
    });

    expect(container).toContainReactComponent(PolarisToast, {content: 'Test'});

    container.find(PolarisToast)!.trigger('onDismiss');

    expect(container).not.toContainReactComponent(PolarisToast, {content: 'Test'});
  });

  it('shows error toast', async () => {
    let toastApi: ToastApi;
    const container = await mount(<MockComponent>{(api) => (toastApi = api)}</MockComponent>);

    container.act(() => {
      toastApi.toast.show('Error', {error: true});
    });

    expect(container).toContainReactComponent(PolarisToast, {content: 'Error', error: true});
  });
});
