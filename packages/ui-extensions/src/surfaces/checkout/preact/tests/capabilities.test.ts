import type {Extension} from '../../api/standard/standard';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  useExtensionCapabilities,
  useExtensionCapability,
} from '../capabilities';

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('useExtensionCapabilities', () => {
  afterEach(tearDownGlobalShopifyMock);

  it('returns a list of granted capabilities of the extension', () => {
    const capabilities = ['network_access', 'block_progress'];

    const capabilitiesSubscribable = createMockSubscribableSignalLike(
      capabilities,
    ) as Extension['capabilities'];

    setupGlobalShopifyMock({
      extension: {
        capabilities: capabilitiesSubscribable,
      },
    });

    const {value} = mount.hook(useExtensionCapabilities);

    expect(value).toStrictEqual(capabilities);
  });
});

describe('useExtensionCapability', () => {
  afterEach(tearDownGlobalShopifyMock);

  it('returns the status of a capabilities', () => {
    const capabilities = createMockSubscribableSignalLike([
      'network_access',
    ]) as Extension['capabilities'];

    setupGlobalShopifyMock({
      extension: {
        capabilities,
      },
    });

    const {value: activatedCapability} = mount.hook(() =>
      useExtensionCapability('network_access'),
    );

    const {value: deactivatedCapability} = mount.hook(() =>
      useExtensionCapability('block_progress'),
    );

    expect(activatedCapability).toBe(true);
    expect(deactivatedCapability).toBe(false);
  });
});
