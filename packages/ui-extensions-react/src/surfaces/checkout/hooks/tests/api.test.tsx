import {useApi} from '../api';

import {mount} from './mount';

describe('useApi', () => {
  it('returns api', async () => {
    const extensionApi = {
      extensionPoint: 'Checkout::Dynamic::Render' as const,
    };
    const {value} = mount.hook(() => useApi<'Checkout::Dynamic::Render'>(), {
      extensionApi,
    });

    expect(value).toMatchObject(extensionApi);
  });

  it('throws when not run inside a UI extension', async () => {
    const runner = async () => {
      return mount.hook(() => useApi());
    };
    await expect(runner).rejects.toThrow(
      'You can only call this hook when running as a UI extension.',
    );
  });
});
