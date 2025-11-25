import type {ConnectivityState, Device, Session} from '../../../point-of-sale';

/**
 * Base input data provided to all POS extension targets. Contains essential runtime context including connectivity status, device information, locale settings, and session data.
 */
export interface BaseInput {
  /**
   * The current Internet connectivity status of the POS device. Indicates whether the device has an active connection to the Internet (`'Connected'`) or is offline (`'Disconnected'`). This state updates in real-time as connectivity changes, allowing extensions to implement offline-aware functionality, show connectivity warnings, or queue operations for when connectivity is restored.
   */
  connectivity: ConnectivityState;
  /**
   * Information about the physical POS device where the extension is running. Includes the device name, unique device ID, and form factor details (tablet vs other). This data is static for the session and helps extensions adapt to different device types, log device-specific information, or implement device-based configurations.
   */
  device: Device;
  /**
   * The [IETF BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) language tag for the current POS session (for example, `"en-US"`, `"fr-CA"`, `"de-DE"`). This indicates the merchant's language and regional preferences. Commonly used for internationalization (i18n), locale-specific date/time/number formatting, translating UI text, and providing localized content. The locale remains constant for the session and reflects the language selected in POS settings.
   */
  locale: string;
  /**
   * Information about the current POS session including shop ID, authenticated user, pinned staff member, active location, currency settings, and POS version. This session data remains constant for the session duration and provides critical context for business logic, permissions, API authentication, and transaction processing.
   */
  session: Session;
}
