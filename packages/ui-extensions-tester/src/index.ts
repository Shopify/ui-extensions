import * as fs from 'fs';
import * as path from 'path';

import type {AnyExtensionTarget, ApiForTarget} from './targets';
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

interface Extension<T extends AnyExtensionTarget> {
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
}

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
): Extension<T> {
  const configSearchDir =
    options?.configSearchDir ?? path.dirname(getCallerFile());
  const tomlPath = findToml(configSearchDir);
  const tomlDir = path.dirname(tomlPath);
  const tomlContent = fs.readFileSync(tomlPath, 'utf-8');
  validateApiVersion(tomlContent);
  const modulePath = parseTargetModule(tomlContent, target);
  const resolvedModule = path.resolve(tomlDir, modulePath);
  const checkout = isCheckoutTarget(target);
  const networkAccess = checkout && parseNetworkAccess(tomlContent);
  const apiAccess = checkout && parseApiAccess(tomlContent);

  let fetchImpl: typeof globalThis.fetch;
  let previousFetch: typeof globalThis.fetch | undefined;
  let navigationImpl = createMockNavigation();
  let previousNavigation: any;

  const ext = {
    setUp(): void {
      installFetchPolyfills();

      fetchImpl =
        checkout && !networkAccess && !apiAccess
          ? async () => {
              // Checkout is the only surface that currently enforces
              // fetch capabilities.
              throw new Error(
                'fetch() is not available. Add network_access = true or ' +
                  'api_access = true to [extensions.capabilities] in shopify.extension.toml.',
              );
            }
          : async () => new Response();

      previousFetch = (globalThis as any).fetch;
      previousNavigation = (globalThis as any).navigation;
      (globalThis as any).shopify = deepWritableProxy(
        createMockTargetApi(target),
      );
      (globalThis as any).fetch = fetchImpl;
      (globalThis as any).navigation = navigationImpl;
    },

    get shopify(): any {
      if (!(globalThis as any).shopify) {
        throw new Error(
          'You must call extension.setUp() before accessing extension.shopify.',
        );
      }
      return (globalThis as any).shopify;
    },

    get fetch(): typeof globalThis.fetch {
      return fetchImpl;
    },

    set fetch(fn: typeof globalThis.fetch) {
      fetchImpl = fn;
      (globalThis as any).fetch = fn;
    },

    get navigation() {
      return navigationImpl;
    },

    set navigation(obj: any) {
      navigationImpl = obj;
      (globalThis as any).navigation = obj;
    },

    async render(): Promise<void> {
      const mod = await import(resolvedModule);
      const renderFn = mod.default;
      if (typeof renderFn !== 'function') {
        throw new Error(
          `Expected default export of ${modulePath} to be a function, got ${typeof renderFn}`,
        );
      }
      await renderFn();
    },

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
      if (previousFetch === undefined) {
        delete (globalThis as any).fetch;
      } else {
        (globalThis as any).fetch = previousFetch;
      }
      if (previousNavigation === undefined) {
        delete (globalThis as any).navigation;
      } else {
        (globalThis as any).navigation = previousNavigation;
      }
      uninstallFetchPolyfills();
    },
  };

  return ext as Extension<T>;
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
      // stack[0] is getCallerFile, stack[1] is getExtension, stack[2] is the caller
      for (let i = 2; i < stack.length; i++) {
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
