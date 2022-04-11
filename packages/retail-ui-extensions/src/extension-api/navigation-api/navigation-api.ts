export interface NavigationApiContent {
  /** Opens a full screen with the Retail::SmartGrid::Modal extension point */
  navigateToFullScreenModal(): void;

  /** Dismisses the modal highest on the stack */
  dismiss(): void;
}

/**
 * Access the navigation API to present your app in a full screen modal.
 */
export interface NavigationApi {
  navigation: NavigationApiContent;
}
