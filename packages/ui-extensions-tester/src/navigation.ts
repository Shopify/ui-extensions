import type {
  Navigation,
  NavigationHistoryEntry,
} from '@shopify/ui-extensions/customer-account';

export type {
  Navigation,
  NavigationHistoryEntry,
  NavigationNavigateOptions,
} from '@shopify/ui-extensions/customer-account';

/**
 * Options for {@link createNavigationHistoryEntry}.
 */
export interface CreateNavigationResultOptions {
  /** The URL of the navigation history entry. Defaults to `''`. */
  url?: string;
  /** The `key` of the navigation history entry. Defaults to `''`. */
  key?: string;
  /**
   * Developer-defined state stored in the entry, retrieved via
   * `getState()`. Each call to `getState()` returns a structured
   * clone, matching the real browser behaviour.
   */
  state?: unknown;
}

/**
 * Creates a `NavigationHistoryEntry` suitable for mocking navigation
 * values such as `navigation.currentEntry`.
 *
 * ```ts
 * extension.navigation.currentEntry =
 *   createNavigationHistoryEntry({
 *     url: '/cart',
 *     state: { items: 3 },
 *   });
 * ```
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NavigationHistoryEntry
 */
export function createNavigationHistoryEntry(
  options?: CreateNavigationResultOptions,
): NavigationHistoryEntry {
  const {url = '', key = '', state} = options ?? {};
  return {
    url,
    key,
    getState() {
      return state === undefined
        ? undefined
        : JSON.parse(JSON.stringify(state));
    },
  };
}

/**
 * Creates a mock `Navigation` object matching the interface from
 * `@shopify/ui-extensions/customer-account`.  The default `navigate()`
 * is a no-op; `currentEntry` starts as a blank entry.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Navigation
 */
export function createMockNavigation(): Navigation {
  return {
    navigate: () => {},
    currentEntry: createNavigationHistoryEntry(),
    updateCurrentEntry: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
  };
}
