import {createMockAdminTargetApi, gidFromTarget} from '../admin/factories';

describe('gidFromTarget', () => {
  it.each([
    ['admin.product-details.block.render', 'gid://shopify/Product/1'],
    ['admin.order-details.action.render', 'gid://shopify/Order/1'],
    ['admin.draft-order-index.action.render', 'gid://shopify/DraftOrder/1'],
    [
      'admin.company-location-details.block.render',
      'gid://shopify/CompanyLocation/1',
    ],
    ['admin.gift-card-details.block.render', 'gid://shopify/GiftCard/1'],
    [
      'admin.product-variant-details.action.render',
      'gid://shopify/ProductVariant/1',
    ],
    [
      'admin.customer-segment-details.action.render',
      'gid://shopify/CustomerSegment/1',
    ],
    [
      'admin.abandoned-checkout-details.block.render',
      'gid://shopify/AbandonedCheckout/1',
    ],
    ['admin.order-fulfilled-card.action.render', 'gid://shopify/Order/1'],
    ['admin.collection-index.action.render', 'gid://shopify/Collection/1'],
    ['admin.product-purchase-option.action.render', 'gid://shopify/Product/1'],
  ] as const)('%s → %s', (target, expectedGid) => {
    expect(gidFromTarget(target)).toBe(expectedGid);
  });
});

describe('createMockAdminTargetApi', () => {
  it('keeps app tools targets on the standard api', () => {
    const api = createMockAdminTargetApi('admin.app.tools.data');

    expect(api.extension.target).toBe('admin.app.tools.data');
    expect(typeof api.query).toBe('function');
    expect(api).not.toHaveProperty('tools');
    expect(api).not.toHaveProperty('resourcePicker');
  });

  it('creates an app home api with loading controls', () => {
    const api = createMockAdminTargetApi('admin.app.home.render');

    expect(api.extension.target).toBe('admin.app.home.render');
    expect(typeof api.toast.show).toBe('function');
    expect(typeof api.app.extensions).toBe('function');
    expect(typeof api.loading).toBe('function');
  });

  it('creates a standard rendering api for app intent targets', () => {
    const api = createMockAdminTargetApi('admin.app.intent.render');

    expect(api.extension.target).toBe('admin.app.intent.render');
    expect(typeof api.resourcePicker).toBe('function');
    expect(typeof api.picker).toBe('function');
    expect(api).not.toHaveProperty('tools');
    expect(typeof api.intents.response?.ok).toBe('function');
    expect(typeof api.intents.response?.error).toBe('function');
    expect(typeof api.intents.response?.closed).toBe('function');
    expect(api).not.toHaveProperty('close');
  });
});
