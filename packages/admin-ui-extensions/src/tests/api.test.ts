import {extend} from '../api';

describe('extend()', () => {
  it('calls shopify extend', () => {
    Reflect.defineProperty(self, 'shopify', {value: {extend: jest.fn()}});

    const callback = () => {};
    extend('Playground', callback);

    expect((self as any).shopify.extend).toHaveBeenCalledWith(
      'Playground',
      callback,
    );
  });
});
