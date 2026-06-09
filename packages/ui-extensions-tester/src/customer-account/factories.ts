import type {
  ApiForExtension,
  AppliedGiftCard,
  AuthenticationState,
  ExtensionTarget,
  StandardApi,
  TrackingConsentMetafield,
  Language,
  Attribute,
  CartDiscountAllocation,
  CartDiscountCode,
  AppMetafieldEntry,
} from '@shopify/ui-extensions/customer-account';
import {createSubscribableSignalLike} from '../mocks/signals';
import {createMockI18n} from '../mocks/i18n';
import {createMoney} from '../mocks/money';
import {API_VERSION} from '../api-version';
import {createCartLine, createStorage, createResult} from './index';

// ---------------------------------------------------------------------------
// Derived types — not exported from the customer-account surface barrel
// ---------------------------------------------------------------------------

type Intents = StandardApi['intents'];
type IntentActivity = Awaited<ReturnType<Intents['invoke']>>;
type IntentResponse = Awaited<IntentActivity['complete']>;

function createLanguage(): Language {
  return {isoCode: 'en'};
}

function createStandardApiProperties<T extends ExtensionTarget>(target: T) {
  return {
    extensionPoint: target,
    extension: {
      apiVersion: API_VERSION as any,
      capabilities: createSubscribableSignalLike([]),
      rendered: createSubscribableSignalLike(true),
      scriptUrl: 'https://mock-extension.test/index.js',
      target,
    },
    authenticatedAccount: {
      purchasingCompany: createSubscribableSignalLike(undefined),
      customer: createSubscribableSignalLike(undefined),
    },
    version: '0.0.0' as const,
    localization: {
      language: createSubscribableSignalLike(createLanguage()),
      extensionLanguage: createSubscribableSignalLike(createLanguage()),
      country: createSubscribableSignalLike(undefined),
    },
    i18n: createMockI18n(),
    storage: createStorage(),
    sessionToken: {get: async () => 'mock-session-token'},
    analytics: {
      publish: async () => true,
      visitor: async () => ({type: 'success' as const}),
    },
    intents: {
      invoke: async () => ({
        complete: Promise.resolve({code: 'closed'} as IntentResponse),
      }),
    },
    settings: createSubscribableSignalLike({}),
    toast: {show: async () => ({hide: () => {}})},
    query: async () => ({data: undefined}),
    customerPrivacy: createSubscribableSignalLike({
      allowedProcessing: {
        analytics: true,
        marketing: true,
        preferences: true,
        saleOfData: true,
      },
      metafields: [] as TrackingConsentMetafield[],
      visitorConsent: {},
      shouldShowBanner: false,
      saleOfDataRegion: false,
    }),
    applyTrackingConsentChange: async () =>
      createResult('applyTrackingConsentChange'),
  };
}

function createOrderStatusAndStandardApiProperties<T extends ExtensionTarget>(
  target: T,
) {
  return {
    ...createStandardApiProperties(target),
    appliedGiftCards: createSubscribableSignalLike([] as AppliedGiftCard[]),
    appMetafields: createSubscribableSignalLike([] as AppMetafieldEntry[]),
    attributes: createSubscribableSignalLike(
      undefined as Attribute[] | undefined,
    ),
    checkoutSettings: createSubscribableSignalLike({
      orderSubmission: 'ORDER' as const,
      shippingAddress: {isEditable: true},
    }),
    cost: {
      subtotalAmount: createSubscribableSignalLike(createMoney()),
      totalShippingAmount: createSubscribableSignalLike(undefined),
      totalTaxAmount: createSubscribableSignalLike(undefined),
      totalAmount: createSubscribableSignalLike(createMoney()),
    },
    discountCodes: createSubscribableSignalLike([] as CartDiscountCode[]),
    discountAllocations: createSubscribableSignalLike(
      [] as CartDiscountAllocation[],
    ),
    lines: createSubscribableSignalLike([createCartLine()]),
    localization: {
      currency: createSubscribableSignalLike({isoCode: 'USD' as const}),
      timezone: createSubscribableSignalLike('America/New_York' as const),
      language: createSubscribableSignalLike(createLanguage()),
      extensionLanguage: createSubscribableSignalLike(createLanguage()),
      country: createSubscribableSignalLike(undefined),
      market: createSubscribableSignalLike(undefined),
    },
    note: createSubscribableSignalLike(undefined as string | undefined),
    order: createSubscribableSignalLike({
      id: 'gid://shopify/Order/1',
      name: '#1000',
    }),
    checkoutToken: createSubscribableSignalLike(undefined),
    shop: {
      id: 'gid://shopify/Shop/1',
      name: 'Mock Shop',
      storefrontUrl: 'https://mock-shop.myshopify.com',
      myshopifyDomain: 'mock-shop.myshopify.com',
    },
    requireLogin: async () => {},
    authenticationState: createSubscribableSignalLike(
      'fully_authenticated' as AuthenticationState,
    ),
  };
}

// ---------------------------------------------------------------------------
// Group factory functions
// ---------------------------------------------------------------------------

// Group C: CartLineItemApi + OrderStatusApi + StandardApi
function createGroupC<T extends ExtensionTarget>(target: T) {
  return {
    ...createOrderStatusAndStandardApiProperties(target),
    target: createSubscribableSignalLike(createCartLine()),
  };
}

// Group D: OrderStatusApi + StandardApi + ReturnApi
function createGroupD<T extends ExtensionTarget>(target: T) {
  return {
    ...createOrderStatusAndStandardApiProperties(target),
    returnId: 'gid://shopify/Return/1',
  };
}

// Group E: OrderStatusApi + StandardApi + FulfillmentApi
function createGroupE<T extends ExtensionTarget>(target: T) {
  return {
    ...createOrderStatusAndStandardApiProperties(target),
    fulfillmentId: 'gid://shopify/Fulfillment/1',
  };
}

// Group F: StandardApi + CompanyLocationApi
function createGroupF<T extends ExtensionTarget>(target: T) {
  return {
    ...createStandardApiProperties(target),
    locationId: 'gid://shopify/CompanyLocation/1',
  };
}

// Group G: StandardApi + OrderApi
function createGroupG<T extends ExtensionTarget>(target: T) {
  return {
    ...createStandardApiProperties(target),
    orderId: 'gid://shopify/Order/1',
  };
}

// Group H: StandardApi + ActionExtensionApi + OrderApi
function createGroupH<T extends ExtensionTarget>(target: T) {
  return {
    ...createStandardApiProperties(target),
    close: () => {},
    orderId: 'gid://shopify/Order/1',
  };
}

// ---------------------------------------------------------------------------
// Factory map — associates each target with the correct factory
// ---------------------------------------------------------------------------

type CustomerAccountMockFactory = {
  [K in ExtensionTarget]: (target: K) => ApiForExtension<K>;
};

const customerAccountMockFactories: CustomerAccountMockFactory = {
  // StandardApi only
  'customer-account.page.render': createStandardApiProperties,
  'customer-account.order-index.block.render': createStandardApiProperties,
  'customer-account.order-index.announcement.render':
    createStandardApiProperties,
  'customer-account.profile.block.render': createStandardApiProperties,
  'customer-account.profile.announcement.render': createStandardApiProperties,
  'customer-account.profile.addresses.render-after':
    createStandardApiProperties,
  'customer-account.footer.render-after': createStandardApiProperties,
  'customer-account.profile.payment.render-after': createStandardApiProperties,
  'customer-account.profile.company-details.render-after':
    createStandardApiProperties,

  // OrderStatusApi + StandardApi
  'customer-account.order-status.block.render':
    createOrderStatusAndStandardApiProperties,
  'customer-account.order-status.announcement.render':
    createOrderStatusAndStandardApiProperties,
  'customer-account.order-status.cart-line-list.render-after':
    createOrderStatusAndStandardApiProperties,
  'customer-account.order-status.unfulfilled-items.render-after':
    createOrderStatusAndStandardApiProperties,
  'customer-account.order-status.payment-details.render-after':
    createOrderStatusAndStandardApiProperties,
  'customer-account.order-status.customer-information.render-after': (
    _target,
  ) =>
    createOrderStatusAndStandardApiProperties(
      'customer-account.order-status.cart-line-list.render-after',
    ),
  'customer-account.order.page.render':
    createOrderStatusAndStandardApiProperties,

  // Group C: CartLineItemApi + OrderStatusApi + StandardApi
  'customer-account.order-status.cart-line-item.render-after': createGroupC,

  // Group D: OrderStatusApi + StandardApi + ReturnApi
  'customer-account.order-status.return-details.render-after': createGroupD,

  // Group E: OrderStatusApi + StandardApi + FulfillmentApi
  'customer-account.order-status.fulfillment-details.render-after':
    createGroupE,

  // Group F: StandardApi + CompanyLocationApi
  'customer-account.profile.company-location-addresses.render-after':
    createGroupF,
  'customer-account.profile.company-location-payment.render-after':
    createGroupF,
  'customer-account.profile.company-location-staff.render-after': createGroupF,

  // Group G: StandardApi + OrderApi
  'customer-account.order.action.menu-item.render': createGroupG,

  // Group H: StandardApi + ActionExtensionApi + OrderApi
  'customer-account.order.action.render': createGroupH,
};

/**
 * Creates a complete mock API for a customer account extension target.
 * Each entry in the factory map is type-checked by TypeScript against
 * the concrete `ApiForExtension<K>` for that target.
 */
export function createMockCustomerAccountTargetApi<T extends ExtensionTarget>(
  target: T,
): ApiForExtension<T> {
  const factory = customerAccountMockFactories[target];
  if (!factory) {
    throw new Error(
      `Unsupported customer-account target: "${target}". ` +
        'Add an entry for this target in customerAccountMockFactories.',
    );
  }
  return factory(target);
}
