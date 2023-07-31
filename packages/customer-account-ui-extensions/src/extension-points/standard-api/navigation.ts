type NavigationType = 'push' | 'replace' | 'traverse';

interface NavigationOptions {
  state?: Record<string, any>;
  type: 'auto' | 'push' | 'replace';
}

interface NavigationHistoryEntry {
  key: string;
  url: string;
  getState(): Record<string, any>;
}

interface NavigationCurrentEntryChangeEvent {
  type: NavigationType;
  from: NavigationHistoryEntry;
}

interface StandardExtensionNavigation {
  navigate: NavigateFunction;
}

type FullExtensionNavigation = StandardExtensionNavigation & {
  addEventListener(
    type: 'currententrychange',
    cb: (event: NavigationCurrentEntryChangeEvent) => void,
  ): void;
  removeEventListener(
    type: 'currententrychange',
    cb: (event: NavigationCurrentEntryChangeEvent) => void,
  ): void;
  currentEntry: NavigationHistoryEntry;
  updateCurrentEntry(options: {state: Record<string, any>}): void;
};

interface NavigateFunction {
  (url: string, options?: NavigationOptions): void;
}
