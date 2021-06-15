import {extend} from '../api';

describe('extend()', () => {
  it('calls shopify extend', () => {
    global.self = {shopify: {extend: jest.fn()}} as any;
    const callback = () => {};
    extend('Playground', callback);

    expect((self as any).shopify.extend).toHaveBeenCalledWith(
      'Playground',
      callback,
    );
  });
});
