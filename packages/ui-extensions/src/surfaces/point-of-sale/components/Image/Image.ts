import {createRemoteComponent} from '@remote-ui/core';

/**
 * Configure the following properties on the Image component.
 *
 * @publicDocs
 */
export interface ImageProps {
  /**
   * The source of the image to be displayed.
   */
  src?: string;
}

export const Image = createRemoteComponent<'Image', ImageProps>('Image');
