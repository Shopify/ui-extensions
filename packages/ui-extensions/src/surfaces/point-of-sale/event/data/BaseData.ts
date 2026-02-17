import type {ConnectivityState, Device, Session} from '../../../point-of-sale';

/**
 * Base data provided to all POS extension targets at initialization.
 *
 * Includes device information, session context, and connectivity state so extensions
 * can adapt to the current runtime (e.g. offline behavior, locale, location).
 *
 * @publicDocs
 */
export interface BaseData {
  /**
   * Current internet connectivity of the POS device. Updates in real time so extensions
   * can handle offline mode, show warnings, or queue work until connectivity is restored.
   */
  connectivity: ConnectivityState;
  /**
   * Information about the POS device (name, id, form factor). Static for the session;
   * use for device-specific behavior, logging, or configuration.
   * @private
   */
  device: Device;
  /**
   * [IETF BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) locale for the session
   * (e.g. `"en-US"`, `"fr-CA"`). Use for i18n, date/time/number formatting, and localized content.
   */
  locale: string;
  /**
   * Current POS session: shop, user, pinned staff, location, currency, POS version.
   * Constant for the session; updates when location or pinned staff changes. Use for
   * permissions, API auth, and transaction context.
   */
  session: Session;
}
