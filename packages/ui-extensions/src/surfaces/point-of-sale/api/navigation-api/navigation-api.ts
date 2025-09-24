export interface NavigationNavigateOptions {
  /**
   * Developer-defined information to be stored in the associated NavigationHistoryEntry once the navigation is complete, retrievable via getState().
   */
  state?: unknown;
}

/**
 * The NavigationHistoryEntry interface of the Navigation API represents a single navigation history entry.
 */
export interface NavigationHistoryEntry {
  /** Returns the key of the history entry. This is a unique, UA-generated value that represents the history entry's slot in the entries list rather than the entry itself. */
  key: string;
  /**
   * Returns the lowercased URL of this history entry.
   */
  url: string | null;
  /**
   * Returns a clone of the available state associated with this history entry.
   */
  getState(): unknown;
}

/**
 * The NavigationCurrentEntryChangeEvent interface of the Navigation API is the event object for the currententrychange event, which fires when the Navigation.currentEntry has changed.
 */
export interface NavigationCurrentEntryChangeEvent {
  /**
   * Returns the NavigationHistoryEntry that was navigated from.
   */
  from: NavigationHistoryEntry;
}

export interface Navigation {
  /**
   * The navigate() method navigates to a specific URL, updating any provided state in the history entries list.
   */
  navigate: NavigateFunction;
  /**
   * The currentEntry read-only property of the Navigation interface returns a NavigationHistoryEntry object representing the location the user is currently navigated to right now.
   */
  currentEntry: NavigationHistoryEntry;
  /**
   * The back() method of the Navigation interface navigates to the previous entry in the history list.
   */
  back(): void;
  addEventListener(
    type: 'currententrychange',
    cb: (event: NavigationCurrentEntryChangeEvent) => void,
  ): void;
  removeEventListener(
    type: 'currententrychange',
    cb: (event: NavigationCurrentEntryChangeEvent) => void,
  ): void;
}

export interface NavigateFunction {
  /**
   * Navigates to a specific URL, updating any provided state in the history entries list.
   * @param url The destination URL to navigate to.
   */
  (url: string, options?: NavigationNavigateOptions): void;
}
