import {extend, ShopifyGlobal} from '../api';
import {ExtensionPoint} from '../extension-point';

const shopifyGlobal: ShopifyGlobal = self as any;

describe('extend()', () => {
  it('calls shopify extend', () => {
    const {shopify: oldShopify} = shopifyGlobal;

    (shopifyGlobal as any).shopify = {extend: jest.fn()};

    const callback = () => {};
    extend(ExtensionPoint.Playground, callback);

    expect(shopifyGlobal.shopify.extend).toHaveBeenCalledWith(ExtensionPoint.Playground, callback);
  });
});
