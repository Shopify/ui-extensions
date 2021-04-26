import {extend, ShopifyGlobal} from '../api';

const shopifyGlobal: ShopifyGlobal = self as any;

describe('extend()', () => {
  it('calls shopify extend', () => {
    (shopifyGlobal as any).shopify = {extend: jest.fn()};

    const callback = () => {};
    extend('Playground', callback);

    expect(shopifyGlobal.shopify.extend).toHaveBeenCalledWith(
      'Playground',
      callback,
    );
  });
});
