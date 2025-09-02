import type {
  CartDiscountCode,
  CartDiscountAllocation,
  CartDiscountHint,
} from '@shopify/ui-extensions/checkout';

import {
  useDiscountAllocations,
  useDiscountCodes,
  useDiscountHints,
} from '../discounts';

import {mount, createMockStatefulRemoteSubscribable} from './mount';
import type {PartialExtensionApi} from './mount';

describe('Discounts API hooks', () => {
  describe('useDiscountCodes', () => {
    it('returns the current discount codes', async () => {
      const discountCodes: CartDiscountCode[] = [
        {code: '20off'},
        {code: 'free_shipping'},
      ];

      const extensionApi: PartialExtensionApi = {
        discountCodes: createMockStatefulRemoteSubscribable(discountCodes),
      };

      const {value} = mount.hook(() => useDiscountCodes(), {extensionApi});

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
          metafields: [
            {
              key: 'some-key',
              namespace: 'some-namespace',
              value: 'some-value',
              valueType: 'string',
            },
          ],
        },
        {
          title: '10% off',
          discountedAmount: {
            amount: 10,
            currencyCode: 'USD',
          },
          type: 'automatic',
          metafields: [],
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

      const extensionApi: PartialExtensionApi = {
        discountAllocations:
          createMockStatefulRemoteSubscribable(discountAllocations),
      };

      const {value} = mount.hook(() => useDiscountAllocations(), {
        extensionApi,
      });

      expect(value).toBe(discountAllocations);
    });
  });

  describe('useDiscountHints', () => {
    it('returns the current discount hints', async () => {
      const discountHints: CartDiscountHint[] = [
        {
          metafields: [
            {
              key: 'some-key',
              namespace: 'some-namespace',
              value: 'some-value',
              valueType: 'string',
            },
          ],
        },
      ];

      const extensionApi: PartialExtensionApi = {
        discountHints: createMockStatefulRemoteSubscribable(discountHints),
      };

      const {value} = mount.hook(() => useDiscountHints(), {extensionApi});

      expect(value).toBe(discountHints);
    });
  });
});
