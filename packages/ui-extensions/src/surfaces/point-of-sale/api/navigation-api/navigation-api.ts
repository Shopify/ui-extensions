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
   * Open POS screens. Resource screens open in a modal. Tabs close all modals before navigating to the tab.
   * Available screens:
   * - `gid://shopify/Product/<productId>` to open product details.
   * - `gid://shopify/ProductVariant/<variantId>` to open product details for variant.
   * - `gid://shopify/Customer/<customerId>` to open customer details.
   * - `gid://shopify/Order/<orderId>` to open order details.
   * - `gid://shopify/DraftOrder/<draftOrderId>` to open draft order details.
   * - `gid://shopify/StaffMember/<staffMemberId>` to open staff details.
   * - `pos://home-tab` to open the home tab.
   * - `pos://cart-tab` to open the cart tab. Opens home tab on tablets.
   * - `pos://products-tab` to open the products tab.
   * - `pos://orders-tab` to open the orders tab.
   * - `pos://customers-tab` to open the customers tab. Available only on tablets, and throws error on phones.
   * - `pos://more-tab` to open the more tab.
   *
   * @example
   * // Open product details screen for product id 123
   * openUrl('gid://shopify/Product/123');
   *
   * @example
   * // Open home tab
   * openUrl('pos://home-tab');
   *
   * @example
   * // Open home tab
   * openUrl(new URL('pos://home-tab'));
   *
   * @param url - The POS screen to open
   * @returns A promise that resolves when the POS screen is opened, rejects when an error occurs like an unsupported GID or POS screen.
   */
  open(url: string | URL): Promise<void>;
}

/**
 * Access the navigation API for navigation functionality from a full screen modal.
 */
export interface NavigationApi {
  navigation: NavigationApiContent;
}
