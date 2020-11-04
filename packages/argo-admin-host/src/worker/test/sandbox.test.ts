import {apply as applySandbox} from '../sandbox';

describe('sandbox', () => {
  it('applies denylist to target object', () => {
    const target = {
      foo: jest.fn(),
      bar: jest.fn(),
      xyz: jest.fn(),
    };
    const denylist = {
      foo: true,
      xyz: false,
    };
    applySandbox(target, denylist);

    expect(target.foo).toBeUndefined();
    expect(target.bar).toBe(target.bar);
    expect(target.xyz).toBe(target.xyz);
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
