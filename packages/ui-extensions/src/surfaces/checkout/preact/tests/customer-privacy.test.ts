import type {CustomerPrivacy} from '../../api/standard/standard';

import {useCustomerPrivacy} from '../customer-privacy';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('useCustomerPrivacy', () => {
  afterEach(tearDownGlobalShopifyMock);

  it('returns customer privacy settings and data from the API', () => {
    const customerPrivacyValue: CustomerPrivacy = {
      allowedProcessing: {
        marketing: true,
        analytics: true,
        preferences: false,
        saleOfData: false,
      },
      metafields: [{key: 'test-key', value: 'test-value'}],
      saleOfDataRegion: true,
      shouldShowBanner: true,
      region: {
        countryCode: 'CA',
        provinceCode: 'ON',
      },
      visitorConsent: {
        marketing: true,
        analytics: true,
      },
    };

    setupGlobalShopifyMock({
      customerPrivacy: createMockSubscribableSignalLike(customerPrivacyValue),
    });

    const {value} = mount.hook(() => useCustomerPrivacy());

    expect(value).toMatchObject(customerPrivacyValue);
  });
});
