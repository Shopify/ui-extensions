import {useApplyPaymentMethodAttributesChange} from '../payment-method';
import {ExtensionHasNoMethodError} from '../../errors';

import {mount} from './mount';

describe('Payment Method API hooks', () => {
  describe('useApplyPaymentMethodAttributesChange()', () => {
    it('returns the applyPaymentMethodAttributesChange function', async () => {
      const extensionApi = {
        applyPaymentMethodAttributesChange: jest.fn,
      };
      const {value} = mount.hook(
        () => useApplyPaymentMethodAttributesChange(),
        {
          extensionApi,
        },
      );
      expect(value).toBe(jest.fn);
    });

    it('raises when applyPaymentMethodAttributesChange is not available', async () => {
      const runner = async () => {
        return mount.hook(() => useApplyPaymentMethodAttributesChange(), {
          extensionApi: {},
        });
      };
      await expect(runner).rejects.toThrow(ExtensionHasNoMethodError);
    });
  });
});
