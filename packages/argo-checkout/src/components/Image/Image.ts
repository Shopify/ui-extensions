import {createRemoteComponent} from '../../utilities';

export interface ImageProps {
  src: string;
  alt: string;
  height?: string;
  width?: string;
}

export const Image = createRemoteComponent<'Image', ImageProps>('Image');
