import type {
  ExtensionTarget,
  StandardApi,
  ValidationSettingsApi,
  DiscountFunctionSettingsApi,
} from '@shopify/ui-extensions/admin';

type Storage = StandardApi<ExtensionTarget>['storage'];
type DiscountsApi =
  DiscountFunctionSettingsApi<'admin.discount-details.function-settings.render'>['discounts'];
type ValidationApplyMetafieldChange =
  ValidationSettingsApi<'admin.settings.validation.render'>['applyMetafieldChange'];
type DiscountApplyMetafieldChange =
  DiscountFunctionSettingsApi<'admin.discount-details.function-settings.render'>['applyMetafieldChange'];
/**
 * Creates a mock `Storage` instance.
 *
 * Optionally accepts a `Record<string, unknown>` of initial entries.
 */
export function createStorage(
  initialEntries?: Record<string, unknown>,
): Storage {
  const store = new Map<string, unknown>(
    initialEntries ? Object.entries(initialEntries) : [],
  );
  return {
    set: async (key, value) => {
      store.set(key as string, value);
    },
    setMany: async (entries) => {
      for (const [entryKey, entryValue] of Object.entries(entries)) {
        store.set(entryKey, entryValue);
      }
    },
    get: async (key) => store.get(key as string) as any,
    getMany: async (keys) =>
      (keys as string[]).map((entry) => store.get(entry)) as any,
    clear: async () => {
      store.clear();
    },
    delete: async (key) => store.delete(key as string),
    deleteMany: async (keys) => {
      const result: Record<string, boolean> = {};
      for (const entry of keys as string[]) {
        result[entry] = store.delete(entry);
      }
      return result as any;
    },
    entries: async () => store.entries() as any,
  };
}

/**
 * Maps each admin mutation API name to its result type.
 */
export interface AdminMutationResults {
  applyMetafieldChange:
    | Awaited<ReturnType<ValidationApplyMetafieldChange>>
    | Awaited<ReturnType<DiscountApplyMetafieldChange>>;
  updateDiscountClasses: ReturnType<DiscountsApi['updateDiscountClasses']>;
}

const adminMutationDefaults: {
  [K in keyof AdminMutationResults]: () => AdminMutationResults[K];
} = {
  applyMetafieldChange: () => ({type: 'success'}),
  updateDiscountClasses: () => ({success: true as const, value: []}),
};

/**
 * Creates a typed mock result for an admin mutation API.
 *
 * @param mutation - The mutation API name (e.g. `'applyMetafieldChange'`).
 * @param result - Optional partial override merged with the default.
 *
 * @example
 * createResult('applyMetafieldChange');
 * createResult('updateDiscountClasses', {value: ['ORDER']});
 */
export function createResult<K extends keyof AdminMutationResults>(
  mutation: K,
  result?: Partial<AdminMutationResults[K]>,
): AdminMutationResults[K] {
  return {...adminMutationDefaults[mutation](), ...result};
}
