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
   * Navigate to a POS screen. Screens will present in a modal. Tabs will close all open modals and navigate to the tab.
   * An error will be thrown if the screen is not available on the current device (Ex. cart tab is only available on phones and not tablets).
   * @param screen takes in a POS screen name and its parameters
   */
  navigateToPosScreen(screen: PosScreen): Promise<void>;
}

/**
 * Access the navigation API for navigation functionality from a full screen modal.
 */
export interface NavigationApi {
  navigation: NavigationApiContent;
}

/**
 * The different POS screens and their parameters.
 */
export interface PosScreenParams {
  /** Product details screen */
  productDetails: {productId: number; variantId?: number};
  /** Order details screen */
  orderDetails: {orderId: number};
  /** Customer details screen */
  customerDetails: {customerId: number};
  /** Staff details screen */
  staffDetails: {staffId: number};
  /** Draft order details screen */
  draftOrderDetails: {draftOrderId: number};
  /** Home tab */
  homeTab: undefined;
  /** Cart tab. On tablets, this will open the home tab. */
  cartTab: undefined;
  /** Products tab */
  productsTab: undefined;
  /** Orders tab */
  ordersTab: undefined;
  /** Customers tab. Only available on tablets and not phones. An error will be thrown if used on a phone. */
  customersTab: undefined;
  /** Staff tab */
  staffTab: undefined;
  /** More tab */
  moreTab: undefined;
}

export type PosScreen = {
  [K in keyof PosScreenParams]: {
    screenName: K;
    params: PosScreenParams[K];
  };
}[keyof PosScreenParams];
