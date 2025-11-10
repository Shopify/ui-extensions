export interface DeviceApiContent {
  /**
   * The friendly name of the device as configured by the merchant or system administrator (for example, "Front Counter iPad", "Mobile Register 3", "Checkout Station A"). This name is displayed in device lists, admin interfaces, and device selection screens to help merchants identify which physical device is being used. The name is static for the session and reflects the device's configuration in Shopify admin.
   */
  name: string;
  /**
   * Retrieves the unique string identifier for this specific POS device. Returns a promise that resolves to the device ID, which is a persistent identifier that remains constant across sessions and app updates. The ID format is implementation-specific but guaranteed unique within the merchant's shop.
   *
   * Commonly used for device-specific data storage (storing preferences per device), analytics tracking (grouping events by device), implementing device-based permissions, or creating device-specific configurations. The async nature allows the system to fetch the ID from secure storage if not immediately available.
   */
  getDeviceId(): Promise<string>;
  /**
   * Determines whether the current device is a tablet form factor (for example, iPad, Android tablet). Returns a promise that resolves to `true` for touchscreen tablet devices, or `false` for other device types like desktop POS terminals, mobile phones, or specialized POS hardware.
   *
   * Commonly used for implementing responsive design (adjusting layouts for tablet screens), optimizing touch target sizes (larger buttons on tablets), or enabling/disabling features based on device capabilities. The async nature accounts for cases where form factor detection requires system queries.
   */
  isTablet(): Promise<boolean>;
}

/**
 * The `DeviceApi` object provides access to device information and capabilities. Access these properties and methods through `shopify.device` to retrieve device details and check device characteristics.
 */
export interface DeviceApi {
  device: DeviceApiContent;
}
