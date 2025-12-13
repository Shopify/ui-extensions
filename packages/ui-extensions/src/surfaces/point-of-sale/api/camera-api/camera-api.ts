export interface CameraMediaOptions {
  /**
   * The camera that will be active when the camera interface first opens.
   * - `'user'`: The user-facing camera
   * - `'environment'`: The environment-facing camera
   *
   * @defaultValue 'environment'
   */
  facingMode?: 'user' | 'environment';
  /**
   * The maximum width (0 to 1080) of the image in pixels. Resizes the image to this width if it is larger.
   * @defaultValue 1080
   */
  maxWidth?: number;
  /**
   * The maximum height (0 to 1080) of the image in pixels. Resizes the image to this height if it is larger.
   * @defaultValue 1080
   */
  maxHeight?: number;

  /**
   * The quality of the image. (0.0 to 1.0)
   * @defaultValue '0.9'
   */
  quality?: number;
}

export interface CameraMediaResponse {
  /** The base64 string of the image */
  base64: string;
  /** The width of the image in pixels. */
  width: number;
  /** The height of the image in pixels. */
  height: number;
  /** The file size of the image in bytes. */
  fileSize: number;
  /** The mime type of the image. */
  type: string;
}

export interface CameraApiContent {
  /**
   * Get a media snapshot from the camera.
   *
   * @param options the options for the camera media.
   * @returns Promise<CameraMediaResponse> that resolves when the POS has necessary permissions to access the camera and the media is captured.
   */
  takePhoto: (options?: CameraMediaOptions) => Promise<CameraMediaResponse>;
}

export interface CameraApi {
  camera: CameraApiContent;
}
