import {ExtensionTarget} from '@shopify/ui-extensions/checkout';

import {useApplyPaymentMethodAttributesChange} from '../payment-method';
import {ExtensionHasNoMethodError} from '../../errors';

import {mount} from './mount';

describe('Payment Method API hooks', () => {
  describe('useApplyPaymentMethodAttributesChange()', () => {
    it('returns the applyPaymentMethodAttributesChange function', async () => {
      const target: ExtensionTarget =
        'purchase.checkout.payment-option-item.details.render';
      const extensionApi = {
        applyPaymentMethodAttributesChange: jest.fn,
        extension: {target},
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
        const target: ExtensionTarget = 'purchase.checkout.block.render';
        return mount.hook(() => useApplyPaymentMethodAttributesChange(), {
          extensionApi: {
            extension: {target},
          },
        });
      };
      await expect(runner).rejects.toThrow(ExtensionHasNoMethodError);
    });
  });
});
