/**
 * Specifies configuration options for navigation operations. Allows passing custom state data that persists with the navigation entry in the history stack.
 */
export interface NavigationNavigateOptions {
  /**
   * Developer-defined data to be stored in the associated `NavigationHistoryEntry` once navigation completes. This can be any serializable data structure (objects, arrays, primitives) that you want to associate with this navigation state. The state is stored with the history entry and can be retrieved later using `getState()` on the history entry object. State persists across forward/back navigation and survives page refreshes in some implementations.
   *
   * Commonly used to pass data between navigation states without URL parameters (complex objects, sensitive data, UI state), implement stateful navigation workflows (wizard steps, form data preservation), restore previous view state when navigating back, or maintain context across navigation transitions. The state is cloned when stored to prevent mutation issues.
   */
  state?: unknown;
}

/**
 * Represents a single entry in the navigation history stack. Each entry corresponds to a navigation action and contains the destination URL, unique identifier, and optional state data. The history stack enables browser-like back/forward navigation within the extension.
 */
export interface NavigationHistoryEntry {
  /**
   * A unique identifier for this position in the navigation history stack. This is a user-agent-generated string that represents the entry's slot in the history list rather than identifying the URL or state itself. The key remains constant for this history position even if the URL or state changes. Two different navigations to the same URL will have different keys.
   *
   * The key is primarily used internally by navigation APIs and isn't typically useful for application logic—URLs and state are more practical for navigation decisions. Commonly used by frameworks for tracking history position or implementing navigation-based caching.
   */
  key: string;
  /**
   * The URL associated with this navigation history entry. For modal navigations within extensions, this is typically a path relative to the extension (for example, `/product/123`, `/settings`). Returns `null` when this history entry doesn't have an associated URL, which can occur for initial entries or certain navigation types.
   *
   * Commonly used for URL-based navigation logic (showing different views based on URL), implementing deep-linking (navigating directly to specific states using URL), displaying current location in breadcrumbs or address bars, or analyzing navigation patterns.
   */
  url: string | null;
  /**
   * Returns a clone of the state data associated with this history entry. The returned value is a deep copy of the state object that was passed during navigation using `NavigationNavigateOptions.state`, preventing accidental mutations of the historical state. Returns `undefined` when no state was provided during navigation. The state can contain any data structure you stored—type assertions or runtime validation may be needed since the return type is `unknown`.
   *
   * Commonly used to retrieve navigation context (wizard step data, filter settings, scroll positions), restore previous view state when navigating back, implement state-based navigation logic, or access data passed from previous screens without URL parameters.
   */
  getState(): unknown;
}

export interface Navigation {
  /**
   * Navigates to a specific URL within the extension, creating a new entry in the navigation history stack. The URL parameter specifies the destination path (for example, `/products`, `/settings/account`), and optional state data can be attached to the history entry.
   *
   * The method returns a promise that resolves when the navigation transition completes and the new view is rendered. Navigation is asynchronous to allow for animation transitions, data loading, or cleanup operations before the new view appears. If navigation fails (invalid URL, navigation prevented), the promise rejects with an error.
   *
   * Commonly used for programmatic navigation between extension screens (navigating on button clicks, redirecting after save operations), implementing custom navigation controls (sidebar navigation, breadcrumbs), handling navigation logic based on user actions or data state, or deep-linking to specific modal states with preserved context using the state parameter.
   */
  navigate: (url: string, options?: NavigationNavigateOptions) => Promise<void>;
  /**
   * The `NavigationHistoryEntry` object representing the current location where the user is navigated. This entry contains the current URL, navigation state, and unique position key. The object updates automatically when navigation occurs—reading this property always returns the current entry, not a cached value.
   *
   * Commonly used to access the current URL (determining which view is active, conditional rendering based on route), retrieve current navigation state (restoring UI state, reading passed parameters), implement navigation-aware UI (highlighting active nav items, showing contextual actions), or tracking navigation for analytics (page views, user flow analysis).
   */
  currentEntry: NavigationHistoryEntry;
  /**
   * Navigates backward to the previous entry in the navigation history stack, similar to a browser's back button. This moves the user to the screen they were viewing before the current one, restoring that screen's URL and state. The method returns immediately without waiting for the navigation to complete.
   *
   * If there is no previous entry (already at the first entry in the stack), this method has no effect—it doesn't throw an error or close the modal. The back navigation is treated as a new navigation event and may trigger navigation guards or callbacks if implemented.
   *
   * Commonly used for implementing back buttons (header back buttons, cancel actions that return to previous screen), providing escape routes from multi-step workflows, navigating up the breadcrumb hierarchy, or allowing users to undo navigation mistakes.
   */
  back(): void;
}

/**
 * The global `window` object provides control over the extension modal lifecycle. Access these properties and methods directly through the global `window` object to manage the modal interface programmatically.
 */
export interface Window {
  /**
   * Closes the extension modal and dismisses the full-screen interface, returning the user to the underlying POS screen. This method terminates the extension's execution context—any running timers, subscriptions, or pending operations are cleaned up. The modal dismissal may include closing animations depending on the platform. The method returns immediately without waiting for the modal to fully close.
   *
   * Once called, no further extension code executes, so ensure all necessary cleanup or save operations complete before calling `close()`.
   *
   * Commonly used to programmatically dismiss the modal after workflow completion (form submitted successfully, selection confirmed), cancel operations (user clicks cancel, invalid state detected), timeout scenarios (auto-close after period of inactivity), or when continued user interaction isn't required. This provides the same behavior and lifecycle as when the user dismisses the modal through the UI close button.
   */
  close(): void;
}
