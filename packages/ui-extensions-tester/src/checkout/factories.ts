import type {
  ApiForExtension,
  ExtensionTarget,
  StandardApi,
  CheckoutApi,
  OrderConfirmationApi,
  CartLineItemApi,
  ShippingOptionItemApi,
  ShippingOptionListApi,
  PickupPointListApi,
  PickupLocationListApi,
  PickupLocationItemApi,
  PaymentOptionItemApi,
  RedeemableApi,
  Language,
} from '@shopify/ui-extensions/checkout';
import {createSubscribableSignalLike} from '../mocks/signals';
import {createMockI18n} from '../mocks/i18n';
import {createMoney} from '../mocks/money';
import {API_VERSION} from '../api-version';
import {
  createCartLine,
  createShippingOption,
  createPickupLocationOption,
  createStorage,
  createResult,
} from './index';

function createLanguage(): Language {
  return {isoCode: 'en'};
}

function createSharedApiMocks() {
  return {
    analytics: {
      publish: async () => true,
      visitor: async () => ({type: 'success' as const}),
    },
    i18n: createMockI18n(),
    sessionToken: {get: async () => 'mock-session-token'},
    shop: {
      id: 'gid://shopify/Shop/1',
      name: 'Mock Shop',
      storefrontUrl: 'https://mock-shop.myshopify.com',
      myshopifyDomain: 'mock-shop.myshopify.com',
    },
    storage: createStorage(),
  };
}

function createMockStandardApi<T extends ExtensionTarget>(
  target: T,
): StandardApi<T> {
  const shared = createSharedApiMocks();
  return {
    ...shared,
    appliedGiftCards: createSubscribableSignalLike([]),
    instructions: createSubscribableSignalLike({
      attributes: {canUpdateAttributes: true},
      delivery: {canSelectCustomAddress: true},
      discounts: {canUpdateDiscountCodes: true},
      lines: {
        canAddCartLine: true,
        canRemoveCartLine: true,
        canUpdateCartLine: true,
      },
      metafields: {canSetCartMetafields: true, canDeleteCartMetafield: true},
      notes: {canUpdateNote: true},
    }),
    appMetafields: createSubscribableSignalLike([]),
    attributes: createSubscribableSignalLike([]),
    availablePaymentOptions: createSubscribableSignalLike([]),
    buyerJourney: {
      intercept: async () => () => {},
      completed: createSubscribableSignalLike(false),
      steps: createSubscribableSignalLike([]),
      activeStep: createSubscribableSignalLike(undefined),
    },
    checkoutSettings: createSubscribableSignalLike({
      orderSubmission: 'ORDER',
      shippingAddress: {isEditable: true},
    }),
    checkoutToken: createSubscribableSignalLike(undefined),
    cost: {
      subtotalAmount: createSubscribableSignalLike(createMoney()),
      totalShippingAmount: createSubscribableSignalLike(undefined),
      totalTaxAmount: createSubscribableSignalLike(undefined),
      totalAmount: createSubscribableSignalLike(createMoney()),
    },
    deliveryGroups: createSubscribableSignalLike([]),
    discountCodes: createSubscribableSignalLike([]),
    discountAllocations: createSubscribableSignalLike([]),
    extension: {
      apiVersion: API_VERSION as any,
      capabilities: createSubscribableSignalLike([]),
      rendered: createSubscribableSignalLike(true),
      scriptUrl: 'https://example-cdn.com/extension.js',
      target,
    },
    extensionPoint: target,
    lines: createSubscribableSignalLike([]),
    localization: {
      currency: createSubscribableSignalLike({isoCode: 'USD' as const}),
      timezone: createSubscribableSignalLike('America/New_York' as const),
      language: createSubscribableSignalLike(createLanguage()),
      extensionLanguage: createSubscribableSignalLike(createLanguage()),
      country: createSubscribableSignalLike({isoCode: 'US' as const}),
      market: createSubscribableSignalLike(undefined),
    },
    note: createSubscribableSignalLike(undefined),
    query: async () => ({data: undefined, errors: []}),
    selectedPaymentOptions: createSubscribableSignalLike([]),
    settings: createSubscribableSignalLike({}),
    ui: {overlay: {close: () => {}}},
    version: '0.0.0',
    customerPrivacy: createSubscribableSignalLike({
      allowedProcessing: {
        analytics: true,
        marketing: true,
        preferences: true,
        saleOfData: true,
      },
      metafields: [],
      visitorConsent: {},
      shouldShowBanner: false,
      saleOfDataRegion: false,
    }),
    applyTrackingConsentChange: async () =>
      createResult('applyTrackingConsentChange'),
  };
}

function createMockCheckoutApi(): CheckoutApi {
  return {
    applyAttributeChange: async () => createResult('applyAttributeChange'),
    applyCartLinesChange: async () => createResult('applyCartLinesChange'),
    applyDiscountCodeChange: async () =>
      createResult('applyDiscountCodeChange'),
    applyGiftCardChange: async () => createResult('applyGiftCardChange'),
    applyMetafieldChange: async () => createResult('applyMetafieldChange'),
    applyNoteChange: async () => createResult('applyNoteChange'),
  };
}

function createMockOrderConfirmationApi(): OrderConfirmationApi {
  return {
    orderConfirmation: createSubscribableSignalLike({
      order: {id: 'gid://shopify/Order/1'},
      isFirstOrder: false,
    }),
  };
}

function createMockCartLineItemApi(): CartLineItemApi {
  return {
    target: createSubscribableSignalLike(createCartLine()),
  };
}

// ---------------------------------------------------------------------------
// Group factory functions — each composes the correct API for a target group
// ---------------------------------------------------------------------------

function createCheckoutStandardMock<T extends ExtensionTarget>(
  target: T,
): CheckoutApi & StandardApi<T> {
  return {...createMockStandardApi(target), ...createMockCheckoutApi()};
}

function createCheckoutCartLineItemMock<T extends ExtensionTarget>(
  target: T,
): CheckoutApi & CartLineItemApi & StandardApi<T> {
  return {
    ...createMockStandardApi(target),
    ...createMockCheckoutApi(),
    ...createMockCartLineItemApi(),
  };
}

function createCartLineItemMock<T extends ExtensionTarget>(
  target: T,
): CartLineItemApi & StandardApi<T> {
  return {...createMockStandardApi(target), ...createMockCartLineItemApi()};
}

function createCheckoutRedeemableMock<T extends ExtensionTarget>(
  target: T,
): RedeemableApi & CheckoutApi & StandardApi<T> {
  return {
    ...createMockStandardApi(target),
    ...createMockCheckoutApi(),
    applyRedeemableChange: async () => createResult('applyRedeemableChange'),
  };
}

function createCheckoutPaymentOptionItemMock<T extends ExtensionTarget>(
  target: T,
): PaymentOptionItemApi & CheckoutApi & StandardApi<T> {
  return {
    ...createMockStandardApi(target),
    ...createMockCheckoutApi(),
    applyPaymentMethodAttributesChange: async () =>
      createResult('applyPaymentMethodAttributesChange'),
  };
}

function createCheckoutShippingOptionListMock<T extends ExtensionTarget>(
  target: T,
): ShippingOptionListApi & CheckoutApi & StandardApi<T> {
  return {
    ...createMockStandardApi(target),
    ...createMockCheckoutApi(),
    target: createSubscribableSignalLike(undefined),
    deliverySelectionGroups: createSubscribableSignalLike(undefined),
  };
}

function createCheckoutShippingOptionItemMock<T extends ExtensionTarget>(
  target: T,
): ShippingOptionItemApi & CheckoutApi & StandardApi<T> {
  return {
    ...createMockStandardApi(target),
    ...createMockCheckoutApi(),
    target: createSubscribableSignalLike(createShippingOption()),
    isTargetSelected: createSubscribableSignalLike(false),
    renderMode: {overlay: false},
  };
}

function createCheckoutPickupLocationListMock<T extends ExtensionTarget>(
  target: T,
): PickupLocationListApi & CheckoutApi & StandardApi<T> {
  return {
    ...createMockStandardApi(target),
    ...createMockCheckoutApi(),
    isLocationFormVisible: createSubscribableSignalLike(false),
  };
}

function createCheckoutPickupPointListMock<T extends ExtensionTarget>(
  target: T,
): PickupPointListApi & CheckoutApi & StandardApi<T> {
  return {
    ...createMockStandardApi(target),
    ...createMockCheckoutApi(),
    isLocationFormVisible: createSubscribableSignalLike(false),
  };
}

function createCheckoutPickupLocationItemMock<T extends ExtensionTarget>(
  target: T,
): PickupLocationItemApi & CheckoutApi & StandardApi<T> {
  return {
    ...createMockStandardApi(target),
    ...createMockCheckoutApi(),
    target: createSubscribableSignalLike(createPickupLocationOption()),
    isTargetSelected: createSubscribableSignalLike(false),
  };
}

function createOrderConfirmationMock<T extends ExtensionTarget>(
  target: T,
): OrderConfirmationApi & StandardApi<T> {
  return {
    ...createMockStandardApi(target),
    ...createMockOrderConfirmationApi(),
  };
}

function createOrderConfirmationCartLineItemMock<T extends ExtensionTarget>(
  target: T,
): OrderConfirmationApi & CartLineItemApi & StandardApi<T> {
  return {
    ...createMockStandardApi(target),
    ...createMockOrderConfirmationApi(),
    ...createMockCartLineItemApi(),
  };
}

function createAddressAutocompleteSuggestMock<T extends ExtensionTarget>(
  target: T,
): ApiForExtension<T> {
  return {
    ...createMockAddressAutocompleteStandardApi(target),
    signal: new AbortController().signal,
    target: {value: '', field: 'address1' as const},
  } as ApiForExtension<T>;
}

function createAddressAutocompleteFormatSuggestionMock<
  T extends ExtensionTarget,
>(target: T): ApiForExtension<T> {
  return {
    ...createMockAddressAutocompleteStandardApi(target),
    target: {selectedSuggestion: {label: ''}},
  } as ApiForExtension<T>;
}

function createMockAddressAutocompleteStandardApi<T extends ExtensionTarget>(
  target: T,
) {
  const shared = createSharedApiMocks();
  return {
    ...shared,
    appMetafields: [],
    attributes: undefined,
    billingAddress: undefined,
    checkoutToken: undefined,
    extension: {
      apiVersion: API_VERSION as any,
      capabilities: [],
      editor: undefined,
      target,
      version: '0.0.0',
    },
    localization: {
      currency: {isoCode: 'USD' as const},
      timezone: 'America/New_York' as const,
      language: createLanguage(),
      extensionLanguage: createLanguage(),
      country: {isoCode: 'US' as const},
      market: undefined,
    },
    query: async () => ({data: undefined, errors: []}),
    settings: {},
    shippingAddress: undefined,
    version: '0.0.0',
  };
}

// ---------------------------------------------------------------------------
// Factory map — TypeScript verifies each entry against ApiForExtension<K>
// ---------------------------------------------------------------------------

type CheckoutMockFactory = {
  [K in ExtensionTarget]: (target: K) => ApiForExtension<K>;
};

const checkoutMockFactories: CheckoutMockFactory = {
  // CheckoutApi & StandardApi
  'purchase.checkout.actions.render-before': createCheckoutStandardMock,
  'Checkout::Actions::RenderBefore': createCheckoutStandardMock,
  'purchase.checkout.cart-line-list.render-after': createCheckoutStandardMock,
  'Checkout::CartLines::RenderAfter': createCheckoutStandardMock,
  'purchase.checkout.contact.render-after': createCheckoutStandardMock,
  'Checkout::Contact::RenderAfter': createCheckoutStandardMock,
  'Checkout::CustomerInformation::RenderAfter': createCheckoutStandardMock,
  'purchase.checkout.delivery-address.render-before':
    createCheckoutStandardMock,
  'Checkout::DeliveryAddress::RenderBefore': createCheckoutStandardMock,
  'purchase.checkout.delivery-address.render-after': createCheckoutStandardMock,
  'purchase.checkout.block.render': createCheckoutStandardMock,
  'Checkout::Dynamic::Render': createCheckoutStandardMock,
  'purchase.checkout.payment-option-item.action-required.render':
    createCheckoutStandardMock,
  'Checkout::PaymentMethod::RenderRequiredAction': createCheckoutStandardMock,
  'purchase.checkout.payment-method-list.render-before':
    createCheckoutStandardMock,
  'purchase.checkout.payment-method-list.render-after':
    createCheckoutStandardMock,
  'purchase.checkout.reductions.render-before': createCheckoutStandardMock,
  'Checkout::Reductions::RenderBefore': createCheckoutStandardMock,
  'purchase.checkout.reductions.render-after': createCheckoutStandardMock,
  'Checkout::Reductions::RenderAfter': createCheckoutStandardMock,
  'purchase.checkout.header.render-after': createCheckoutStandardMock,
  'purchase.checkout.footer.render-after': createCheckoutStandardMock,
  'purchase.checkout.chat.render': createCheckoutStandardMock,

  // CheckoutApi & CartLineItemApi & StandardApi
  'purchase.checkout.cart-line-item.render-after':
    createCheckoutCartLineItemMock,
  'Checkout::CartLineDetails::RenderAfter': createCheckoutCartLineItemMock,

  // CartLineItemApi & StandardApi
  'purchase.cart-line-item.line-components.render': createCartLineItemMock,
  'Checkout::CartLineDetails::RenderLineComponents': createCartLineItemMock,

  // RedeemableApi & CheckoutApi & StandardApi
  'purchase.checkout.gift-card.render': createCheckoutRedeemableMock,
  'Checkout::GiftCard::Render': createCheckoutRedeemableMock,

  // PaymentOptionItemApi & CheckoutApi & StandardApi
  'purchase.checkout.payment-option-item.details.render':
    createCheckoutPaymentOptionItemMock,
  'Checkout::PaymentMethod::Render': createCheckoutPaymentOptionItemMock,
  'purchase.checkout.payment-option-item.hosted-fields.render-after':
    createCheckoutPaymentOptionItemMock,
  'Checkout::PaymentMethod::HostedFields::RenderAfter':
    createCheckoutPaymentOptionItemMock,

  // ShippingOptionListApi & CheckoutApi & StandardApi
  'purchase.checkout.shipping-option-list.render-before':
    createCheckoutShippingOptionListMock,
  'Checkout::ShippingMethods::RenderBefore':
    createCheckoutShippingOptionListMock,
  'purchase.checkout.shipping-option-list.render-after':
    createCheckoutShippingOptionListMock,
  'Checkout::ShippingMethods::RenderAfter':
    createCheckoutShippingOptionListMock,

  // ShippingOptionItemApi & CheckoutApi & StandardApi
  'purchase.checkout.shipping-option-item.render-after':
    createCheckoutShippingOptionItemMock,
  'Checkout::ShippingMethodDetails::RenderAfter':
    createCheckoutShippingOptionItemMock,
  'purchase.checkout.shipping-option-item.details.render':
    createCheckoutShippingOptionItemMock,
  'Checkout::ShippingMethodDetails::RenderExpanded':
    createCheckoutShippingOptionItemMock,

  // PickupLocationListApi & CheckoutApi & StandardApi
  'purchase.checkout.pickup-location-list.render-before':
    createCheckoutPickupLocationListMock,
  'Checkout::PickupLocations::RenderBefore':
    createCheckoutPickupLocationListMock,
  'purchase.checkout.pickup-location-list.render-after':
    createCheckoutPickupLocationListMock,
  'Checkout::PickupLocations::RenderAfter':
    createCheckoutPickupLocationListMock,

  // PickupPointListApi & CheckoutApi & StandardApi
  'purchase.checkout.pickup-point-list.render-before':
    createCheckoutPickupPointListMock,
  'Checkout::PickupPoints::RenderBefore': createCheckoutPickupPointListMock,
  'purchase.checkout.pickup-point-list.render-after':
    createCheckoutPickupPointListMock,
  'Checkout::PickupPoints::RenderAfter': createCheckoutPickupPointListMock,

  // PickupLocationItemApi & CheckoutApi & StandardApi
  'purchase.checkout.pickup-location-option-item.render-after':
    createCheckoutPickupLocationItemMock,

  // OrderConfirmationApi & StandardApi
  'purchase.thank-you.block.render': createOrderConfirmationMock,
  'Checkout::ThankYou::Dynamic::Render': createOrderConfirmationMock,
  'purchase.thank-you.cart-line-list.render-after': createOrderConfirmationMock,
  'Checkout::ThankYou::CartLines::RenderAfter': createOrderConfirmationMock,
  'purchase.thank-you.customer-information.render-after':
    createOrderConfirmationMock,
  'Checkout::ThankYou::CustomerInformation::RenderAfter':
    createOrderConfirmationMock,
  'purchase.thank-you.header.render-after': createOrderConfirmationMock,
  'purchase.thank-you.footer.render-after': createOrderConfirmationMock,
  'purchase.thank-you.chat.render': createOrderConfirmationMock,
  'purchase.thank-you.announcement.render': createOrderConfirmationMock,

  // OrderConfirmationApi & CartLineItemApi & StandardApi
  'purchase.thank-you.cart-line-item.render-after':
    createOrderConfirmationCartLineItemMock,
  'Checkout::ThankYou::CartLineDetails::RenderAfter':
    createOrderConfirmationCartLineItemMock,

  // AddressAutocompleteStandardApi & AddressAutocompleteSuggestApi
  'purchase.address-autocomplete.suggest': createAddressAutocompleteSuggestMock,

  // AddressAutocompleteStandardApi & AddressAutocompleteFormatSuggestionApi
  'purchase.address-autocomplete.format-suggestion':
    createAddressAutocompleteFormatSuggestionMock,
};

// ---------------------------------------------------------------------------
// Main factory
// ---------------------------------------------------------------------------

/**
 * Creates a complete mock API for a checkout extension target.
 *
 * Each entry in the factory map is type-checked by TypeScript against
 * the concrete `ApiForExtension<K>` for that target. Indexing the mapped
 * type with generic `T` preserves the relationship, so no cast is needed.
 */
export function createMockCheckoutTargetApi<T extends ExtensionTarget>(
  target: T,
): ApiForExtension<T> {
  const factory = checkoutMockFactories[target];
  if (!factory) {
    throw new Error(
      `Unsupported checkout target: "${target}". ` +
        'Add an entry for this target in checkoutMockFactories.',
    );
  }
  return factory(target);
}
