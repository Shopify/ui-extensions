/**
 * Defines information about the POS device where the extension is running.
 * @publicDocs
 */
export interface Device {
  /**
   * The name of the POS device.
   */
  name: string;
  /**
   * The numeric Shopify POS device ID (the same value as `shopify.session.deviceId`). This differs from the string returned by `shopify.device.getDeviceId()`.
   */
  deviceId: number;
  /**
   * Whether the device is a tablet form factor.
   */
  isTablet: boolean;
}
