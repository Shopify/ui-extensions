import {useExtensionApi} from '../api';

import {mount} from './mount';

describe('useExtensionApi', () => {
  it('returns api', async () => {
    const extensionApi = {
      extensionPoint: 'Checkout::Feature::Render' as const,
    };
    const {value} = mount.hook(
      () => useExtensionApi<'Checkout::Feature::Render'>(),
      {extensionApi},
    );

    expect(value).toMatchObject(extensionApi);
  });

  it('throws when not run inside a UI extension', async () => {
    const runner = async () => {
      return mount.hook(() => useExtensionApi());
    };
    await expect(runner).rejects.toThrow(
      'You can only call this hook when running as a UI extension.',
    );
  });
});
