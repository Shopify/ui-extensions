import type {
  PaymentOption,
  SelectedPaymentOption,
} from '../../api/standard/standard';

import {
  useAvailablePaymentOptions,
  useSelectedPaymentOptions,
} from '../payment-options';

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

describe('Payment Methods API hooks', () => {
  afterEach(tearDownGlobalShopifyMock);
  describe('useAvailablePaymentOptions', () => {
    it('returns the available payment methods', async () => {
      const paymentOptions: PaymentOption[] = [
        {handle: 'bogus', type: 'other'},
        {handle: 'direct', type: 'creditCard'},
      ];

      setupGlobalShopifyMock({
        availablePaymentOptions:
          createMockSubscribableSignalLike(paymentOptions),
      });

      const {value} = mount.hook(() => useAvailablePaymentOptions());

      expect(value).toBe(paymentOptions);
    });
  });

  describe('useSelectedPaymentOptions', () => {
    it('returns a single selected payment method', async () => {
      const availablePaymentOptions: PaymentOption[] = [
        {handle: 'bogus', type: 'other'},
        {handle: 'direct', type: 'creditCard'},
      ];

      const selectedPaymentOptionHandles: SelectedPaymentOption[] = [
        {handle: 'bogus', type: 'other'},
      ];

      const selectedPaymentOptions: SelectedPaymentOption[] = [
        {handle: 'bogus', type: 'other'},
      ];

      setupGlobalShopifyMock({
        availablePaymentOptions: createMockSubscribableSignalLike(
          availablePaymentOptions,
        ),
        selectedPaymentOptions: createMockSubscribableSignalLike(
          selectedPaymentOptionHandles,
        ),
      });

      const {value} = mount.hook(() => useSelectedPaymentOptions());

      expect(value).toStrictEqual(selectedPaymentOptions);
    });

    it('returns multiple selected payment methods', async () => {
      const availablePaymentOptions: PaymentOption[] = [
        {handle: 'bogus', type: 'other'},
        {handle: 'direct', type: 'creditCard'},
      ];

      const selectedPaymentOptionHandles: SelectedPaymentOption[] = [
        {handle: 'bogus', type: 'other'},
        {handle: 'direct', type: 'creditCard'},
      ];

      const selectedPaymentOptions: SelectedPaymentOption[] = [
        {handle: 'bogus', type: 'other'},
        {handle: 'direct', type: 'creditCard'},
      ];

      setupGlobalShopifyMock({
        availablePaymentOptions: createMockSubscribableSignalLike(
          availablePaymentOptions,
        ),
        selectedPaymentOptions: createMockSubscribableSignalLike(
          selectedPaymentOptionHandles,
        ),
      });

      const {value} = mount.hook(() => useSelectedPaymentOptions());

      expect(value).toStrictEqual(selectedPaymentOptions);
    });
  });
});
