import type {MetafieldChange} from '@shopify/ui-extensions/point-of-sale';

import {createMockPosTargetApi} from '../point-of-sale/factories';

const cartChange: MetafieldChange = {
  type: 'updateCartMetafield',
  metafield: {
    namespace: 'custom',
    key: 'gift_message',
    type: 'single_line_text_field',
    value: 'Happy birthday!',
  },
};

const lineChange: MetafieldChange = {
  type: 'removeCartLineMetafield',
  lineId: 'mock-line-item-uuid',
  key: 'event_date',
};

// `shopify.applyMetafieldChange()` is available wherever an extension can
// change the cart.
describe('applyMetafieldChange', () => {
  it.each([
    'pos.home.tile.render',
    'pos.home.modal.render',
    'pos.product-details.action.menu-item.render',
    'pos.product-details.action.render',
    'pos.product-details.block.render',
    'pos.order-details.action.menu-item.render',
    'pos.order-details.action.render',
    'pos.order-details.block.render',
    'pos.draft-order-details.action.menu-item.render',
    'pos.draft-order-details.action.render',
    'pos.draft-order-details.block.render',
    'pos.customer-details.action.menu-item.render',
    'pos.customer-details.action.render',
    'pos.customer-details.block.render',
    'pos.cart.line-item-details.action.menu-item.render',
    'pos.cart.line-item-details.action.render',
    'pos.cart.validations.resolution.render',
  ] as const)('is available on %s', (target) => {
    const api = createMockPosTargetApi(target);

    expect(typeof api.applyMetafieldChange).toBe('function');
  });

  it.each([
    'pos.app.ready.data',
    'pos.payment.validations.resolution.render',
    'pos.purchase.post.block.render',
    'pos.return.post.action.render',
    'pos.register-details.block.render',
    'pos.receipt-footer.block.render',
  ] as const)('is not available on %s', (target) => {
    const api = createMockPosTargetApi(target);

    expect(api).not.toHaveProperty('applyMetafieldChange');
  });

  it('resolves a single change with one success result', async () => {
    const api = createMockPosTargetApi('pos.home.modal.render');

    const result = await api.applyMetafieldChange(cartChange);

    expect(result).toStrictEqual({type: 'success'});
  });

  it('resolves a list of changes with one success result per change, in order', async () => {
    const api = createMockPosTargetApi('pos.home.modal.render');

    const results = await api.applyMetafieldChange([cartChange, lineChange]);

    expect(results).toStrictEqual([{type: 'success'}, {type: 'success'}]);
  });
});
