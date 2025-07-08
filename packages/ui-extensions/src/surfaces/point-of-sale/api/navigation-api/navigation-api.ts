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
   * Navigate to a POS screen. Screens will present in a modal.
   * @param screen takes in a POS screen name and its parameters
   */
  navigateToPosScreen(screen: PosScreen): void;
}

/**
 * Access the navigation API for navigation functionality from a full screen modal.
 */
export interface NavigationApi {
  navigation: NavigationApiContent;
}

/**
 * The different POS screens and their parameters
 */
export interface PosScreenParams {
  productDetails: {productId: number; variantId?: number};
  orderDetails: {orderId: number};
  customerDetails: {customerId: number};
  staffDetails: {staffId: number};
  draftOrderDetails: {draftOrderId: number};
}

export type PosScreen = {
  [K in keyof PosScreenParams]: {
    screenName: K;
    params: PosScreenParams[K];
  };
}[keyof PosScreenParams];
