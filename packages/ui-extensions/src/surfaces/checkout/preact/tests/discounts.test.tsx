import type {
  CartDiscountCode,
  CartDiscountAllocation,
} from '../../api/standard/standard';

import {useDiscountAllocations, useDiscountCodes} from '../discounts';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

import {
  mount,
  createMockSubscribableSignalLike,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

describe('Discounts API hooks', () => {
  afterEach(tearDownGlobalShopifyMock);

  describe('useDiscountCodes', () => {
    it('returns the current discount codes', async () => {
      const discountCodes: CartDiscountCode[] = [
        {code: '20off'},
        {code: 'free_shipping'},
      ];

      setupGlobalShopifyMock({
        discountCodes: createMockSubscribableSignalLike(discountCodes),
      });

      const {value} = mount.hook(() => useDiscountCodes());

      expect(value).toBe(discountCodes);
    });
  });

  describe('useDiscountAllocations', () => {
    it('returns the current discount allocations', async () => {
      const discountAllocations: CartDiscountAllocation[] = [
        {
          code: '20off',
          discountedAmount: {
            amount: 20,
            currencyCode: 'USD',
          },
          type: 'code',
        },
        {
          title: '10% off',
          discountedAmount: {
            amount: 10,
            currencyCode: 'USD',
          },
          type: 'automatic',
        },
        {
          title: '15% off',
          discountedAmount: {
            amount: 15,
            currencyCode: 'USD',
          },
          type: 'custom',
        },
      ];

      setupGlobalShopifyMock({
        discountAllocations:
          createMockSubscribableSignalLike(discountAllocations),
      });

      const {value} = mount.hook(() => useDiscountAllocations());

      expect(value).toBe(discountAllocations);
    });
  });
});
