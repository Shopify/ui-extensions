import {createRemoteComponent} from '@remote-ui/core';

export interface ImageProps {
  /**
   * The URL or path to the image resource to display. This can be a remote URL (for example, `'https://example.com/image.png'`) or a relative path to a local image asset. If not provided, the image component may display a placeholder or remain empty.
   */
  src?: string;
}

export const Image = createRemoteComponent<'Image', ImageProps>('Image');
