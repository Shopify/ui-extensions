export interface DeviceApiContent {
  /**
   * The name of the device
   */
  name: string;
  /**
   * The string ID of the device
   */
  getDeviceId(): Promise<string>;
}

/**
 * Access information about the device, like name and ID
 */
export interface DeviceApi {
  device: DeviceApiContent;
}
