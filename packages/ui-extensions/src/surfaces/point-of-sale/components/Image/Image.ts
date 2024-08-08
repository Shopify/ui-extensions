import {createRemoteComponent} from '@remote-ui/core';

export interface ImageProps {
  /**
   * The source of the image to be displayed.
   */
  src?: string;
  alt?: string;
}

export const Image = createRemoteComponent<'Image', ImageProps>('Image');
