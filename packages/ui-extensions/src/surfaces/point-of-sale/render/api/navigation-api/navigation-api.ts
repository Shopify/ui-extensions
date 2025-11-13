export interface NavigationApiContent {
  /**
   * Navigates to a specific URL within the extension, creating a new entry in the navigation history stack. The URL parameter specifies the destination path (for example, `/products`, `/settings/account`), and optional state data can be attached to the history entry.
   *
   * The method returns a promise that resolves when the navigation transition completes and the new view is rendered. Navigation is asynchronous to allow for animation transitions, data loading, or cleanup operations before the new view appears. If navigation fails (invalid URL, navigation prevented), the promise rejects with an error.
   *
   * Commonly used for programmatic navigation between extension screens (navigating on button clicks, redirecting after save operations), implementing custom navigation controls (sidebar navigation, breadcrumbs), handling navigation logic based on user actions or data state, or deep-linking to specific modal states with preserved context using the state parameter.
   */
  navigate(screenName: string, params?: any): void;

  /**
   * Pops the currently shown screen from the navigation stack. Use for implementing back navigation, returning to previous screens, or programmatically navigating backward in multi-screen workflows.
   */
  pop(): void;

  /**
   * Dismisses the extension modal completely. Use for closing the modal when workflows are complete, cancelled, or when users need to return to the main POS interface.
   */
  dismiss(): void;
}

/**
 * The `NavigationApi` object provides screen-based navigation functionality for modal interfaces. Access these methods through `api.navigation` to manage screen navigation and modal dismissal.
 */
export interface NavigationApi {
  navigation: NavigationApiContent;
}
