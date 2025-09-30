import type {ExtensionTarget} from '../../extension-targets';

import {useApplyRedeemableChange} from '../redeemable';
import {
  mount,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
  createMockExtension,
} from './mount';

describe('Redeemable API hooks', () => {
  afterEach(tearDownGlobalShopifyMock);
  describe('useApplyRedeemableChange()', () => {
    it('returns the applyRedeemableChange function', async () => {
      const target = 'purchase.checkout.gift-card.render' as const;
      const mockApplyRedeemableChange = jest.fn();
      setupGlobalShopifyMock<typeof target>({
        applyRedeemableChange: mockApplyRedeemableChange,
        extension: createMockExtension(target),
      });

      const {value} = mount.hook(() => useApplyRedeemableChange());
      expect(value).toBe(mockApplyRedeemableChange);
    });

    it('raises when applyRedeemableChange is not available', () => {
      const target: ExtensionTarget = 'purchase.checkout.block.render';
      setupGlobalShopifyMock({
        extension: createMockExtension(target),
      });

      expect(() => {
        mount.hook(() => useApplyRedeemableChange());
      }).toThrow(
        expect.objectContaining({
          name: 'ExtensionHasNoMethodError',
        }),
      );
    });
  });
});
