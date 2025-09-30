import {usePurchasingCompany} from '../buyer-identity';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('usePurchasingCompany', () => {
  afterEach(tearDownGlobalShopifyMock);

  it('returns purchasing company from the api', () => {
    const purchasingCompany = {
      company: {
        id: 'gid://shopify/Company/2',
        name: 'Company',
        externalId: 'company-external-id',
      },
      location: {
        id: 'gid://shopify/CompanyLocation/2',
        name: 'CompanyLocation',
        externalId: 'company-location-external-id',
      },
    };

    setupGlobalShopifyMock({
      buyerIdentity: {
        purchasingCompany: createMockSubscribableSignalLike(purchasingCompany),
      },
    });

    const {value} = mount.hook(() => usePurchasingCompany());

    expect(value).toStrictEqual(purchasingCompany);
  });
});
