import type {CurrencyCode} from '../../../../shared';

import {useCurrency} from '../currency';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('useCurrency', () => {
  afterEach(tearDownGlobalShopifyMock);

  it('returns currency from the api', () => {
    const currency: {isoCode: CurrencyCode} = {isoCode: 'CAD'};

    setupGlobalShopifyMock({
      localization: {
        currency: createMockSubscribableSignalLike(currency),
      },
    });

    const {value} = mount.hook(() => useCurrency());

    expect(value).toStrictEqual(currency);
  });
});
