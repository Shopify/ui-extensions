import type {
  AppHomeApi,
  Tools,
  ToolHandler,
  WithGeneratedTools,
} from '@shopify/ui-extensions/admin';

import {createMockAdminTargetApi} from '../admin/factories';
import {assertType, type Equals} from './type-assertions';

// ---------------------------------------------------------------------------
// Compile-time assertions
// ---------------------------------------------------------------------------

interface UpdateFaqInput {
  id: string;
  body: string;
}

interface UpdateFaqOutput {
  ok: boolean;
}

interface GeneratedTools {
  register(
    name: 'update_faq',
    handler: (input: UpdateFaqInput) => Promise<UpdateFaqOutput>,
  ): () => void;
}

type AppHome = AppHomeApi<'admin.app.home.render'>;
type AppHomeWithGenerated = WithGeneratedTools<AppHome, GeneratedTools>;

// AppHomeApi exposes the base `Tools` API (regression test for the missing
// `tools` property on `admin.app.home.render`).
assertType<Equals<AppHome['tools'], Tools>>();

// `WithGeneratedTools` keeps non-`register` members from the base `Tools` API
// (so `unregister` and `clear` stay available) while replacing `register`
// with the generated overloads.
assertType<
  Equals<AppHomeWithGenerated['tools']['unregister'], Tools['unregister']>
>();
assertType<Equals<AppHomeWithGenerated['tools']['clear'], Tools['clear']>>();
assertType<
  Equals<AppHomeWithGenerated['tools']['register'], GeneratedTools['register']>
>();

// Other `AppHomeApi` properties are preserved through the merge.
assertType<Equals<AppHomeWithGenerated['toast'], AppHome['toast']>>();
assertType<Equals<AppHomeWithGenerated['app'], AppHome['app']>>();
assertType<Equals<AppHomeWithGenerated['loading'], AppHome['loading']>>();

// When the base API has no `tools`, `WithGeneratedTools` introduces it.
interface NoToolsBase {
  extension: {target: 'noop'};
}
type NoToolsMerged = WithGeneratedTools<NoToolsBase, GeneratedTools>;
assertType<Equals<NoToolsMerged['tools'], GeneratedTools>>();

// `ToolHandler` is the generic fallback signature (Record in / Record out).
const handler: ToolHandler = async (input) => {
  return {received: Object.keys(input).length};
};

// ---------------------------------------------------------------------------
// Runtime behaviour of the mock factory
// ---------------------------------------------------------------------------

describe('admin tools api', () => {
  it('mocks register/unregister/clear with no-op functions', async () => {
    const api = createMockAdminTargetApi('admin.app.home.render');

    expect(typeof api.tools.register).toBe('function');
    const cleanup = api.tools.register('update_faq', handler);
    expect(typeof cleanup).toBe('function');

    // The generic handler is invokable and returns a plain record.
    const result = await handler({id: '1', body: 'hi'});
    expect(result).toStrictEqual({received: 2});

    expect(() => cleanup()).not.toThrow();
    expect(() => api.tools.unregister('update_faq')).not.toThrow();
    expect(() => api.tools.clear()).not.toThrow();
  });

  it('narrows the mock api type to the generated overloads when wrapped', () => {
    const baseApi = createMockAdminTargetApi('admin.app.home.render');
    // Cast at the boundary the way generated typings would augment it.
    const api = baseApi as unknown as AppHomeWithGenerated;

    // Generated overload: name + typed handler must match.
    const cleanup = api.tools.register('update_faq', async (input) => {
      // `input` is narrowed to `UpdateFaqInput`, so `id` is a string.
      return {ok: input.id.length > 0};
    });

    expect(typeof cleanup).toBe('function');
    expect(typeof api.tools.unregister).toBe('function');
    expect(typeof api.tools.clear).toBe('function');
  });
});
