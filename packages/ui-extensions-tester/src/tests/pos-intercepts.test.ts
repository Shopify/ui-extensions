import {getExtension} from '../index';
import {
  createCartValidationsEventData,
  createPaymentValidationsEventData,
} from '../point-of-sale';

import {createTestSandbox, type TestSandbox} from './helpers';

describe('shopify.intercept / extension.fireIntercept', () => {
  let sandbox: TestSandbox;

  beforeEach(() => {
    sandbox = createTestSandbox();
    sandbox.placeToml({target: 'pos.app.ready.data'});
  });

  afterEach(() => {
    sandbox.destroy();
  });

  function setUpExt() {
    const extension = getExtension('pos.app.ready.data', {
      configSearchDir: sandbox.tempDir,
    });
    extension.setUp();
    return extension;
  }

  it('exposes intercept on the shopify global', () => {
    const extension = setUpExt();
    const shopify = extension.shopify as any;
    expect(typeof shopify.intercept).toBe('function');
  });

  it('invokes the registered interceptor with the event name and data', () => {
    const extension = setUpExt();
    const shopify = extension.shopify as any;
    const interceptor = jest.fn().mockReturnValue({operations: []});
    shopify.intercept('cartvalidations', interceptor);

    const data = createCartValidationsEventData();
    const result = extension.fireIntercept('cartvalidations', data);

    expect(interceptor).toHaveBeenCalledWith({
      type: 'cartvalidations',
      cart: data.cart,
    });
    expect(result).toStrictEqual({operations: []});
  });

  it('returns the interceptor result, including blocking operations', () => {
    const extension = setUpExt();
    const shopify = extension.shopify as any;
    shopify.intercept('paymentvalidations', () => ({
      operations: [
        {
          validationAdd: {
            level: 'ERROR',
            handle: 'id-verification',
            target: '$.payment',
          },
        },
      ],
    }));

    const result = extension.fireIntercept(
      'paymentvalidations',
      createPaymentValidationsEventData({
        amount: {amount: '150.00', currencyCode: 'CAD'},
      }),
    );

    expect(result?.operations[0]?.validationAdd?.handle).toBe(
      'id-verification',
    );
  });

  it('returns undefined when no interceptor is registered', () => {
    const extension = setUpExt();

    const result = extension.fireIntercept(
      'cartvalidations',
      createCartValidationsEventData(),
    );

    expect(result).toBeUndefined();
  });

  it('rejects a non-function interceptor', () => {
    const extension = setUpExt();
    const shopify = extension.shopify as any;

    expect(() => shopify.intercept('cartvalidations', 'nope')).toThrow(
      TypeError,
    );
  });

  it('rejects an unsupported event name', () => {
    const extension = setUpExt();
    const shopify = extension.shopify as any;

    expect(() => shopify.intercept('checkout', jest.fn())).toThrow(
      /not a supported intercept event/,
    );
  });

  it('allows only one interceptor per event', () => {
    const extension = setUpExt();
    const shopify = extension.shopify as any;
    shopify.intercept('cartvalidations', jest.fn());

    expect(() => shopify.intercept('cartvalidations', jest.fn())).toThrow(
      /already registered/,
    );
  });

  it('unregisters via the returned function, allowing re-registration', () => {
    const extension = setUpExt();
    const shopify = extension.shopify as any;
    const first = jest.fn().mockReturnValue({operations: []});
    const unregister = shopify.intercept('cartvalidations', first);

    unregister();
    const second = jest.fn().mockReturnValue({operations: []});
    shopify.intercept('cartvalidations', second);
    extension.fireIntercept(
      'cartvalidations',
      createCartValidationsEventData(),
    );

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it('throws when the interceptor returns a Promise', () => {
    const extension = setUpExt();
    const shopify = extension.shopify as any;
    shopify.intercept('cartvalidations', async () => ({operations: []}));

    expect(() =>
      extension.fireIntercept(
        'cartvalidations',
        createCartValidationsEventData(),
      ),
    ).toThrow(/must be synchronous/);
  });

  it('clears interceptors between setUp calls', () => {
    const extension = setUpExt();
    const shopify = extension.shopify as any;
    shopify.intercept('cartvalidations', jest.fn());

    extension.tearDown();
    extension.setUp();

    const result = extension.fireIntercept(
      'cartvalidations',
      createCartValidationsEventData(),
    );
    expect(result).toBeUndefined();
  });
});

describe('event data factories', () => {
  it('creates cartvalidations data with an empty cart by default', () => {
    const data = createCartValidationsEventData();
    expect(data.cart.lineItems).toStrictEqual([]);
  });

  it('creates paymentvalidations data with cash defaults and accepts overrides', () => {
    const data = createPaymentValidationsEventData({
      amount: {amount: '99.00', currencyCode: 'USD'},
    });
    expect(data.paymentMethod.type).toBe('cash');
    expect(data.amount.amount).toBe('99.00');
  });
});
