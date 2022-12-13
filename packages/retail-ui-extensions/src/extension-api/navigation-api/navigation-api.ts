import type {Modal} from '../types';

export interface NavigationApiContent {
  /** Contains the information about the currently presented modal */
  currentModal: Modal;

  /** Presents a new modal on top of the current one.
   * @param modal this interface contains the information about the path and any initial parameters.
   */
  presentModal(modal: Modal): void;

  /** Navigate to a route in current navigation tree.
   * Pushes the specified screen if it isn't present in the navigation tree, goes back to a created screen otherwise.
   * @param screenName the title of the screen you want to navigate to.
   * @param params the parameters you want to pass to that screen.
   */
  navigate(screenName: string, params?: any): void;

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
