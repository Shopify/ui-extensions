import type {ReadonlySignalLike} from '../../../../shared';
import type {Session, StaffMember} from '../../types/session';

/**
 * The `SessionApi` object provides session details and authentication methods.
 * @publicDocs
 */
export interface SessionApiContent {
  /**
   * Provides information about the current POS session including shop details, user authentication, location data, currency settings, and POS version. Use `session.staffMember` to access the staff member currently pinned into POS and subscribe to staff member changes.
   */
  currentSession: Session;
  /**
   * Provides read-only access to the staff member currently pinned into POS and allows subscribing to staff member changes. The value is `undefined` when no staff member is pinned in, or while the pinned staff member is still loading.
   */
  staffMember: ReadonlySignalLike<StaffMember | undefined>;
  /**
   * Generates a fresh session token for secure communication with your app's backend service. The token is a Shopify OpenID Connect ID Token that should be used in `Authorization` headers for backend API calls. This is based on the authenticated user, not the pinned staff member.
   *
   * Returns `undefined` when the token can't be minted, such as when the authenticated user lacks proper app permissions, the token service returns an empty response, or the request times out or fails. The promise can still reject on transport or lifecycle errors. Treat any falsy resolved value as a failure.
   */
  getSessionToken: () => Promise<string | undefined>;
  /**
   * The numeric ID of the device running this session.
   *
   * Use this to construct a [GID](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/platform-apis/device-api) to query device details via GraphQL Admin API.
   *
   * @example 123456
   * @see [Global IDs documentation](https://shopify.dev/docs/api/usage/gids) for more about GID format and structure
   * @see [device.getDeviceId()](https://shopify.dev/docs/api/pos-ui-extensions/latest/target-apis/platform-apis/device-api) for the physical device identifier string
   */
  deviceId: number;
}

/**
 * The `SessionApi` object provides access to current session information and authentication methods. Access these properties and methods through `shopify.session` to retrieve shop data and generate secure tokens. These methods enable secure API calls while maintaining user privacy and [app permissions](https://help.shopify.com/manual/your-account/users/roles/permissions/store-permissions#apps-and-channels-permissions).
 * @publicDocs
 */
export interface SessionApi {
  session: SessionApiContent;
}
