import {gidFromTarget} from '../admin/factories';

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
