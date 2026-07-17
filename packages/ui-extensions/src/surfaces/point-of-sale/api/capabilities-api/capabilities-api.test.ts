import type {ReadonlySignalLike} from '../../../../shared';
import type {DataTargetApi} from '../data-target-api/data-target-api';
import type {StandardApi} from '../standard/standard-api';
import type {ShopifyGlobal} from '../../globals';
import type {InterceptCapability} from './capabilities-api';

function createSignal<T>(value: T): ReadonlySignalLike<T> {
  return {
    value,
    subscribe: () => () => undefined,
  };
}

describe('POS capabilities API', () => {
  it('is included in standard target APIs', () => {
    const capabilities: StandardApi<'pos.home.tile.render'>['capabilities'] =
      createSignal<InterceptCapability[]>([]);

    expect(capabilities.value).toStrictEqual([]);
  });

  it('is included in data target APIs', () => {
    const capabilities: DataTargetApi<'pos.app.ready.data'>['capabilities'] =
      createSignal<InterceptCapability[]>([]);

    expect(capabilities.value).toStrictEqual([]);
  });

  it('is included in the POS global API', () => {
    const capabilities: ShopifyGlobal['capabilities'] = createSignal<
      InterceptCapability[]
    >([]);

    expect(capabilities.value).toStrictEqual([]);
  });

  it('accepts all capabilities implied by an error grant', () => {
    const capabilities: InterceptCapability[] = [
      'beforecheckout.error',
      'beforecheckout.warning',
      'beforecheckout.info',
    ];

    expect(capabilities).toStrictEqual([
      'beforecheckout.error',
      'beforecheckout.warning',
      'beforecheckout.info',
    ]);
  });

  it('accepts a warning grant and info without error', () => {
    const capabilities: InterceptCapability[] = [
      'beforecheckout.warning',
      'beforecheckout.info',
    ];

    expect(capabilities).not.toContain('beforecheckout.error');
  });

  it('accepts only info with an info grant', () => {
    const capabilities: InterceptCapability[] = ['beforecheckout.info'];

    expect(capabilities).not.toContain('beforecheckout.error');
    expect(capabilities).not.toContain('beforecheckout.warning');
  });

  it('accepts an empty array when no intercept capabilities are granted', () => {
    const capabilities: InterceptCapability[] = [];

    expect(capabilities).toStrictEqual([]);
  });

  it('types intercept capabilities from event names and severity suffixes', () => {
    const capabilities: InterceptCapability[] = [
      // @ts-expect-error Event names must come from ShopifyInterceptMap.
      'unsupported.error',
      // @ts-expect-error Capability suffixes use `warning`, not `warn`.
      'beforecheckout.warn',
    ];

    expect(capabilities).toHaveLength(2);
  });
});
