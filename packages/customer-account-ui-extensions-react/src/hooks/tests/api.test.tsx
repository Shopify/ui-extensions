import type {
  StandardApi,
  FullPageApi,
} from '@shopify/customer-account-ui-extensions';
import {useApi} from '../api';

import {mount} from './mount';

describe('useApi', () => {
  it('returns api', async () => {
    const extensionApi = {} as StandardApi & FullPageApi;

    const {value} = mount.hook(
      () => useApi<'CustomerAccount::FullPage::RenderWithin'>(),
      {extensionApi},
    );

    expect(value).toMatchObject(extensionApi);
  });

  it('throws when not run inside a UI extension', async () => {
    const runner = async () => {
      return mount.hook(() => useApi());
    };
    await expect(runner).rejects.toThrow(
      'You can only call this hook when running as a UI extension.',
    );
  });
});
