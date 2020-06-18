import {apply as applySandbox} from '../sandbox';

describe('sandbox', () => {
  it('applies denylist to target object', () => {
    const target = {
      foo: jest.fn(),
      bar: jest.fn(),
    };
    const denylist = {
      foo: true,
    };
    applySandbox(target, denylist);

    expect(target.foo).toBeUndefined();
    expect(target.bar).toBe(target.bar);
  });

  it('applies builtIns denylist to target object', () => {
    const target = {
      XMLHttpRequest: jest.fn(),
      importScripts: jest.fn(),
      eval: jest.fn(),
    };
    applySandbox(target);

    Object.keys(target).forEach((key) => {
      expect(target[key]).toBeUndefined();
    });
  });
});
