import {createRemoteComponent} from '@remote-ui/core';

export interface ImageProps {
  src?: string;
}

export const Image = createRemoteComponent<'Image', ImageProps>('Image');
