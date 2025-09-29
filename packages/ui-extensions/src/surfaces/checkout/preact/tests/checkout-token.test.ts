import {useCheckoutToken} from '../checkout-token';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('useCheckoutToken', () => {
  afterEach(tearDownGlobalShopifyMock);

  it('returns checkoutToken from the api', () => {
    const checkoutToken = 'checkout-token';

    setupGlobalShopifyMock({
      checkoutToken: createMockSubscribableSignalLike(checkoutToken),
    });

    const {value} = mount.hook(() => useCheckoutToken());

    expect(value).toBe(checkoutToken);
  });
});
