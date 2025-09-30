import {useTimezone} from '../timezone';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('useTimezone', () => {
  afterEach(tearDownGlobalShopifyMock);

  it('returns timezone from the api', () => {
    const timezone = 'America/New_York';

    setupGlobalShopifyMock({
      localization: {
        timezone: createMockSubscribableSignalLike(timezone),
      },
    });

    const {value} = mount.hook(() => useTimezone());

    expect(value).toStrictEqual(timezone);
  });
});
