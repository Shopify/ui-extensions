import type {
  LineItem,
  Storage,
  SubscribableStorage,
  CartApiContent,
} from '@shopify/ui-extensions/point-of-sale';

/**
 * Creates a mock POS `LineItem` with sensible defaults.
 * Pass a partial override to customize fields.
 */
export function createCartLineItem(overrides?: Partial<LineItem>): LineItem {
  return {
    uuid: 'mock-line-item-uuid',
    price: 10,
    quantity: 1,
    title: 'Mock Line Item',
    variantId: 1,
    productId: 1,
    discounts: [],
    taxable: true,
    taxLines: [],
    sku: 'MOCK-SKU',
    vendor: 'Mock Vendor',
    properties: {},
    isGiftCard: false,
    ...overrides,
  };
}

/**
 * Creates a mock `Storage` instance.
 *
 * Optionally accepts a `Record<string, unknown>` of initial entries.
 */
export function createStorage<
  T extends Record<string, unknown> = Record<string, unknown>,
>(initialValues?: T): Storage<T> {
  const store = new Map<string, unknown>(
    initialValues ? Object.entries(initialValues) : [],
  );
  const listeners = new Map<string, Set<(value: unknown) => void>>();

  const createSubscribable = (key: string) => ({
    get value() {
      return store.get(key) as never;
    },
    subscribe(_fn: (value: unknown) => void) {
      if (!listeners.has(key)) {
        listeners.set(key, new Set());
      }
      const keyListeners = listeners.get(key)!;
      keyListeners.add(_fn);
      return () => {
        keyListeners.delete(_fn);
      };
    },
  });

  const notifyListeners = (key: string, value: unknown) => {
    const keyListeners = listeners.get(key);
    if (keyListeners) {
      for (const listener of keyListeners) {
        listener(value);
      }
    }
  };

  const currentProxy = new Proxy({} as SubscribableStorage<T>, {
    get(_target, prop) {
      return createSubscribable(prop as string);
    },
    has(_target, prop) {
      return typeof prop === 'string';
    },
  });

  const storage: Storage<T> = {
    current: currentProxy,
    set: async (key, value) => {
      store.set(key as string, value);
      notifyListeners(key as string, value);
    },
    get: async (key) => store.get(key as string) as never,
    clear: async () => {
      store.clear();
      for (const key of listeners.keys()) {
        notifyListeners(key, undefined);
      }
    },
    delete: async (key) => {
      store.delete(key as string);
      notifyListeners(key as string, undefined);
      return true;
    },
    entries: async () => [...store.entries()] as never,
  };
  return storage;
}

/**
 * Maps each POS mutation API name to its result type.
 */
export interface PosMutationResults {
  bulkCartUpdate: Awaited<ReturnType<CartApiContent['bulkCartUpdate']>>;
}

const posMutationDefaults: {
  [K in keyof PosMutationResults]: () => PosMutationResults[K];
} = {
  bulkCartUpdate: () => ({
    subtotal: '0.00',
    taxTotal: '0.00',
    grandTotal: '0.00',
    cartDiscounts: [],
    lineItems: [],
    properties: {},
  }),
};

/**
 * Creates a typed mock result for a POS mutation API.
 *
 * @param mutation - The mutation API name (e.g. `'bulkCartUpdate'`).
 * @param result - Optional partial override merged with the default.
 *
 * @example
 * createResult('bulkCartUpdate');
 * createResult('bulkCartUpdate', {grandTotal: '25.00'});
 */
export function createResult<K extends keyof PosMutationResults>(
  mutation: K,
  result?: Partial<PosMutationResults[K]>,
): PosMutationResults[K] {
  return {...posMutationDefaults[mutation](), ...result};
}
