/**
 * Access to the drawer details data in the merchant's POS.
 */
export interface DrawerApi {
  /**
   * The drawer/cash tracking session details.
   */
  drawer: DrawerDetails;
}

export interface DrawerDetails {
  /**
   * The unique identifier for the drawer/cash tracking session.
   */
  id: number;
}
