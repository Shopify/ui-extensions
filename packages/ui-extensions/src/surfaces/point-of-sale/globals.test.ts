import type {ReadonlySignalLike} from '../../shared';
import type {InterceptCapability} from './events';
import type {ShopifyGlobal} from './globals';

function createSignal<T>(value: T): ReadonlySignalLike<T> {
  return {
    value,
    subscribe: () => () => undefined,
  };
}

// POS expands cumulative grants at runtime. These tests cover the public type
// and signal shape used to represent the host-provided arrays.
describe('POS intercept capabilities', () => {
  it('accepts all capabilities implied by an error grant', () => {
    const capabilities: InterceptCapability[] = [
      'beforecheckout.error',
      'beforecheckout.warn',
      'beforecheckout.info',
    ];
    const global: ShopifyGlobal = {
      capabilities: createSignal(capabilities),
    };

    expect(global.capabilities.value).toStrictEqual(capabilities);
  });

  it('accepts info with a warning grant', () => {
    const capabilities: InterceptCapability[] = [
      'beforecheckout.warn',
      'beforecheckout.info',
    ];

    const global: ShopifyGlobal = {
      capabilities: createSignal(capabilities),
    };

    expect(global.capabilities.value).toStrictEqual(capabilities);
    expect(global.capabilities.value).not.toContain('beforecheckout.error');
  });

  it('accepts an empty array when no intercept permissions are granted', () => {
    const global: ShopifyGlobal = {
      capabilities: createSignal<InterceptCapability[]>([]),
    };

    expect(global.capabilities.value).toStrictEqual([]);
  });

  it('types capabilities from intercept event names and proposed suffixes', () => {
    const capabilities: InterceptCapability[] = [
      // @ts-expect-error Event names must come from ShopifyInterceptMap.
      'unsupported.error',
      // @ts-expect-error Capability suffixes use `warn`, not `warning`.
      'beforecheckout.warning',
    ];

    expect(capabilities).toHaveLength(2);
  });
});
