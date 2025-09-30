import {useExtensionLanguage} from '../extension-language';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('useExtensionLanguage', () => {
  afterEach(tearDownGlobalShopifyMock);

  it('returns extension language from api', () => {
    const extensionLanguage = {isoCode: 'en-CA'};

    setupGlobalShopifyMock({
      localization: {
        extensionLanguage: createMockSubscribableSignalLike(extensionLanguage),
      },
    });

    const {value} = mount.hook(() => useExtensionLanguage());

    expect(value).toStrictEqual(extensionLanguage);
  });
});
