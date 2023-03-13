import {Destination} from 'extension-api/types';

export interface NavigationApiContent {
  /** Navigate to a route in current navigation tree.
   * Pushes the specified screen if it isn't present in the navigation tree, goes back to a created screen otherwise.
   * @param destination the `destination` `Screen` or `Modal` to navigate to.
   * @param params the parameters you want to pass to that screen.
   */
  navigate(destination: Destination, params?: any): void;

  /** Pops the currently shown screen */
  pop(): void;

  /** Dismisses the modal highest on the stack */
  dismiss(): void;
}

/**
 * Access the navigation API for navigation functionality from a full screen modal.
 */
export interface NavigationApi {
  navigation: NavigationApiContent;
}
