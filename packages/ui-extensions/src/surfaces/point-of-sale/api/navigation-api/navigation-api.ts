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
   * Returns the URL of this history entry.
   */
  url: string | null;
  /**
   * Returns a clone of the available state associated with this history entry.
   */
  getState(): unknown;
}

export interface Navigation {
  /**
   * The navigate() method navigates to a specific URL, updating any provided state in the history entries list.
   */
  navigate: (url: string, options?: NavigationNavigateOptions) => Promise<void>;
  /**
   * The currentEntry read-only property of the Navigation interface returns a NavigationHistoryEntry object representing the location the user is currently navigated to right now.
   */
  currentEntry: NavigationHistoryEntry;
  /**
   * The back() method of the Navigation interface navigates to the previous entry in the history list.
   */
  back(): void;
}

export interface Window {
  /**
   * The close() method of the window interface closes the extension screen.
   */
  close(): void;
}
