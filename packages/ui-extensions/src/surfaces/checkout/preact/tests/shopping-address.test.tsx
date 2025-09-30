import {useShippingAddress} from '../shipping-address';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  mount,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('useShippingAddress', () => {
  afterEach(tearDownGlobalShopifyMock);

  it('raises an exception without approval scopes granted', () => {
    setupGlobalShopifyMock({
      shippingAddress: undefined,
    });

    expect(() => mount.hook(() => useShippingAddress())).toThrow(
      'Using shipping address requires having shipping address permissions granted to your app.',
    );
  });
});
