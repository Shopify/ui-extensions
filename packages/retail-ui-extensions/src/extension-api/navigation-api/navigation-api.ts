export interface NavigationApiContent {
  /** The name of the current screen on the stack.
   * This property can be used to evaluate which component you want to mount.
   */
  currentScreen?: string;

  /** The parameters the screen was displayed with */
  params?: any;

  /** Dismisses the modal highest on the stack */
  dismiss(): void;

  /** Pushes a screen onto the stack.
   * @param screenName the title of the screen you want to push onto the stack. This property is then returned in this API as `currentScreen`
   * which can then be used to determine which component should be mounted.
   * @param params the parameters you want to pass for the new screen.
   */
  push(screenName: string, params?: any): void;

  /** Opens a full screen with the `Retail::SmartGrid::Modal` extension point.
   * @param screenName you can specify a screen name, which will be returned in the `NavigationAPI` as `currentScreen`.
   * This value can be used to evaluate which component should be mounted. The `push(screenName: string)` method in the NavigationAPI can be used then to push
   * additional screens on top of the stack.
   */
  presentModal(screenName?: string): void;
}

/**
 * Access the navigation API for navigation functionality from a full screen modal.
 */
export interface NavigationApi {
  navigation: NavigationApiContent;
}
