import type {
  ExtensionTarget,
  ExtensionTargets,
  StandardApi,
  ActionExtensionApi,
  BlockExtensionApi,
  ProductDetailsConfigurationApi,
  Intents,
  ToastApi,
  AppApi,
  LoadingApi,
  Tools,
} from '@shopify/ui-extensions/admin';
import {createReadonlySignalLike} from '../mocks/signals';
import {createMockI18n} from '../mocks/i18n';
import {createStorage, createResult} from './index';

/**
 * Extracts the API type for a given admin extension target directly from the
 * implementation's `ExtensionTargets` interface.
 *
 * Properties prefixed with `__` are private internal APIs and are excluded
 * from the mock type so they cannot be relied on in test suites.
 */
export type ApiForAdminExtension<T extends ExtensionTarget> =
  ExtensionTargets[T] extends {api: infer Api}
    ? Omit<Api, `__${string}`>
    : never;

// ---------------------------------------------------------------------------
// Derived types — not directly exported from the admin surface barrel
// ---------------------------------------------------------------------------

type Navigation = BlockExtensionApi<ExtensionTarget>['navigation'];
type Data = ActionExtensionApi<ExtensionTarget>['data'];
type ResourcePickerApi = ActionExtensionApi<ExtensionTarget>['resourcePicker'];
type PickerApi = ActionExtensionApi<ExtensionTarget>['picker'];
type IntentActivity = NonNullable<
  Awaited<ReturnType<NonNullable<Intents['invoke']>>>
>;
type IntentResponse = NonNullable<
  Awaited<NonNullable<IntentActivity['complete']>>
>;
type IntentResponseApi = NonNullable<Intents['response']>;

type ProductDetailsConfigData =
  ProductDetailsConfigurationApi<'admin.product-details.configuration.render'>['data'];
type ConfigApp = ProductDetailsConfigData['app'];

export function gidFromTarget(target: ExtensionTarget): string {
  const resource = target
    .split('.')[1]
    .replace(/-details$|-index$|-fulfilled-card$|-purchase-option$/, '')
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  return `gid://shopify/${resource}/1`;
}

function createData(selected: Data['selected'] = []): Data {
  return {selected};
}

function createNavigation(): Navigation {
  return {navigate: () => {}};
}

function createConfigApp(): ConfigApp {
  return {
    launchUrl: 'https://mock-app.test/launch',
    applicationUrl: 'https://mock-app.test',
  };
}

function createIntentResponseApi(): IntentResponseApi {
  return {
    ok: async () => {},
    error: async () => {},
    closed: async () => {},
  };
}

function createMockStandardApi<T extends ExtensionTarget>(
  target: T,
): StandardApi<T> {
  return {
    extension: {target},
    auth: {idToken: async () => 'mock-id-token'},
    i18n: createMockI18n(),
    intents: {
      launchUrl: undefined,
      invoke: async () => ({
        complete: Promise.resolve({code: 'closed'} as IntentResponse),
      }),
    },
    storage: createStorage(),
    query: async () => ({data: undefined}),
  };
}

function createMockStandardRenderingApi<T extends ExtensionTarget>(target: T) {
  return {
    ...createMockStandardApi(target),
    resourcePicker: (async () => undefined) as ResourcePickerApi,
    picker: (async () => ({
      selected: Promise.resolve(undefined),
    })) as PickerApi,
  };
}

function createMockToastApi(): ToastApi {
  return {
    show: () => {},
    hide: () => {},
  };
}

function createMockAppApi(): AppApi {
  return {
    extensions: async () => [],
  };
}

function createMockLoadingApi(): LoadingApi {
  return () => {};
}

function createMockToolsApi(): Tools {
  return {
    register: () => () => {},
    unregister: () => {},
    clear: () => {},
  };
}

function createAppHomeMock<T extends ExtensionTarget>(target: T) {
  const {invoke} = createMockStandardApi(target).intents;

  return {
    ...createMockStandardRenderingApi(target),
    toast: createMockToastApi(),
    app: createMockAppApi(),
    loading: createMockLoadingApi(),
    tools: createMockToolsApi(),
    intents: {
      invoke,
      request: {
        value: null,
        subscribe: () => () => {},
      },
    },
  };
}

function createAppIntentRenderMock<T extends ExtensionTarget>(target: T) {
  return {
    ...createMockStandardRenderingApi(target),
    intents: {
      ...createMockStandardApi(target).intents,
      response: createIntentResponseApi(),
    },
  };
}

function createMockBlockApi<T extends ExtensionTarget>(target: T) {
  return {
    ...createMockStandardRenderingApi(target),
    data: createData([{id: gidFromTarget(target)}]),
    navigation: createNavigation(),
  };
}

function createMockActionApi<T extends ExtensionTarget>(target: T) {
  return {
    ...createMockStandardRenderingApi(target),
    close: () => {},
    data: createData([{id: gidFromTarget(target)}]),
  };
}

// ---------------------------------------------------------------------------
// Group factory functions — each composes the correct API for a target group
// ---------------------------------------------------------------------------

function createPrintActionMock<T extends ExtensionTarget>(target: T) {
  return {
    ...createMockStandardRenderingApi(target),
    data: createData(),
  };
}

function createShouldRenderMock<T extends ExtensionTarget>(target: T) {
  return {
    ...createMockStandardApi(target),
    data: createData(),
  };
}

function createProductDetailsConfigMock<T extends ExtensionTarget>(target: T) {
  return {
    ...createMockBlockApi(target),
    data: {
      selected: [],
      product: {
        id: 'gid://shopify/Product/1',
        title: 'Mock Product',
        handle: 'mock-product',
        status: 'ACTIVE' as const,
        totalVariants: 1,
        totalInventory: 10,
        hasOnlyDefaultVariant: true,
        onlineStoreUrl: 'https://mock-shop.myshopify.com/products/mock-product',
        options: [],
        productType: '',
        productComponents: [],
      },
      app: createConfigApp(),
    },
  };
}

function createProductVariantDetailsConfigMock<T extends ExtensionTarget>(
  target: T,
) {
  return {
    ...createMockBlockApi(target),
    data: {
      selected: [],
      variant: {
        id: 'gid://shopify/ProductVariant/1',
        sku: 'MOCK-SKU',
        barcode: '',
        title: 'Default',
        displayName: 'Mock Product - Default',
        price: '0.00',
        compareAtPrice: '0.00',
        taxable: true,
        taxCode: '',
        weight: 0,
        selectedOptions: [],
        productVariantComponents: [],
      },
      app: createConfigApp(),
    },
  };
}

function createDiscountFunctionSettingsMock<T extends ExtensionTarget>(
  target: T,
) {
  return {
    ...createMockStandardRenderingApi(target),
    navigation: createNavigation(),
    applyMetafieldChange: async () => createResult('applyMetafieldChange'),
    data: {
      id: 'gid://shopify/DiscountAutomaticApp/1',
      metafields: [],
    },
    discounts: {
      discountClasses: createReadonlySignalLike([]),
      updateDiscountClasses: () => createResult('updateDiscountClasses'),
      discountMethod: createReadonlySignalLike('automatic' as const),
      purchaseType: createReadonlySignalLike('one_time_purchase' as const),
      updatePurchaseType: () => createResult('updatePurchaseType'),
      recurringCycleLimit: createReadonlySignalLike(null),
      updateRecurringCycleLimit: () =>
        createResult('updateRecurringCycleLimit'),
    },
  };
}

function createOrderRoutingRuleMock<T extends ExtensionTarget>(target: T) {
  return {
    ...createMockStandardRenderingApi(target),
    applyMetafieldsChange: () => {},
    data: {
      rule: {
        label: 'Mock Routing Rule',
        description: 'A mock order routing rule',
        id: 'gid://shopify/DeliveryCustomization/1',
        metafields: [],
      },
    },
  };
}

function createValidationSettingsMock<T extends ExtensionTarget>(target: T) {
  return {
    ...createMockStandardRenderingApi(target),
    applyMetafieldChange: async () => createResult('applyMetafieldChange'),
    data: {
      validation: undefined,
      shopifyFunction: {id: 'gid://shopify/ShopifyFunction/1'},
    },
  };
}

function createPurchaseOptionsCardMock<T extends ExtensionTarget>(target: T) {
  return {
    ...createMockActionApi(target),
    data: {selected: []},
  };
}

function createCustomerSegmentTemplateMock<T extends ExtensionTarget>(
  target: T,
) {
  return {
    ...createMockStandardApi(target),
  };
}

// ---------------------------------------------------------------------------
// Factory map — TypeScript verifies each entry against ApiForTarget<K>
// ---------------------------------------------------------------------------

type AdminMockFactory = {
  [K in ExtensionTarget]: (target: K) => ApiForAdminExtension<K>;
};

const adminMockFactories: AdminMockFactory = {
  // Runnable targets
  'admin.customers.segmentation-templates.data':
    createCustomerSegmentTemplateMock,
  'admin.app.tools.data': createMockStandardApi,

  // App render targets
  'admin.app.home.render': createAppHomeMock,
  'admin.app.intent.render': createAppIntentRenderMock,

  // Block targets
  'admin.product-details.block.render': createMockBlockApi,
  'admin.order-details.block.render': createMockBlockApi,
  'admin.customer-details.block.render': createMockBlockApi,
  'admin.collection-details.block.render': createMockBlockApi,
  'admin.draft-order-details.block.render': createMockBlockApi,
  'admin.abandoned-checkout-details.block.render': createMockBlockApi,
  'admin.catalog-details.block.render': createMockBlockApi,
  'admin.company-details.block.render': createMockBlockApi,
  'admin.company-location-details.block.render': createMockBlockApi,
  'admin.gift-card-details.block.render': createMockBlockApi,
  'admin.product-variant-details.block.render': createMockBlockApi,
  'admin.product-details.reorder.render': createMockBlockApi,

  // Action targets
  'admin.product-details.action.render': createMockActionApi,
  'admin.catalog-details.action.render': createMockActionApi,
  'admin.company-details.action.render': createMockActionApi,
  'admin.gift-card-details.action.render': createMockActionApi,
  'admin.order-details.action.render': createMockActionApi,
  'admin.customer-details.action.render': createMockActionApi,
  'admin.customer-segment-details.action.render': createMockActionApi,
  'admin.product-index.action.render': createMockActionApi,
  'admin.order-index.action.render': createMockActionApi,
  'admin.customer-index.action.render': createMockActionApi,
  'admin.discount-index.action.render': createMockActionApi,
  'admin.collection-details.action.render': createMockActionApi,
  'admin.collection-index.action.render': createMockActionApi,
  'admin.abandoned-checkout-details.action.render': createMockActionApi,
  'admin.abandoned-checkout-index.action.render': createMockActionApi,
  'admin.product-variant-details.action.render': createMockActionApi,
  'admin.draft-order-details.action.render': createMockActionApi,
  'admin.draft-order-index.action.render': createMockActionApi,
  'admin.discount-details.action.render': createMockActionApi,
  'admin.order-fulfilled-card.action.render': createMockActionApi,

  // Bulk action targets
  'admin.product-index.selection-action.render': createMockActionApi,
  'admin.order-index.selection-action.render': createMockActionApi,
  'admin.customer-index.selection-action.render': createMockActionApi,
  'admin.draft-order-index.selection-action.render': createMockActionApi,
  'admin.discount-index.selection-action.render': createMockActionApi,

  // Purchase options card action targets
  'admin.product-purchase-option.action.render': createPurchaseOptionsCardMock,
  'admin.product-variant-purchase-option.action.render':
    createPurchaseOptionsCardMock,

  // Print action targets
  'admin.order-details.print-action.render': createPrintActionMock,
  'admin.product-details.print-action.render': createPrintActionMock,
  'admin.order-index.selection-print-action.render': createPrintActionMock,
  'admin.product-index.selection-print-action.render': createPrintActionMock,

  // Configuration targets
  'admin.product-details.configuration.render': createProductDetailsConfigMock,
  'admin.product-variant-details.configuration.render':
    createProductVariantDetailsConfigMock,

  // Function settings targets
  'admin.discount-details.function-settings.render':
    createDiscountFunctionSettingsMock,
  'admin.settings.internal-order-routing-rule.render':
    createOrderRoutingRuleMock,
  'admin.settings.order-routing-rule.render': createOrderRoutingRuleMock,
  'admin.settings.validation.render': createValidationSettingsMock,

  // Should-render targets (action)
  'admin.product-details.action.should-render': createShouldRenderMock,
  'admin.catalog-details.action.should-render': createShouldRenderMock,
  'admin.company-details.action.should-render': createShouldRenderMock,
  'admin.gift-card-details.action.should-render': createShouldRenderMock,
  'admin.order-details.action.should-render': createShouldRenderMock,
  'admin.customer-details.action.should-render': createShouldRenderMock,
  'admin.customer-segment-details.action.should-render': createShouldRenderMock,
  'admin.product-index.action.should-render': createShouldRenderMock,
  'admin.order-index.action.should-render': createShouldRenderMock,
  'admin.customer-index.action.should-render': createShouldRenderMock,
  'admin.discount-index.action.should-render': createShouldRenderMock,
  'admin.collection-details.action.should-render': createShouldRenderMock,
  'admin.collection-index.action.should-render': createShouldRenderMock,
  'admin.abandoned-checkout-details.action.should-render':
    createShouldRenderMock,
  'admin.abandoned-checkout-index.action.should-render': createShouldRenderMock,
  'admin.product-variant-details.action.should-render': createShouldRenderMock,
  'admin.draft-order-details.action.should-render': createShouldRenderMock,
  'admin.draft-order-index.action.should-render': createShouldRenderMock,
  'admin.discount-details.action.should-render': createShouldRenderMock,
  'admin.order-fulfilled-card.action.should-render': createShouldRenderMock,

  // Should-render targets (bulk action)
  'admin.product-index.selection-action.should-render': createShouldRenderMock,
  'admin.order-index.selection-action.should-render': createShouldRenderMock,
  'admin.customer-index.selection-action.should-render': createShouldRenderMock,
  'admin.draft-order-index.selection-action.should-render':
    createShouldRenderMock,
  'admin.discount-index.selection-action.should-render': createShouldRenderMock,

  // Should-render targets (print action)
  'admin.order-details.print-action.should-render': createShouldRenderMock,
  'admin.product-details.print-action.should-render': createShouldRenderMock,
  'admin.order-index.selection-print-action.should-render':
    createShouldRenderMock,
  'admin.product-index.selection-print-action.should-render':
    createShouldRenderMock,
};

// ---------------------------------------------------------------------------
// Main factory
// ---------------------------------------------------------------------------

/**
 * Creates a complete mock API for an admin extension target.
 * Each entry in the factory map is type-checked by TypeScript against
 * the concrete API type for that target.
 */
export function createMockAdminTargetApi<T extends ExtensionTarget>(
  target: T,
): ApiForAdminExtension<T> {
  const factory = adminMockFactories[target];
  if (!factory) {
    throw new Error(
      `Unsupported admin target: "${target}". ` +
        'Add an entry for this target in adminMockFactories.',
    );
  }
  return factory(target);
}
