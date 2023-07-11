import {useApplyRedeemableChange} from '../redeemable';
import {ExtensionHasNoMethodError} from '../../errors';

import {mount} from './mount';

describe('Redeemable API hooks', () => {
  describe('useApplyRedeemableChange()', () => {
    it('returns the applyRedeemableChange function', async () => {
      const extensionApi = {
        applyRedeemableChange: jest.fn,
      };
      const {value} = mount.hook(() => useApplyRedeemableChange(), {
        extensionApi,
      });
      expect(value).toBe(jest.fn);
    });

    it('raises when applyRedeemableChange is not available', async () => {
      const runner = async () => {
        return mount.hook(() => useApplyRedeemableChange(), {
          extensionApi: {},
        });
      };
      await expect(runner).rejects.toThrow(ExtensionHasNoMethodError);
    });
  });
});
