import {createRemoteComponent} from '@remote-ui/core';
import type {TestableComponentProps} from '../shared';

export interface ImageProps extends TestableComponentProps {
  src?: string;
}

export const Image = createRemoteComponent<'Image', ImageProps>('Image');
