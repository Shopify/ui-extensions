import type {ExtensionTarget} from '../../extension-targets';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  useApplyPaymentMethodAttributesChange,
  usePaymentMethodAttributeValues,
  usePaymentMethodAttributes,
} from '../payment-method';
import {
  createMockSubscribableSignalLike,
  mount,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
  createMockExtension,
} from './mount';

describe('Payment Method API hooks', () => {
  afterEach(tearDownGlobalShopifyMock);

  describe('usePaymentMethodAttributes', () => {
    const paymentMethodAttributes = [{key: 'test_key', value: 'test_value'}];

    it('returns the paymentMethodAttributes value', async () => {
      const target =
        'purchase.checkout.payment-option-item.details.render' as const;
      setupGlobalShopifyMock<typeof target>({
        paymentMethodAttributes: createMockSubscribableSignalLike(
          paymentMethodAttributes,
        ),
        extension: createMockExtension(target),
      });

      const {value} = mount.hook(() => usePaymentMethodAttributes());
      expect(value).toBe(paymentMethodAttributes);
    });

    it('raises when paymentMethodAttributes is not available', async () => {
      setupGlobalShopifyMock({});

      expect(() => {
        mount.hook(() => usePaymentMethodAttributes());
      }).toThrow(
        expect.objectContaining({
          name: 'ScopeNotGrantedError',
        }),
      );
    });
  });

  describe('usePaymentMethodAttributeValues', () => {
    const paymentMethodAttributes = [{key: 'test_key', value: 'test_value'}];

    it('returns the paymentMethodAttributes values', async () => {
      const target =
        'purchase.checkout.payment-option-item.details.render' as const;
      setupGlobalShopifyMock<typeof target>({
        paymentMethodAttributes: createMockSubscribableSignalLike(
          paymentMethodAttributes,
        ),
        extension: createMockExtension(target),
      });

      const {value} = mount.hook(() =>
        usePaymentMethodAttributeValues(['test_key']),
      );
      expect(value).toStrictEqual(['test_value']);
    });

    it('returns undefined for not found keys', async () => {
      const target =
        'purchase.checkout.payment-option-item.details.render' as const;
      setupGlobalShopifyMock<typeof target>({
        paymentMethodAttributes: createMockSubscribableSignalLike(
          paymentMethodAttributes,
        ),
        extension: createMockExtension(target),
      });

      const {value} = mount.hook(() =>
        usePaymentMethodAttributeValues(['test_key', 'test_key3']),
      );
      expect(value).toStrictEqual(['test_value', undefined]);
    });

    it('returns an empty array if payment attributes object is undefined', async () => {
      setupGlobalShopifyMock<'purchase.checkout.payment-option-item.details.render'>(
        {
          paymentMethodAttributes: createMockSubscribableSignalLike(undefined),
        },
      );

      const {value} = mount.hook(() =>
        usePaymentMethodAttributeValues(['test_key', 'test_key3']),
      );
      expect(value).toStrictEqual([]);
    });

    it('returns an empty array if payment attributes object is an empty array', async () => {
      setupGlobalShopifyMock<'purchase.checkout.payment-option-item.details.render'>(
        {
          paymentMethodAttributes: createMockSubscribableSignalLike([]),
        },
      );

      const {value} = mount.hook(() =>
        usePaymentMethodAttributeValues(['test_key', 'test_key3']),
      );
      expect(value).toStrictEqual([]);
    });
  });

  describe('useApplyPaymentMethodAttributesChange()', () => {
    it('returns the applyPaymentMethodAttributesChange function', async () => {
      const target =
        'purchase.checkout.payment-option-item.details.render' as const;
      const applyPaymentMethodAttributesChange = jest.fn();
      setupGlobalShopifyMock<typeof target>({
        applyPaymentMethodAttributesChange,
        extension: createMockExtension(target),
      });

      const {value} = mount.hook(() => useApplyPaymentMethodAttributesChange());
      expect(value).toBe(applyPaymentMethodAttributesChange);
    });

    it('raises when applyPaymentMethodAttributesChange is not available', async () => {
      const target: ExtensionTarget = 'purchase.checkout.block.render';
      setupGlobalShopifyMock({
        extension: createMockExtension(target),
      });

      expect(() => {
        mount.hook(() => useApplyPaymentMethodAttributesChange());
      }).toThrow(
        expect.objectContaining({
          name: 'ExtensionHasNoMethodError',
        }),
      );
    });
  });
});
