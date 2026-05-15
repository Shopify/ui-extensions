import type {
  AppHomeApi,
  AppHomeIntents,
  AppHomeIntentRequest,
  Intents,
  ShopifyGeneratedIntentVariant,
  WithGeneratedIntents,
} from '@shopify/ui-extensions/admin';

import {createMockAdminTargetApi} from '../admin/factories';

// ---------------------------------------------------------------------------
// Compile-time assertions
// ---------------------------------------------------------------------------

type Equals<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
  ? 1
  : 2
  ? true
  : false;

function assertType<_T extends true>() {}

type AppHome = AppHomeApi<'admin.app.home.render'>;

// AppHomeApi exposes a richer `Intents` shape than `StandardApi`: a signal-
// like `request` is always present so the runtime can stream link intents
// into the long-lived extension instance.
assertType<Equals<AppHome['intents'], AppHomeIntents>>();
assertType<Equals<AppHome['intents']['request'], AppHomeIntentRequest>>();

// `AppHomeIntents` extends the base `Intents` so `launchUrl` and `invoke`
// remain reachable.
assertType<Equals<AppHomeIntents['launchUrl'], Intents['launchUrl']>>();
assertType<Equals<AppHomeIntents['invoke'], Intents['invoke']>>();

// `WithGeneratedIntents` narrows `request.value` to the generated payload
// union and preserves the signal-like shape.
interface CreateProductRequest {
  action: 'create';
  type: 'shopify/Product';
  data?: {title?: string};
}
type GeneratedVariants = ShopifyGeneratedIntentVariant<CreateProductRequest>;
type AppHomeWithGenerated = WithGeneratedIntents<AppHome, GeneratedVariants>;

assertType<
  Equals<
    AppHomeWithGenerated['intents']['request']['value'],
    CreateProductRequest | null
  >
>();

// Other `AppHomeApi` properties survive the merge.
assertType<Equals<AppHomeWithGenerated['toast'], AppHome['toast']>>();
assertType<Equals<AppHomeWithGenerated['tools'], AppHome['tools']>>();

// ---------------------------------------------------------------------------
// Runtime behaviour of the mock factory
// ---------------------------------------------------------------------------

describe('app home intents api', () => {
  it('starts with a null request and a no-op subscribe', () => {
    const api = createMockAdminTargetApi('admin.app.home.render');

    expect(api.intents.request.value).toBeNull();

    const callback = jest.fn();
    const unsubscribe = api.intents.request.subscribe(callback);

    // The mock subscriber is never invoked because the value is static.
    expect(callback).not.toHaveBeenCalled();
    expect(typeof unsubscribe).toBe('function');
    expect(() => unsubscribe()).not.toThrow();
  });

  it('exposes the standard `Intents` members alongside `request`', () => {
    const api = createMockAdminTargetApi('admin.app.home.render');

    // `launchUrl` and `invoke` come from the base `Intents` shape.
    expect(api.intents.launchUrl).toBeUndefined();
    expect(typeof api.intents.invoke).toBe('function');
  });
});
