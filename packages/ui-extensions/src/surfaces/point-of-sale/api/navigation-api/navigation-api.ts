export interface NavigationApiContent {
  /** Navigate to a route in current navigation tree.
   * Pushes the specified screen if it isn't present in the navigation tree, goes back to a created screen otherwise.
   * @param screenName the name of the screen you want to navigate to.
   * @param params the parameters you want to pass to that screen.
   */
  navigate(screenName: string, params?: any): void;

  /** Opens a POS Native screen modally.
   * If the uri starts with `shopify://point-of-sale/` it will be treated as a POS Native screen. Otherwise it will try to navigate to an extension screen.
   * Available POS Native screens:
   * - `shopify://point-of-sale/products/{product_id}` to present product details.
   * - `shopify://point-of-sale/products/{product_id}/variants/{variant_id}` to present product variant details.
   * - `shopify://point-of-sale/customers/{customer_id}` to present customer details.
   * - `shopify://point-of-sale/orders/{order_id}` to present order details.
   * - `shopify://point-of-sale/draft_orders/{draft_order_id}` to present draft order details.
   * - `shopify://point-of-sale/staff/{staff_id}` to present staff details.
   * @param uri the uri of the POS Native screen to present modally.
   * @returns A promise that resolves when the POS screen is presented, rejects when an error occurs.
   * @example
   * // Open product variant details screen for product id 123 and variant id 456
   * navigate('shopify://point-of-sale/products/123/variants/456');
   */
  navigate(uri: string | URL): Promise<void>;

  /** Pops the currently shown screen */
  pop(): void;

  /** Dismisses the extension. */
  dismiss(): void;

  /** Checks if the user has permission to navigate to the specified screen.
   * @param uri the uri to check if the user has permission to navigate to.
   * @returns false if the uri is a valid uri to navigate to a POS screen and the user does not have permission to navigate to the specified screen, true otherwise.
   */
  canNavigate(uri: string | URL): boolean;
}

/**
 * Access the navigation API for navigation functionality from a full screen modal.
 */
export interface NavigationApi {
  navigation: NavigationApiContent;
}
