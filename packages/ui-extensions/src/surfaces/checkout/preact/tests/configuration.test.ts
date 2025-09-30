import {useSettings} from '../settings';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('useSettings', () => {
  afterEach(tearDownGlobalShopifyMock);

  it('returns settings from the api', () => {
    const settings = {title: 'checkout ui'};

    setupGlobalShopifyMock({
      settings: createMockSubscribableSignalLike(settings),
    });

    const {value} = mount.hook(() => useSettings());

    expect(value).toStrictEqual(settings);
  });
});
