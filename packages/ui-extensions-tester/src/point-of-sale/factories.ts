import type {
  ExtensionTarget,
  ExtensionTargets,
  RenderExtensionTarget,
  StandardApi,
  ActionTargetApi,
  DataTargetApi,
  ActionApi,
  CartApi,
  MetafieldApi,
  MetafieldChange,
  MetafieldChangeResult,
  OrderApi,
  ProductApi,
  CustomerApi,
  DraftOrderApi,
  CartLineItemApi,
  CashDrawerApi,
  ScannerApi,
  ReadonlyCartApi,
  ResolutionApi,
  ScannerSource,
  StorageApi,
  ConnectivityApiContent,
  ConnectivityState,
  Cart,
  Session,
  StaffMember,
  TransactionCompleteWithReprintData,
  Money,
  CartValidationsEventData,
  PaymentValidationsEventData,
} from '@shopify/ui-extensions/point-of-sale';

import {createReadonlySignalLike} from '../mocks/signals';
import {createMockI18n} from '../mocks/i18n';
import {
  createCartCapabilities,
  createCartLineItem,
  createStorage,
  createResult,
} from './index';

/**
 * Extracts the API type for a given POS extension target directly from the
 * implementation's `ExtensionTargets` interface.
 *
 * - For render targets: extracts the `api` property from `RenderExtension`.
 * - For event targets: extracts the `data` parameter from the handler function.
 */
type ApiForPosExtension<T extends ExtensionTarget> =
  ExtensionTargets[T] extends {api: infer Api}
    ? Api
    : ExtensionTargets[T] extends (data: infer D) => any
    ? D
    : never;

type Transaction = TransactionCompleteWithReprintData['transaction'];

function createConnectivityState(): ConnectivityState {
  return {internetConnected: 'Connected'};
}

function createSessionCurrentSession(): Session {
  return {
    shopId: 1,
    userId: 1,
    shopDomain: 'mock-shop.myshopify.com',
    locationId: 1,
    currency: 'USD',
    posVersion: '9.0.0',
  };
}

function createStaffMember(): StaffMember {
  return {
    id: 1,
  };
}

function createPosCart(): Cart {
  return {
    subtotal: '0.00',
    taxTotal: '0.00',
    grandTotal: '0.00',
    currency: 'USD',
    cartDiscounts: [],
    lineItems: [],
    metafields: [],
    properties: {},
    capabilities: createCartCapabilities(),
    cartType: 'Checkout',
  };
}

function createTransaction(): Transaction {
  const money: Money = {amount: 0, currency: 'USD'};
  return {
    transactionType: 'Sale' as const,
    orderId: 1,
    taxTotal: money,
    subtotal: money,
    grandTotal: money,
    paymentMethods: [],
    balanceDue: money,
    executedAt: new Date().toISOString(),
    lineItems: [],
  } as Transaction;
}

function createConnectivityApiContent(): ConnectivityApiContent {
  return {
    current: createReadonlySignalLike(createConnectivityState()),
  };
}

function createMockBaseEventData() {
  return {
    connectivity: createConnectivityApiContent(),
    device: {name: 'Mock POS Device', deviceId: 1, isTablet: false},
    locale: 'en-US',
    session: {
      ...createSessionCurrentSession(),
      staffMemberId: 1,
    },
    storage: createStorage(),
  };
}

function createMockStandardApi<T extends RenderExtensionTarget>(
  target: T,
): StandardApi<T> {
  return {
    extensionPoint: target,
    extension: {
      apiVersion: '2026-04',
      target,
    },
    i18n: createMockI18n(),
    locale: {current: createReadonlySignalLike('en-US')},
    toast: {show: () => {}},
    session: {
      currentSession: createSessionCurrentSession(),
      staffMember: createReadonlySignalLike(createStaffMember()),
      getSessionToken: async () => 'mock-session-token',
      deviceId: 1,
    },
    print: {print: async () => {}},
    printing: {
      getPrinters: async () => [],
      print: async () => {},
    },
    productSearch: {
      searchProducts: async () => ({items: [], hasNextPage: false}),
      fetchProductWithId: async () => undefined,
      fetchProductsWithIds: async () => ({
        fetchedResources: [],
        idsForResourcesNotFound: [],
      }),
      fetchProductVariantWithId: async () => undefined,
      fetchProductVariantsWithIds: async () => ({
        fetchedResources: [],
        idsForResourcesNotFound: [],
      }),
      fetchProductVariantsWithProductId: async () => [],
      fetchPaginatedProductVariantsWithProductId: async () => ({
        items: [],
        hasNextPage: false,
      }),
    },
    device: {
      name: 'Mock POS Device',
      registerName: 'Register 1',
      getDeviceId: async () => 'mock-device-id',
      isTablet: async () => false,
    },
    connectivity: {
      current: createReadonlySignalLike(createConnectivityState()),
    },
    storage: createStorage(),
    pinPad: {showPinPad: () => {}},
    camera: {
      takePhoto: async () => ({
        base64: '',
        width: 0,
        height: 0,
        fileSize: 0,
        type: 'image/jpeg',
      }),
    },
  };
}

function createMockActionTargetApi<T extends RenderExtensionTarget>(
  target: T,
): ActionTargetApi<T> {
  return {
    ...createMockStandardApi(target),
    extensionPoint: target,
    ...createMockScannerApi(),
  };
}

function createMockScannerApi(): ScannerApi {
  return {
    scanner: {
      scannerData: {
        current: createReadonlySignalLike({
          data: undefined,
          source: undefined,
        }),
      },
      sources: {
        current: createReadonlySignalLike<ScannerSource[]>([]),
      },
      showCameraScanner: () => {},
      hideCameraScanner: () => {},
    },
  };
}

function createMockActionApi(): ActionApi {
  return {action: {presentModal: () => {}}};
}

function createMockCartApi(): CartApi {
  return {
    cart: {
      current: createReadonlySignalLike(createPosCart()),
      bulkCartUpdate: async () => createResult('bulkCartUpdate'),
      applyCartDiscount: async () => {},
      addCartCodeDiscount: async () => {},
      removeCartDiscount: async () => {},
      removeAllDiscounts: async () => {},
      clearCart: async () => {},
      setCustomer: async () => {},
      removeCustomer: async () => {},
      addCustomSale: async () => '',
      addLineItem: async () => '',
      updateLineItemQuantity: async () => {},
      removeLineItem: async () => {},
      addCartProperties: async () => {},
      removeCartProperties: async () => {},
      addLineItemProperties: async () => {},
      bulkAddLineItemProperties: async () => {},
      removeLineItemProperties: async () => {},
      setLineItemDiscount: async () => {},
      bulkSetLineItemDiscounts: async () => {},
      setAttributedStaff: async () => {},
      setAttributedStaffToLineItem: async () => {},
      removeLineItemDiscount: async () => {},
      addAddress: async () => {},
      deleteAddress: async () => {},
      updateDefaultAddress: async () => {},
      addLineItemSellingPlan: async () => {},
      removeLineItemSellingPlan: async () => {},
    },
  };
}

function applyMockMetafieldChange(
  change: MetafieldChange,
): Promise<MetafieldChangeResult>;
function applyMockMetafieldChange(
  changes: MetafieldChange[],
): Promise<MetafieldChangeResult[]>;
async function applyMockMetafieldChange(
  input: MetafieldChange | MetafieldChange[],
): Promise<MetafieldChangeResult | MetafieldChangeResult[]> {
  const success: MetafieldChangeResult = {type: 'success'};
  return Array.isArray(input) ? input.map(() => ({...success})) : success;
}

function createMockMetafieldApi(): MetafieldApi {
  return {applyMetafieldChange: applyMockMetafieldChange};
}

function createMockOrderApi(): OrderApi {
  return {order: {id: 1, name: '#1001', customerId: undefined}};
}

function createMockProductApi(): ProductApi {
  return {product: {id: 1, variantId: 1}};
}

function createMockCustomerApi(): CustomerApi {
  return {customer: {id: 1}};
}

function createMockDraftOrderApi(): DraftOrderApi {
  return {draftOrder: {id: 1, name: '#D1', customerId: undefined}};
}

function createMockCartLineItemApi(): CartLineItemApi {
  return {cartLineItem: createCartLineItem()};
}

function createMockCashDrawerApi(): CashDrawerApi {
  return {cashDrawer: {open: async () => {}}};
}

// ---------------------------------------------------------------------------
// Group factory functions — each composes the correct API for a target group
// ---------------------------------------------------------------------------

// Group A: StandardApi + ActionApi + CartApi + MetafieldApi + CashDrawerApi
function createStandardActionCartCashDrawerMock<
  T extends RenderExtensionTarget,
>(
  target: T,
): StandardApi<T> & ActionApi & CartApi & MetafieldApi & CashDrawerApi {
  return {
    ...createMockStandardApi(target),
    ...createMockActionApi(),
    ...createMockCartApi(),
    ...createMockMetafieldApi(),
    ...createMockCashDrawerApi(),
  };
}

// Group B: ActionTargetApi + CartApi + MetafieldApi + CashDrawerApi
function createActionTargetCartCashDrawerMock<T extends RenderExtensionTarget>(
  target: T,
): ActionTargetApi<T> & CartApi & MetafieldApi & CashDrawerApi {
  return {
    ...createMockActionTargetApi(target),
    ...createMockCartApi(),
    ...createMockMetafieldApi(),
    ...createMockCashDrawerApi(),
  };
}

// Group C: StandardApi + ActionApi + OrderApi
function createStandardActionOrderMock<T extends RenderExtensionTarget>(
  target: T,
): StandardApi<T> & ActionApi & OrderApi {
  return {
    ...createMockStandardApi(target),
    ...createMockActionApi(),
    ...createMockOrderApi(),
  };
}

// Group D: ActionTargetApi + OrderApi
function createActionTargetOrderMock<T extends RenderExtensionTarget>(
  target: T,
): ActionTargetApi<T> & OrderApi {
  return {
    ...createMockActionTargetApi(target),
    ...createMockOrderApi(),
  };
}

// Group E: StandardApi + ActionApi + CartApi + MetafieldApi + ProductApi
function createStandardActionCartProductMock<T extends RenderExtensionTarget>(
  target: T,
): StandardApi<T> & ActionApi & CartApi & MetafieldApi & ProductApi {
  return {
    ...createMockStandardApi(target),
    ...createMockActionApi(),
    ...createMockCartApi(),
    ...createMockMetafieldApi(),
    ...createMockProductApi(),
  };
}

// Group F: ActionTargetApi + CartApi + MetafieldApi + ProductApi
function createActionTargetCartProductMock<T extends RenderExtensionTarget>(
  target: T,
): ActionTargetApi<T> & CartApi & MetafieldApi & ProductApi {
  return {
    ...createMockActionTargetApi(target),
    ...createMockCartApi(),
    ...createMockMetafieldApi(),
    ...createMockProductApi(),
  };
}

// Group G: StandardApi + ActionApi + CartApi + MetafieldApi + OrderApi
function createStandardActionCartOrderMock<T extends RenderExtensionTarget>(
  target: T,
): StandardApi<T> & ActionApi & CartApi & MetafieldApi & OrderApi {
  return {
    ...createMockStandardApi(target),
    ...createMockActionApi(),
    ...createMockCartApi(),
    ...createMockMetafieldApi(),
    ...createMockOrderApi(),
  };
}

// Group H: ActionTargetApi + CartApi + MetafieldApi + OrderApi
function createActionTargetCartOrderMock<T extends RenderExtensionTarget>(
  target: T,
): ActionTargetApi<T> & CartApi & MetafieldApi & OrderApi {
  return {
    ...createMockActionTargetApi(target),
    ...createMockCartApi(),
    ...createMockMetafieldApi(),
    ...createMockOrderApi(),
  };
}

// Group I: StandardApi + ActionApi + CartApi + MetafieldApi + DraftOrderApi
function createStandardActionCartDraftOrderMock<
  T extends RenderExtensionTarget,
>(
  target: T,
): StandardApi<T> & ActionApi & CartApi & MetafieldApi & DraftOrderApi {
  return {
    ...createMockStandardApi(target),
    ...createMockActionApi(),
    ...createMockCartApi(),
    ...createMockMetafieldApi(),
    ...createMockDraftOrderApi(),
  };
}

// Group J: ActionTargetApi + DraftOrderApi + CartApi + MetafieldApi
function createActionTargetDraftOrderCartMock<T extends RenderExtensionTarget>(
  target: T,
): ActionTargetApi<T> & DraftOrderApi & CartApi & MetafieldApi {
  return {
    ...createMockActionTargetApi(target),
    ...createMockDraftOrderApi(),
    ...createMockCartApi(),
    ...createMockMetafieldApi(),
  };
}

// Group K: StandardApi + ActionApi + CartApi + MetafieldApi + CustomerApi
function createStandardActionCartCustomerMock<T extends RenderExtensionTarget>(
  target: T,
): StandardApi<T> & ActionApi & CartApi & MetafieldApi & CustomerApi {
  return {
    ...createMockStandardApi(target),
    ...createMockActionApi(),
    ...createMockCartApi(),
    ...createMockMetafieldApi(),
    ...createMockCustomerApi(),
  };
}

// Group L: ActionTargetApi + CartApi + MetafieldApi + CustomerApi
function createActionTargetCartCustomerMock<T extends RenderExtensionTarget>(
  target: T,
): ActionTargetApi<T> & CartApi & MetafieldApi & CustomerApi {
  return {
    ...createMockActionTargetApi(target),
    ...createMockCartApi(),
    ...createMockMetafieldApi(),
    ...createMockCustomerApi(),
  };
}

// Group M: StandardApi + ActionApi + CartApi + MetafieldApi + CartLineItemApi
function createStandardActionCartLineItemMock<T extends RenderExtensionTarget>(
  target: T,
): StandardApi<T> & ActionApi & CartApi & MetafieldApi & CartLineItemApi {
  return {
    ...createMockStandardApi(target),
    ...createMockActionApi(),
    ...createMockCartApi(),
    ...createMockMetafieldApi(),
    ...createMockCartLineItemApi(),
  };
}

// Group N: ActionTargetApi + CartApi + MetafieldApi + CartLineItemApi
function createActionTargetCartLineItemMock<T extends RenderExtensionTarget>(
  target: T,
): ActionTargetApi<T> & CartApi & MetafieldApi & CartLineItemApi {
  return {
    ...createMockActionTargetApi(target),
    ...createMockCartApi(),
    ...createMockMetafieldApi(),
    ...createMockCartLineItemApi(),
  };
}

// Group O: Receipt targets
function createReceiptMock<T extends RenderExtensionTarget>(
  _target: T,
): {[key: string]: unknown} & StorageApi & TransactionCompleteWithReprintData {
  return {
    ...createMockBaseEventData(),
    transaction: createTransaction(),
  };
}

// Group P: StandardApi + ActionApi + CashDrawerApi
function createStandardActionCashDrawerMock<T extends RenderExtensionTarget>(
  target: T,
): StandardApi<T> & ActionApi & CashDrawerApi {
  return {
    ...createMockStandardApi(target),
    ...createMockActionApi(),
    ...createMockCashDrawerApi(),
  };
}

// Group Q: ActionTargetApi + CashDrawerApi
function createActionTargetCashDrawerMock<T extends RenderExtensionTarget>(
  target: T,
): ActionTargetApi<T> & CashDrawerApi {
  return {
    ...createMockActionTargetApi(target),
    ...createMockCashDrawerApi(),
  };
}

// Group R: StandardApi + ScannerApi + CartApi + MetafieldApi + ResolutionApi
function createCartValidationsResolutionMock<T extends RenderExtensionTarget>(
  target: T,
): StandardApi<T> &
  ScannerApi &
  CartApi &
  MetafieldApi &
  ResolutionApi<CartValidationsEventData> {
  return {
    ...createMockStandardApi(target),
    ...createMockScannerApi(),
    ...createMockCartApi(),
    ...createMockMetafieldApi(),
    resolution: {
      event: createReadonlySignalLike({cart: createPosCart()}),
      onSave: async () => async () => {},
    },
  };
}

// Group S: StandardApi + ScannerApi + ReadonlyCartApi + ResolutionApi
function createPaymentValidationsResolutionMock<
  T extends RenderExtensionTarget,
>(
  target: T,
): StandardApi<T> &
  ScannerApi &
  ReadonlyCartApi &
  ResolutionApi<PaymentValidationsEventData> {
  return {
    ...createMockStandardApi(target),
    ...createMockScannerApi(),
    cart: {current: createReadonlySignalLike(createPosCart())},
    resolution: {
      event: createReadonlySignalLike({
        paymentMethod: {type: 'cash' as const},
        amount: {amount: '10.00', currencyCode: 'USD'},
      }),
      onSave: async () => async () => {},
    },
  };
}

// Data target factories
function createDataTargetMock<T extends ExtensionTarget>(
  target: T,
): DataTargetApi<T> {
  return {
    extensionPoint: target,
    extension: {
      apiVersion: '2026-04',
      target,
    },
    i18n: createMockI18n(),
    session: {
      currentSession: createSessionCurrentSession(),
      staffMember: createReadonlySignalLike(createStaffMember()),
      getSessionToken: async () => 'mock-session-token',
      deviceId: 1,
    },
    storage: createStorage(),
    locale: {current: createReadonlySignalLike('en-US')},
    connectivity: {
      current: createReadonlySignalLike(createConnectivityState()),
    },
    device: {
      name: 'Mock POS Device',
      registerName: 'Register 1',
      getDeviceId: async () => 'mock-device-id',
      isTablet: async () => false,
    },
    productSearch: {
      searchProducts: async () => ({items: [], hasNextPage: false}),
      fetchProductWithId: async () => undefined,
      fetchProductsWithIds: async () => ({
        fetchedResources: [],
        idsForResourcesNotFound: [],
      }),
      fetchProductVariantWithId: async () => undefined,
      fetchProductVariantsWithIds: async () => ({
        fetchedResources: [],
        idsForResourcesNotFound: [],
      }),
      fetchProductVariantsWithProductId: async () => [],
      fetchPaginatedProductVariantsWithProductId: async () => ({
        items: [],
        hasNextPage: false,
      }),
    },
    ...createMockCartApi(),
  };
}

// ---------------------------------------------------------------------------
// Factory map — TypeScript verifies each entry against ApiForPosExtension<K>
// ---------------------------------------------------------------------------

type PosMockFactory = {
  [K in ExtensionTarget]: (target: K) => ApiForPosExtension<K>;
};

const posMockFactories: PosMockFactory = {
  // Group A: StandardApi + ActionApi + CartApi + MetafieldApi + CashDrawerApi
  'pos.home.tile.render': createStandardActionCartCashDrawerMock,

  // Group B: ActionTargetApi + CartApi + MetafieldApi + CashDrawerApi
  'pos.home.modal.render': createActionTargetCartCashDrawerMock,

  // Group C: StandardApi + ActionApi + OrderApi
  'pos.return.post.action.menu-item.render': createStandardActionOrderMock,
  'pos.return.post.block.render': createStandardActionOrderMock,
  'pos.exchange.post.action.menu-item.render': createStandardActionOrderMock,
  'pos.exchange.post.block.render': createStandardActionOrderMock,
  'pos.purchase.post.action.menu-item.render': createStandardActionOrderMock,
  'pos.purchase.post.block.render': createStandardActionOrderMock,

  // Group D: ActionTargetApi + OrderApi
  'pos.return.post.action.render': createActionTargetOrderMock,
  'pos.exchange.post.action.render': createActionTargetOrderMock,
  'pos.purchase.post.action.render': createActionTargetOrderMock,

  // Group E: StandardApi + ActionApi + CartApi + MetafieldApi + ProductApi
  'pos.product-details.action.menu-item.render':
    createStandardActionCartProductMock,
  'pos.product-details.block.render': createStandardActionCartProductMock,

  // Group F: ActionTargetApi + CartApi + MetafieldApi + ProductApi
  'pos.product-details.action.render': createActionTargetCartProductMock,

  // Group G: StandardApi + ActionApi + CartApi + MetafieldApi + OrderApi
  'pos.order-details.action.menu-item.render':
    createStandardActionCartOrderMock,
  'pos.order-details.block.render': createStandardActionCartOrderMock,

  // Group H: ActionTargetApi + CartApi + MetafieldApi + OrderApi
  'pos.order-details.action.render': createActionTargetCartOrderMock,

  // Group I: StandardApi + ActionApi + CartApi + MetafieldApi + DraftOrderApi
  'pos.draft-order-details.action.menu-item.render':
    createStandardActionCartDraftOrderMock,
  'pos.draft-order-details.block.render':
    createStandardActionCartDraftOrderMock,

  // Group J: ActionTargetApi + DraftOrderApi + CartApi + MetafieldApi
  'pos.draft-order-details.action.render': createActionTargetDraftOrderCartMock,

  // Group K: StandardApi + ActionApi + CartApi + MetafieldApi + CustomerApi
  'pos.customer-details.action.menu-item.render':
    createStandardActionCartCustomerMock,
  'pos.customer-details.block.render': createStandardActionCartCustomerMock,

  // Group L: ActionTargetApi + CartApi + MetafieldApi + CustomerApi
  'pos.customer-details.action.render': createActionTargetCartCustomerMock,

  // Group M: StandardApi + ActionApi + CartApi + MetafieldApi + CartLineItemApi
  'pos.cart.line-item-details.action.menu-item.render':
    createStandardActionCartLineItemMock,

  // Group N: ActionTargetApi + CartApi + MetafieldApi + CartLineItemApi
  'pos.cart.line-item-details.action.render':
    createActionTargetCartLineItemMock,

  // Group O: Receipt targets
  'pos.receipt-footer.block.render': createReceiptMock,
  'pos.receipt-header.block.render': createReceiptMock,

  // Group P: StandardApi + ActionApi + CashDrawerApi
  'pos.register-details.action.menu-item.render':
    createStandardActionCashDrawerMock,
  'pos.register-details.block.render': createStandardActionCashDrawerMock,

  // Group Q: ActionTargetApi + CashDrawerApi
  'pos.register-details.action.render': createActionTargetCashDrawerMock,

  // Group R: StandardApi + ScannerApi + CartApi + MetafieldApi + ResolutionApi
  'pos.cart.validations.resolution.render': createCartValidationsResolutionMock,

  // Group S: StandardApi + ScannerApi + ReadonlyCartApi + ResolutionApi
  'pos.payment.validations.resolution.render':
    createPaymentValidationsResolutionMock,

  // Data targets
  'pos.app.ready.data': createDataTargetMock,
};

// ---------------------------------------------------------------------------
// Main factory
// ---------------------------------------------------------------------------

/**
 * Creates a complete mock API for a POS extension target.
 *
 * For render targets this returns the full API object.
 * For event targets this returns the data object passed to the handler.
 */
export function createMockPosTargetApi<T extends ExtensionTarget>(
  target: T,
): ApiForPosExtension<T> {
  const factory = posMockFactories[target];
  if (!factory) {
    throw new Error(
      `Unsupported POS target: "${target}". ` +
        'Add an entry for this target in posMockFactories.',
    );
  }
  return factory(target);
}
