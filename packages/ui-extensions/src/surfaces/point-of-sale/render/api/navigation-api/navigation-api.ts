export interface NavigationApiContent {
  /** Navigate to a route in current navigation tree.
   * Pushes the specified screen if it isn't present in the navigation tree, goes back to a created screen otherwise.
   * @param screenName the name of the screen you want to navigate to.
   * @param params the parameters you want to pass to that screen.
   */
  navigate(screenName: string, params?: any): void;

  /** Pops the currently shown screen */
  pop(): void;

  /** Dismisses the extension. */
  dismiss(): void;

  /**
   * Navigate to a native screen
   * @param screen takes in a native screen name and its parameters
   */
  navigateToNativeScreen(screen: NativeScreen): void;
}

/**
 * Access the navigation API for navigation functionality from a full screen modal.
 */
export interface NavigationApi {
  navigation: NavigationApiContent;
}

/**
 * The different native screens and their parameters
 */
export interface NativeScreenParams {
  productDetails: {productId: number; variantId?: number};
  orderDetails: {orderId: number};
  customerDetails: {customerId: number};
  staffDetails: {staffId: number};
  draftOrderDetails: {draftOrderId: number};
}

export type NativeScreen = {
  [K in keyof NativeScreenParams]: {
    screenName: K;
    params: NativeScreenParams[K];
  };
}[keyof NativeScreenParams];
