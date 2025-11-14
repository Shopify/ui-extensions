export interface CameraMediaOptions {
  /**
   * The camera that will be active when the camera interface first opens.
   * - `'front'`: The front-facing camera
   * - `'back'`: The rear-facing camera
   *
   * @defaultValue 'back'
   */
  cameraType?: 'front' | 'back';
  /**
   * The maximum width (0 to 5000) of the image in pixels. Resizes the image to this width if it is larger.
   * @defaultValue 5000
   */
  maxWidth?: number;
  /**
   * The maximum height (0 to 5000) of the image in pixels. Resizes the image to this height if it is larger.
   * @defaultValue 5000
   */
  maxHeight?: number;
}

export interface CameraMediaResponse {
  /** The base64 string of the image */
  base64: string;
  /** The file uri in the temporary cache directory, do not expect this to persist. Only use this for previewing the image. */
  previewUri: string;
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
  getCameraMedia: (
    options?: CameraMediaOptions,
  ) => Promise<CameraMediaResponse>;
}

export interface CameraApi {
  camera: CameraApiContent;
}
