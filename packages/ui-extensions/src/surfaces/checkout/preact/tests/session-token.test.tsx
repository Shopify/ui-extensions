import {useSessionToken} from '../session-token';

import {
  mount,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('useSessionToken', () => {
  afterEach(tearDownGlobalShopifyMock);

  it('returns sessionToken from the api', () => {
    const mockGetSessionToken = {
      get: jest.fn(),
    };

    setupGlobalShopifyMock({
      sessionToken: mockGetSessionToken as any,
    });

    const {value} = mount.hook(() => useSessionToken());

    expect(value).toMatchObject(mockGetSessionToken);
  });
});
