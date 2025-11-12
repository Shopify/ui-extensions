import type {CurrencyCode} from '../../../shared';

/**
 * Defines information about the current POS session. Contains authentication details, location context, and configuration settings that remain constant for the duration of the session.
 */
export interface Session {
  /**
   * The unique numeric identifier for the Shopify shop currently logged into POS. This ID is consistent across all Shopify systems and APIs. Commonly used for shop-specific data queries, API authentication, or multi-shop configurations.
   */
  shopId: number;

  /**
   * The unique numeric identifier for the Shopify account currently authenticated on POS. This represents the logged-in user's account, which may be the shop owner, an admin, or a staff member with POS access. This ID can differ from `staffMemberId` when a different staff member is pinned in for the transaction. Commonly used for user-specific permissions, audit trails, or tracking who performed actions.
   */
  userId: number;

  /**
   * The shop's `.myshopify.com` domain name (for example, `"my-store.myshopify.com"`). This is the shop's permanent Shopify domain, not custom domains. Commonly used for constructing API URLs, identifying the shop in external systems, or building shop-specific links.
   */
  shopDomain: string;

  /**
   * The unique numeric identifier for the physical retail location where this POS device is currently operating. Locations represent distinct retail sites, warehouses, or pop-up shops within a merchant's business. This determines which inventory is available, which staff can access the POS, and which location appears on receipts and orders. Commonly used for location-specific inventory queries, sales reports, or implementing location-based features.
   */
  locationId: number;

  /**
   * The unique numeric identifier for the staff member currently pinned into the POS session. This represents who is actively using the POS for transactions, which may differ from `userId` when a manager is logged in but a different staff member is pinned for sales attribution. Returns `undefined` when no staff member is pinned. Commonly used for sales attribution, commission tracking, or staff-specific workflows.
   */
  staffMemberId?: number;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code for the location currently active on POS (for example, `"USD"`, `"CAD"`, `"EUR"`, `"GBP"`). This determines how prices are displayed, which currency symbol appears, and how monetary calculations are performed. The currency is set at the location level and affects all transactions processed on this device.
   */
  currency: CurrencyCode;

  /**
   * The version string of [the POS app](https://apps.shopify.com/shopify-pos) currently running on this device (for example, `"8.42.0"`, `"9.1.2"`). This version number follows semantic versioning and can be used for feature detection, compatibility checks, or debugging issues specific to certain POS versions.
   */
  posVersion: string;
}
