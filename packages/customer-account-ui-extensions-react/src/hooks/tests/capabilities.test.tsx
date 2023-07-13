import {
  useExtensionCapabilities,
  useExtensionCapability,
} from '../capabilities';

import {mount, createMockStatefulRemoteSubscribable} from './mount';
import {Capability} from '@shopify/customer-account-ui-extensions';

describe('useExtensionCapabilities', () => {
  it('returns a list of granted capabilities of the extension', () => {
    const capabilities: Capability[] = ['network_access'];

    const capabilitiesSubscribable =
      createMockStatefulRemoteSubscribable(capabilities);

    const {value} = mount.hook(useExtensionCapabilities, {
      extensionApi: {
        extension: {
          capabilities: capabilitiesSubscribable,
        },
      },
    });

    expect(value).toStrictEqual(capabilities);
  });
});

describe('useExtensionCapability', () => {
  it('returns the status of a capabilities', () => {
    const capabilities = createMockStatefulRemoteSubscribable([
      'network_access',
    ] as Capability[]);

    const {value: activatedCapability} = mount.hook(
      () => useExtensionCapability('network_access'),
      {
        extensionApi: {
          extension: {
            capabilities,
          },
        },
      },
    );

    const {value: deactivatedCapability} = mount.hook(
      // @ts-expect-error Unsupported capability
      () => useExtensionCapability('unsupported_capability'),
      {
        extensionApi: {
          extension: {
            capabilities,
          },
        },
      },
    );

    expect(activatedCapability).toBe(true);
    expect(deactivatedCapability).toBe(false);
  });
});
