import {useApi} from '../api';

import {
  mount,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('useApi', () => {
  beforeEach(() => {
    setupGlobalShopifyMock({});
  });

  afterEach(tearDownGlobalShopifyMock);

  it('returns api', async () => {
    const {value} = mount.hook(() =>
      useApi<'purchase.checkout.block.render'>(),
    );

    expect(value).toMatchObject({
      extension: {target: 'purchase.checkout.block.render'},
    });
  });

  it('throws when not run inside a checkout UI extension', async () => {
    tearDownGlobalShopifyMock();

    const runner = async () => {
      return mount.hook(() => useApi());
    };

    await expect(runner).rejects.toThrow(
      expect.objectContaining({
        name: 'CheckoutUIExtensionError',
      }),
    );
  });
});
