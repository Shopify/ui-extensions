/**
 * Defines information about the POS device where the extension is running. Contains device identification, form factor details, and configuration information.
 */
export interface Device {
  /**
   * The device name as configured by the merchant or system administrator. This is the friendly name displayed in device lists, admin interfaces, and device selection screens (for example, "Front Counter iPad", "Mobile Register 3", "Checkout Station A"). The name helps merchants identify which physical device is being used.
   */
  name: string;
  /**
   * The unique numeric identifier for this specific POS device within the merchant's system. This ID is persistent across sessions and uniquely identifies the physical device. Commonly used for device-specific settings, logging, analytics tracking, or implementing device-based permissions and configurations.
   */
  deviceId: number;
  /**
   * Whether the device is a tablet form factor (for example, iPad, Android tablet). When `true`, indicates a touchscreen tablet device. When `false`, indicates a different form factor such as a desktop POS terminal, mobile phone, or specialized POS hardware. This information can inform UI decisions like touch target sizes, layout adaptations, or feature availability.
   */
  isTablet: boolean;
}
