import type {Session} from '../../types/session';

export interface SessionApiContent {
  /**
   * Access information on the current POS session.
   */
  currentSession: Session;
  /**
   * Get a fresh session token for communication with your app's backend service.
   * When the authenticated user (the user that logged into Shopify POS with their email address) doesn't have the correct app permissions enabled for your app, null will be returned. This is irrelevant of which POS Staff member is pinned in, as those are not authenticated users.
   * For more information, see our [app permissions documentation](https://help.shopify.com/en/manual/your-account/users/roles/permissions/store-permissions#apps-and-channels-permissions).
   * Calls to Shopify APIs must be made by your app’s backend service.
   */
  getSessionToken: () => Promise<string | undefined>;
}

/**
 * Access information on the current Session, including data on the current shop, user, staff and location.
 */
export interface SessionApi {
  session: SessionApiContent;
}
