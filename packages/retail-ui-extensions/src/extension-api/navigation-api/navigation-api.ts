export interface NavigationApiContent {
  /** Dismisses the modal highest on the stack */
  dismiss(): void;
}

/**
 * Access the navigation API for navigation functionality from a full screen modal.
 */
export interface NavigationApi {
  navigation: NavigationApiContent;
}
