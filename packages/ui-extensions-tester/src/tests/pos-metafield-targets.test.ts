import type {
  CartApi,
  ExtensionTarget,
  ExtensionTargets,
  MetafieldApi,
  MetafieldChange,
} from '@shopify/ui-extensions/point-of-sale';

import {createMockPosTargetApi} from '../point-of-sale/factories';
import {createCartLineItem, createResult} from '../point-of-sale';

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
  lineItemUuid: 'mock-line-item-uuid',
  key: 'event_date',
};

type ApiForTarget<T extends ExtensionTarget> = ExtensionTargets[T] extends {
  api: infer Api;
}
  ? Api
  : never;

type TargetsWithApi<Api> = {
  [T in ExtensionTarget]: ApiForTarget<T> extends Api ? T : never;
}[ExtensionTarget];

type IsSameUnion<A, B> = [A] extends [B]
  ? [B] extends [A]
    ? true
    : false
  : false;

// `shopify.applyMetafieldChange()` is available on exactly the targets that
// have the Cart API.
describe('applyMetafieldChange', () => {
  it('is declared on exactly the targets that declare the Cart API', () => {
    const sameTargets: IsSameUnion<
      TargetsWithApi<CartApi>,
      TargetsWithApi<MetafieldApi>
    > = true;

    expect(sameTargets).toBe(true);
  });

  it('is declared on cart targets and not on targets without a cart', () => {
    const cartTarget: TargetsWithApi<MetafieldApi> = 'pos.home.tile.render';
    // @ts-expect-error Receipt targets don't have the Cart API.
    const receiptTarget: TargetsWithApi<MetafieldApi> =
      'pos.receipt-footer.block.render';
    // @ts-expect-error A read-only cart can't change metafields.
    const readonlyCartTarget: TargetsWithApi<MetafieldApi> =
      'pos.app.ready.data';

    expect([cartTarget, receiptTarget, readonlyCartTarget]).toHaveLength(3);
  });

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

describe('cart metafields', () => {
  it('starts with no cart metafields', () => {
    const api = createMockPosTargetApi('pos.home.modal.render');

    expect(api.cart.current.value.metafields).toStrictEqual([]);
  });

  it('creates line items with no metafields by default', () => {
    expect(createCartLineItem().metafields).toStrictEqual([]);
  });

  it('creates line items with the given metafields', () => {
    const metafields = [
      {
        namespace: 'custom',
        key: 'event_date',
        type: 'date',
        value: '2027-03-14',
      },
    ];

    expect(createCartLineItem({metafields}).metafields).toStrictEqual(
      metafields,
    );
  });

  it('gives the selected cart line item no metafields by default', () => {
    const api = createMockPosTargetApi(
      'pos.cart.line-item-details.action.render',
    );

    expect(api.cartLineItem.metafields).toStrictEqual([]);
  });

  it('resolves bulkCartUpdate with a cart that has no metafields', () => {
    expect(createResult('bulkCartUpdate').metafields).toStrictEqual([]);
  });
});
