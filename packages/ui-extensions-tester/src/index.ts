import * as fs from 'fs';
import * as path from 'path';

import type {
  AnyExtensionTarget,
  ApiForTarget,
  EventMapForTarget,
  InterceptMapForTarget,
} from './targets';
import type {InterceptResult} from '@shopify/ui-extensions/point-of-sale';
import {POS_INTERCEPT_NAMES} from '@shopify/ui-extensions/point-of-sale';
import {isCheckoutTarget} from './targets';
import {createMockTargetApi} from './mocks/target-apis';
import {createMockNavigation, type Navigation} from './navigation';
import {API_VERSION} from './api-version';
import {
  installFetchPolyfills,
  uninstallFetchPolyfills,
} from './fetch-polyfills';

export type {AnyExtensionTarget, ApiForTarget} from './targets';
export {createNavigationHistoryEntry} from './navigation';
export type {
  Navigation,
  NavigationHistoryEntry,
  NavigationNavigateOptions,
} from './navigation';

/**
 * Makes all properties in the API deeply mutable so tests can
 * override any value through the `extension.shopify` proxy:
 *
 *   extension.shopify.cart.current.value = createPosCart({lineItems: [...]});
 *   extension.shopify.i18n.translate = (key) => myTranslations[key];
 */
type Mutable<T> = T extends (...args: any[]) => any
  ? T
  : T extends object
  ? {-readonly [K in keyof T]: Mutable<T[K]>}
  : T;

/**
 * `Symbol.dispose` for runtimes that support it, with a polyfill
 * fallback so the library works on older Node versions too.
 */
export const SymbolDispose: typeof Symbol.dispose = ((Symbol as any).dispose ??
  Symbol.for('Symbol.dispose')) as typeof Symbol.dispose;

/**
 * Members shared by both {@link ExtensionHarness} (returned by
 * `getExtension`) and {@link DisposableExtensionHarness} (returned
 * by `setUpExtension`).
 */
interface BaseExtensionHarness<T extends AnyExtensionTarget> {
  /**
   * Imports and executes the extension module's default export,
   * rendering the extension into `document.body`.
   */
  render(): Promise<void>;

  /**
   * A mock `shopify` global, typed correctly for the target under test.
   *
   * You can mutate any property. Example:
   *
   * ```ts
   * extension.shopify.cart.current.value = { lineItems: [...] };
   * ```
   */
  shopify: Mutable<ApiForTarget<T>>;

  /**
   * A mock `fetch()` function installed as `globalThis.fetch` during
   * `setUp()`.
   *
   * Override it with a mock to control responses:
   *
   * ```ts
   * extension.fetch = vi.fn().mockResolvedValue(
   *   new Response(JSON.stringify({ ok: true })),
   * );
   * ```
   */
  fetch: typeof globalThis.fetch;

  /**
   * A mock `navigation` object installed as `globalThis.navigation`
   * during `setUp()`.
   *
   * Override its methods with mocks to control navigation behaviour:
   *
   * ```ts
   * import { createNavigationHistoryEntry } from '@shopify/ui-extensions-tester';
   * extension.navigation.navigate = vi.fn();
   * extension.navigation.currentEntry =
   *   createNavigationHistoryEntry({ url: '/cart' });
   * ```
   */
  navigation: Navigation;

  /**
   * Fires a host event at every listener registered via
   * `shopify.addEventListener(name, listener)`.
   *
   * Matches the `shopify.addEventListener` contract: listener return values
   * are ignored, and thrown errors are caught per-listener so one bad
   * listener doesn't block the others.
   *
   * Pass the same payload shape that the host dispatches at runtime:
   *
   * ```ts
   * shopify.addEventListener('transactioncomplete', (event) => { ... });
   *
   * extension.dispatch('transactioncomplete', {
   *   transactionType: 'Sale',
   *   orderId: 1,
   *   grandTotal: { amount: 10, currency: 'USD' },
   *   // ...
   * });
   * ```
   */
  dispatch<K extends keyof EventMapForTarget<T>>(
    type: K,
    event: EventMapForTarget<T>[K],
  ): void;

  /**
   * Runs the interceptor registered via `shopify.intercept(name, interceptor)`
   * and returns its `InterceptResult`, or `undefined` when no interceptor is
   * registered for the event.
   *
   * Matches the host contract: the event delivered to the interceptor is
   * `{type, ...data}`, and an interceptor that returns a Promise throws —
   * interceptors must be synchronous.
   *
   * ```ts
   * shopify.intercept('cartvalidations', (event) => { ... });
   *
   * const result = extension.fireIntercept(
   *   'cartvalidations',
   *   createCartValidationsEventData(),
   * );
   * expect(result?.operations).toEqual([]);
   * ```
   */
  fireIntercept<K extends keyof InterceptMapForTarget<T>>(
    type: K,
    data: Omit<InterceptMapForTarget<T>[K], 'type'>,
  ): InterceptResult | undefined;
}

/**
 * Returned by `getExtension`.  The caller is responsible for calling
 * `setUp()` before each test and `tearDown()` after.
 */
interface ExtensionHarness<T extends AnyExtensionTarget>
  extends BaseExtensionHarness<T> {
  /**
   * Sets up an extension environment for testing.
   *
   * For example, it creates a mock `shopify` global with some defaults.
   */
  setUp(): void;

  /**
   * Tears down the extension environment.
   *
   * For example, it resets the `shopify` global and clears `document.body`.
   */
  tearDown(): void;
}

/**
 * Returned by `setUpExtension`.  Already set up — tears down
 * automatically via `Symbol.dispose` (the `using` keyword):
 *
 * ```ts
 * using extension = setUpExtension('purchase.checkout.block.render');
 * ```
 */
interface DisposableExtensionHarness<T extends AnyExtensionTarget>
  extends BaseExtensionHarness<T> {
  [SymbolDispose](): void;
}

class Extension<T extends AnyExtensionTarget> implements ExtensionHarness<T> {
  #target: T;
  #resolvedModule: string;
  #modulePath: string;
  #checkout: boolean;
  #networkAccess: boolean;
  #apiAccess: boolean;

  #fetchImpl!: typeof globalThis.fetch;
  #previousFetch: typeof globalThis.fetch | undefined;
  #navigationImpl: Navigation = createMockNavigation();
  #previousNavigation: any;
  #eventListeners = new Map<string, Set<(event: any) => void>>();
  #interceptors = new Map<string, (event: any) => any>();

  constructor(target: T, options?: {configSearchDir?: string}) {
    const configSearchDir =
      options?.configSearchDir ?? path.dirname(getCallerFile());
    const tomlPath = findToml(configSearchDir);
    const tomlDir = path.dirname(tomlPath);
    const tomlContent = fs.readFileSync(tomlPath, 'utf-8');
    validateApiVersion(tomlContent);
    const modulePath = parseTargetModule(tomlContent, target);

    this.#target = target;
    this.#modulePath = modulePath;
    this.#resolvedModule = path.resolve(tomlDir, modulePath);
    this.#checkout = isCheckoutTarget(target);
    this.#networkAccess = this.#checkout && parseNetworkAccess(tomlContent);
    this.#apiAccess = this.#checkout && parseApiAccess(tomlContent);
  }

  setUp(): void {
    installFetchPolyfills();

    this.#fetchImpl =
      this.#checkout && !this.#networkAccess && !this.#apiAccess
        ? async () => {
            // Checkout is the only surface that currently enforces
            // fetch capabilities.
            throw new Error(
              'fetch() is not available. Add network_access = true or ' +
                'api_access = true to [extensions.capabilities] in shopify.extension.toml.',
            );
          }
        : async () => new Response();

    this.#previousFetch = (globalThis as any).fetch;
    this.#previousNavigation = (globalThis as any).navigation;
    this.#navigationImpl = createMockNavigation();
    this.#eventListeners.clear();
    this.#interceptors.clear();
    (globalThis as any).shopify = deepWritableProxy(
      Object.assign(createMockTargetApi(this.#target), {
        addEventListener: this.#addEventListener,
        removeEventListener: this.#removeEventListener,
        intercept: this.#intercept,
      }),
    );
    (globalThis as any).fetch = this.#fetchImpl;
    (globalThis as any).navigation = this.#navigationImpl;
  }

  #addEventListener = (type: string, listener: (event: any) => void): void => {
    let set = this.#eventListeners.get(type);
    if (!set) {
      set = new Set();
      this.#eventListeners.set(type, set);
    }
    set.add(listener);
  };

  #removeEventListener = (
    type: string,
    listener: (event: any) => void,
  ): void => {
    this.#eventListeners.get(type)?.delete(listener);
  };

  #intercept = (
    type: string,
    interceptor: (event: any) => any,
  ): (() => void) => {
    if (typeof interceptor !== 'function') {
      throw new TypeError('Interceptor must be a function');
    }
    const supported: ReadonlyArray<string> = Object.values(POS_INTERCEPT_NAMES);
    if (!supported.includes(type)) {
      throw new Error(
        `'${type}' is not a supported intercept event. Supported events: ${supported.join(
          ', ',
        )}.`,
      );
    }
    if (this.#interceptors.has(type)) {
      throw new Error(
        `An interceptor for '${type}' is already registered; only one interceptor per event type is allowed.`,
      );
    }
    this.#interceptors.set(type, interceptor);
    return () => {
      if (this.#interceptors.get(type) === interceptor) {
        this.#interceptors.delete(type);
      }
    };
  };

  fireIntercept<K extends keyof InterceptMapForTarget<T>>(
    type: K,
    data: Omit<InterceptMapForTarget<T>[K], 'type'>,
  ): InterceptResult | undefined {
    const interceptor = this.#interceptors.get(type as string);
    if (!interceptor) return undefined;
    const result = interceptor({type, ...data});
    if (
      result != null &&
      (typeof result === 'object' || typeof result === 'function') &&
      typeof (result as {then?: unknown}).then === 'function'
    ) {
      throw new Error(
        `An interceptor for '${String(
          type,
        )}' must be synchronous but it returned a Promise.`,
      );
    }
    return result;
  }

  dispatch<K extends keyof EventMapForTarget<T>>(
    type: K,
    event: EventMapForTarget<T>[K],
  ): void {
    const listeners = this.#eventListeners.get(type as string);
    if (!listeners) return;
    // Snapshot so listeners that register/unregister during dispatch
    // don't mutate the iteration.
    for (const listener of [...listeners]) {
      try {
        listener(event);
      } catch {
        // Fire-and-forget: per the shopify.addEventListener contract,
        // listener errors must not affect other listeners.
      }
    }
  }

  get shopify(): Mutable<ApiForTarget<T>> {
    if (!(globalThis as any).shopify) {
      throw new Error(
        'You must call extension.setUp() before accessing extension.shopify.',
      );
    }
    return (globalThis as any).shopify;
  }

  get fetch(): typeof globalThis.fetch {
    return this.#fetchImpl;
  }

  set fetch(fn: typeof globalThis.fetch) {
    this.#fetchImpl = fn;
    (globalThis as any).fetch = fn;
  }

  get navigation() {
    return this.#navigationImpl;
  }

  set navigation(obj: any) {
    this.#navigationImpl = obj;
    (globalThis as any).navigation = obj;
  }

  async render(): Promise<void> {
    const mod = await import(this.#resolvedModule);
    const renderFn = mod.default;
    if (typeof renderFn !== 'function') {
      throw new Error(
        `Expected default export of ${
          this.#modulePath
        } to be a function, got ${typeof renderFn}`,
      );
    }
    await renderFn();
  }

  tearDown(): void {
    // Dynamically import preact to unmount cleanly without requiring
    // the test file to depend on preact directly.
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const {render} = require('preact');
      render(null, document.body);
    } catch {
      // Fallback if preact isn't available
      document.body.innerHTML = '';
    }
    delete (globalThis as any).shopify;
    this.#eventListeners.clear();
    this.#interceptors.clear();
    if (this.#previousFetch === undefined) {
      delete (globalThis as any).fetch;
    } else {
      (globalThis as any).fetch = this.#previousFetch;
    }
    if (this.#previousNavigation === undefined) {
      delete (globalThis as any).navigation;
    } else {
      (globalThis as any).navigation = this.#previousNavigation;
    }
    uninstallFetchPolyfills();
  }
}

const extensionCache = new Map<string, Extension<any>>();

/**
 * Returns an extension test harness for the given target.
 *
 * It reads `shopify.extension.toml`, finds the module for the given target,
 * and provides helpers to mock the environment and render the extension.
 *
 * It locates `shopify.extension.toml` by walking up from the calling
 * test file's directory, and falls back to searching `extensions/`
 * under the current working directory.
 *
 * @param target - The extension target to mock.
 * @param options - Optional configuration.
 * @param options.configSearchDir - Directory containing (or a parent of)
 *   `shopify.extension.toml`. Defaults to the calling test file's directory.
 */
export function getExtension<T extends AnyExtensionTarget>(
  target: T,
  options?: {configSearchDir?: string},
): ExtensionHarness<T> {
  const resolvedConfigSearchDir =
    options?.configSearchDir ?? path.dirname(getCallerFile());
  const tomlPath = findToml(resolvedConfigSearchDir);
  const tomlMtimeMs = fs.statSync(tomlPath).mtimeMs;
  const cacheKey = JSON.stringify([target, tomlPath, tomlMtimeMs]);

  const cached = extensionCache.get(cacheKey);
  if (cached) {
    return cached as Extension<T>;
  }

  const ext = new Extension<T>(target, {
    configSearchDir: resolvedConfigSearchDir,
  });
  extensionCache.set(cacheKey, ext);
  return ext;
}

/**
 * Sets up an extension for testing and returns a disposable object
 * that supports automatic teardown with the `using` keyword:
 *
 * ```ts
 * test('rendering the extension', async () => {
 *   using extension = setUpExtension(
 *     'purchase.checkout.block.render',
 *   );
 *   await extension.render();
 *   // tearDown() is called automatically at the end of the block
 * });
 * ```
 *
 * @param target - The extension target to mock.
 * @param options - Optional configuration (same as {@link getExtension}).
 */
export function setUpExtension<T extends AnyExtensionTarget>(
  target: T,
  options?: {configSearchDir?: string},
): DisposableExtensionHarness<T> {
  const extension = getExtension(target, options);
  extension.setUp();

  return Object.assign(extension, {
    [SymbolDispose]: () => extension.tearDown(),
  }) as DisposableExtensionHarness<T>;
}

function validateApiVersion(toml: string): void {
  const match = toml.match(/^\s*api_version\s*=\s*"([^"]+)"/m);
  const tomlVersion = match?.[1];
  if (tomlVersion !== API_VERSION) {
    throw new Error(
      `api_version "${tomlVersion ?? '(not found)'}" does not match ` +
        `the version supported by @shopify/ui-extensions-tester ("${API_VERSION}"). ` +
        `Update api_version in shopify.extension.toml or install the matching tester version.`,
    );
  }
}

function parseCapability(toml: string, key: string): boolean {
  const lines = toml.split('\n');
  let inCapabilities = false;
  const pattern = new RegExp(`^${key}\\s*=\\s*(.+)`);

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed === '[extensions.capabilities]') {
      inCapabilities = true;
      continue;
    }

    // A new section header ends the capabilities block
    if (trimmed.startsWith('[')) {
      inCapabilities = false;
      continue;
    }

    if (inCapabilities) {
      const match = trimmed.match(pattern);
      if (match) {
        return match[1]!.trim() === 'true';
      }
    }
  }

  return false;
}

function parseNetworkAccess(toml: string): boolean {
  return parseCapability(toml, 'network_access');
}

function parseApiAccess(toml: string): boolean {
  return parseCapability(toml, 'api_access');
}

// Resolve the path of this module from a stack trace at load time.
// This works in both CJS (__filename available) and ESM (where __filename
// is not defined) without relying on import.meta.url.
function getCurrentFilePath(): string {
  const originalPrepare = Error.prepareStackTrace;
  try {
    let filePath = '';
    Error.prepareStackTrace = (_err, stack) => {
      filePath = stack[0]?.getFileName() ?? '';
    };
    // eslint-disable-next-line @babel/no-unused-expressions
    new Error().stack;
    return filePath;
  } finally {
    Error.prepareStackTrace = originalPrepare;
  }
}

// Resolved at module load time so the stack frame reliably points to this
// file, even if a bundler inlines or merges modules later.
const thisPackageFilePath = getCurrentFilePath();

function getCallerFile(): string {
  const originalPrepare = Error.prepareStackTrace;
  try {
    const err = new Error();
    let callerFile = '';

    Error.prepareStackTrace = (_err, stack) => {
      // Walk the stack, skipping all frames that originate from this
      // package file.  This works regardless of whether the caller is
      // getExtension() or setUpExtension() → getExtension().
      for (let i = 1; i < stack.length; i++) {
        const fileName = stack[i]!.getFileName();
        if (fileName && fileName !== thisPackageFilePath) {
          callerFile = fileName;
          break;
        }
      }
    };

    // Trigger stack trace preparation
    // eslint-disable-next-line @babel/no-unused-expressions
    err.stack;

    if (!callerFile) {
      throw new Error('Could not determine caller file from stack trace');
    }

    // Handle file:// URLs (ESM)
    if (callerFile.startsWith('file://')) {
      return new URL(callerFile).pathname;
    }

    return callerFile;
  } finally {
    Error.prepareStackTrace = originalPrepare;
  }
}

function findToml(startDir: string): string {
  // First, walk up from the start directory looking for shopify.extension.toml
  let dir = startDir;
  const root = path.parse(dir).root;

  while (dir !== root) {
    const candidate = path.join(dir, 'shopify.extension.toml');
    if (fs.existsSync(candidate)) {
      return candidate;
    }
    dir = path.dirname(dir);
  }

  // If not found walking up, search from cwd (project root) in extensions/*/
  const cwd = process.cwd();
  const extensionsDir = path.join(cwd, 'extensions');
  if (fs.existsSync(extensionsDir)) {
    const entries = fs.readdirSync(extensionsDir, {withFileTypes: true});
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const candidate = path.join(
          extensionsDir,
          entry.name,
          'shopify.extension.toml',
        );
        if (fs.existsSync(candidate)) {
          return candidate;
        }
      }
    }
  }

  throw new Error(
    `Could not find shopify.extension.toml in any parent directory of ${startDir} or in extensions/ under ${cwd}`,
  );
}

function parseTargetModule(toml: string, target: string): string {
  // Simple TOML parser for [[extensions.targeting]] sections.
  // Looks for blocks with matching target and extracts the module.
  const lines = toml.split('\n');
  let inTargeting = false;
  let currentTarget = '';
  let currentModule = '';

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed === '[[extensions.targeting]]') {
      // Save previous block if it matched
      if (inTargeting && currentTarget === target && currentModule) {
        return currentModule;
      }
      inTargeting = true;
      currentTarget = '';
      currentModule = '';
      continue;
    }

    // A new section header ends the current targeting block
    if (trimmed.startsWith('[') && trimmed !== '[[extensions.targeting]]') {
      if (inTargeting && currentTarget === target && currentModule) {
        return currentModule;
      }
      inTargeting = false;
      continue;
    }

    if (inTargeting) {
      const targetMatch = trimmed.match(/^target\s*=\s*"(.+)"/);
      if (targetMatch) {
        currentTarget = targetMatch[1]!;
      }
      const moduleMatch = trimmed.match(/^module\s*=\s*"(.+)"/);
      if (moduleMatch) {
        currentModule = moduleMatch[1]!;
      }
    }
  }

  // Check last block
  if (inTargeting && currentTarget === target && currentModule) {
    return currentModule;
  }

  throw new Error(
    `Could not find target "${target}" in shopify.extension.toml`,
  );
}

/**
 * Creates a recursive proxy that makes all properties writable.
 * For nested objects, returns another proxy so that deep assignments
 * like `extension.shopify.cart.current.value = ...` work.
 */
function deepWritableProxy(obj: any): any {
  if (obj == null || typeof obj !== 'object') return obj;

  function assertExists(target: any, prop: string | symbol) {
    if (typeof prop !== 'symbol' && prop !== 'toJSON' && !(prop in target)) {
      throw new Error(
        `Property "${String(
          prop,
        )}" does not exist on the shopify API for this target.`,
      );
    }
  }

  return new Proxy(obj, {
    get(target: any, prop: string | symbol) {
      assertExists(target, prop);
      const val = target[prop];
      if (val != null && typeof val === 'object' && !Array.isArray(val)) {
        return deepWritableProxy(val);
      }
      return val;
    },
    set(target: any, prop: string | symbol, newValue: any) {
      assertExists(target, prop);
      target[prop] = newValue;
      return true;
    },
  });
}
