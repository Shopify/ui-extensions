import type {
  CartLine,
  Storage,
  Attribute,
  CartDiscountAllocation,
  StandardApi,
} from '@shopify/ui-extensions/customer-account';
import {createMoney} from '../mocks/money';

/**
 * Creates a mock `CartLine` with sensible defaults.
 *
 * Pass a partial override to customize any field.
 */
export function createCartLine(overrides?: Partial<CartLine>): CartLine {
  return {
    id: 'gid://shopify/CartLine/1',
    merchandise: {
      type: 'variant' as const,
      id: 'gid://shopify/ProductVariant/1',
      title: 'Mock Variant',
      selectedOptions: [],
      product: {
        id: 'gid://shopify/Product/1',
        vendor: 'Mock Vendor',
        productType: '',
      },
      requiresShipping: true,
    },
    quantity: 1,
    cost: {totalAmount: createMoney()},
    attributes: [] as Attribute[],
    discountAllocations: [] as CartDiscountAllocation[],
    lineComponents: [] as CartLine['lineComponents'],
    ...overrides,
  };
}

/**
 * Creates a mock `Storage` instance.
 *
 * Optionally accepts a `Record<string, unknown>` of initial entries.
 */
export function createStorage(
  initialEntries?: Record<string, unknown>,
): Storage {
  const store: Record<string, unknown> = {...initialEntries};
  return {
    read: async <T = unknown>(key: string) =>
      (store[key] as T | undefined) ?? null,
    write: async (key: string, data: unknown) => {
      store[key] = data;
    },
    delete: async (key: string) => {
      delete store[key];
    },
  };
}

/**
 * Maps each customer account mutation API name to its result type.
 */
export interface CustomerAccountMutationResults {
  applyTrackingConsentChange: Awaited<
    ReturnType<StandardApi['applyTrackingConsentChange']>
  >;
}

/**
 * Creates a typed mock result for a customer account mutation API.
 *
 * @param mutation - The mutation API name (e.g. `'applyTrackingConsentChange'`).
 * @param result - Optional partial override merged with the default.
 *
 * @example
 * createResult('applyTrackingConsentChange');
 * createResult('applyTrackingConsentChange', {type: 'error', message: 'denied'});
 */
const customerAccountMutationDefaults: {
  [K in keyof CustomerAccountMutationResults]: () => CustomerAccountMutationResults[K];
} = {
  applyTrackingConsentChange: () => ({type: 'success'}),
};

export function createResult<K extends keyof CustomerAccountMutationResults>(
  mutation: K,
  result?: Partial<CustomerAccountMutationResults[K]>,
): CustomerAccountMutationResults[K] {
  return {...customerAccountMutationDefaults[mutation](), ...result};
}
