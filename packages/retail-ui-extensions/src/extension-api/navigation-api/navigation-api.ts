export interface NavigationApiContent {
  /** The name of the current screen on the stack.
   * This property can be used to evaluate which component you want to mount.
   */
  currentScreen?: string;

  /** Dismisses the modal highest on the stack */
  dismiss(): void;

  /** Pushes a screen onto the stack.
   * @param screenName the title of the screen you want to push onto the stack. This property is then returned in this API as `currentScreen`
   * which can then be used to determine which component should be mounted.
   */
  push(screenName: string): void;
}

/**
 * Access the navigation API for navigation functionality from a full screen modal.
 */
export interface NavigationApi {
  navigation: NavigationApiContent;
}
