import {useLocalizationMarket} from '../market';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('useLocalizationMarket', () => {
  afterEach(tearDownGlobalShopifyMock);

  it('returns market from the api', () => {
    const market = {id: 'gid://shopify/Market/123', handle: 'apac'};

    setupGlobalShopifyMock({
      localization: {
        market: createMockSubscribableSignalLike(market),
      },
    });

    const {value} = mount.hook(() => useLocalizationMarket());

    expect(value).toStrictEqual(market);
  });
});
