export type NavigationType = 'push' | 'replace' | 'traverse';

export interface NavigationOptions {
  state?: Record<string, any>;
  history: 'auto' | 'push' | 'replace';
}

export interface NavigationHistoryEntry {
  key: string;
  url: string;
  getState(): Record<string, any>;
}

export interface NavigationCurrentEntryChangeEvent {
  navigationType: NavigationType;
  from: NavigationHistoryEntry;
}

export interface StandardExtensionNavigation {
  navigate: NavigateFunction;
}

export type FullExtensionNavigation = StandardExtensionNavigation & {
  currentEntry: NavigationHistoryEntry;
  updateCurrentEntry(options: {state: Record<string, any>}): void;
};

export interface NavigateFunction {
  (url: string, options?: NavigationOptions): void;
}
