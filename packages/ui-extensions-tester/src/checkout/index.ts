import type {
  CartLine,
  Storage,
  ShippingOption,
  PickupLocationOption,
  CheckoutApi,
  StandardApi,
  ExtensionTarget,
  RedeemableApi,
  PaymentOptionItemApi,
} from '@shopify/ui-extensions/checkout';
import {createMoney} from '../mocks/money';

/**
 * Creates a mock `CartLine` with sensible defaults.
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
    attributes: [],
    discountAllocations: [],
    lineComponents: [],
    parentRelationship: null,
    ...overrides,
  };
}

/**
 * Creates a mock `ShippingOption` with sensible defaults.
 */
export function createShippingOption(
  overrides?: Partial<ShippingOption>,
): ShippingOption {
  return {
    type: 'shipping' as const,
    handle: 'mock-shipping-option',
    title: 'Mock Shipping',
    code: 'MOCK',
    metafields: [],
    carrier: {},
    cost: createMoney(),
    costAfterDiscounts: createMoney(),
    deliveryEstimate: {},
    ...overrides,
  };
}

type PickupLocation = PickupLocationOption['location'];

/**
 * Creates a mock pickup `Location` object with sensible defaults.
 */
export function createPickupLocation(
  overrides?: Partial<PickupLocation>,
): PickupLocation {
  return {
    name: 'Mock Pickup',
    address: {countryCode: 'US' as const},
    ...overrides,
  };
}

/**
 * Creates a mock `PickupLocationOption` with sensible defaults.
 */
export function createPickupLocationOption(
  overrides?: Partial<PickupLocationOption>,
): PickupLocationOption {
  return {
    type: 'pickup' as const,
    handle: 'mock-pickup-location',
    code: 'MOCK',
    metafields: [],
    location: createPickupLocation(),
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
 * Maps each checkout mutation API name to its result type,
 * derived from the actual API method signatures.
 */
export interface CheckoutMutationResults {
  applyAttributeChange: Awaited<
    ReturnType<CheckoutApi['applyAttributeChange']>
  >;
  applyCartLinesChange: Awaited<
    ReturnType<CheckoutApi['applyCartLinesChange']>
  >;
  applyDiscountCodeChange: Awaited<
    ReturnType<CheckoutApi['applyDiscountCodeChange']>
  >;
  applyGiftCardChange: Awaited<ReturnType<CheckoutApi['applyGiftCardChange']>>;
  applyMetafieldChange: Awaited<
    ReturnType<CheckoutApi['applyMetafieldChange']>
  >;
  applyNoteChange: Awaited<ReturnType<CheckoutApi['applyNoteChange']>>;
  applyTrackingConsentChange: Awaited<
    ReturnType<StandardApi<ExtensionTarget>['applyTrackingConsentChange']>
  >;
  applyPaymentMethodAttributesChange: Awaited<
    ReturnType<PaymentOptionItemApi['applyPaymentMethodAttributesChange']>
  >;
  applyRedeemableChange: Awaited<
    ReturnType<RedeemableApi['applyRedeemableChange']>
  >;
}

const checkoutMutationDefaults: {
  [K in keyof CheckoutMutationResults]: () => CheckoutMutationResults[K];
} = {
  applyAttributeChange: () => ({type: 'success'}),
  applyCartLinesChange: () => ({type: 'success'}),
  applyDiscountCodeChange: () => ({type: 'success'}),
  applyGiftCardChange: () => ({type: 'success'}),
  applyMetafieldChange: () => ({type: 'success'}),
  applyNoteChange: () => ({type: 'success'}),
  applyTrackingConsentChange: () => ({type: 'success'}),
  applyPaymentMethodAttributesChange: () => ({type: 'success'}),
  applyRedeemableChange: () => ({type: 'success'}),
};

/**
 * Creates a typed mock result for a checkout mutation API.
 *
 * @param mutation - The mutation API name (e.g. `'applyMetafieldChange'`).
 * @param result - Optional partial override merged with the default.
 *
 * @example
 * createResult('applyMetafieldChange');
 * createResult('applyCartLinesChange', {type: 'error', message: 'out of stock'});
 */
export function createResult<K extends keyof CheckoutMutationResults>(
  mutation: K,
  result?: Partial<CheckoutMutationResults[K]>,
): CheckoutMutationResults[K] {
  return {...checkoutMutationDefaults[mutation](), ...result};
}
