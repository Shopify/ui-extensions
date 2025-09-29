import type {CountryCode} from '../../../../shared';

import {useLocalizationCountry} from '../country';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('useLocalizationCountry', () => {
  afterEach(tearDownGlobalShopifyMock);

  it('returns country from the api', () => {
    const country: {isoCode: CountryCode} = {isoCode: 'CA'};

    setupGlobalShopifyMock({
      localization: {
        country: createMockSubscribableSignalLike(country),
      },
    });

    const {value} = mount.hook(() => useLocalizationCountry());

    expect(value).toStrictEqual(country);
  });
});
