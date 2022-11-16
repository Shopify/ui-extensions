export interface SmartGridApiContent {
  /** Opens a full screen with the `Retail::SmartGrid::Modal` extension point.
   * @param screenName you can specify a screen name, which will be returned in the `NavigationAPI` as `currentScreen`.
   * This value can be used to evaluate which component should be mounted. The `push(screenName: string)` method in the NavigationAPI can be used then to push
   * additional screens on top of the stack.
   */
  presentModal(screenName?: string): void;
}

/**
 * Access the SmartGrid API to present your app in a full screen modal.
 */
export interface SmartGridApi {
  smartGrid: SmartGridApiContent;
}
