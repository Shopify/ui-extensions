/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="preact" />
import {createRemoteComponent} from '@remote-ui/core';
import type {BaseElementPropsWithChildren} from '../shared';

export interface ImageGroupProps {
  /**
   * Changes the layout of the images.
   *
   * @default "grid"
   */
  variant?: 'grid' | 'inline-stack';

  /**
   * A label that describes the purpose or contents of the image group. When set,
   * it will be announced to users using assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel?: string;

  /**
   * Indicates that the image group is in a loading state.
   *
   * When `true`, the image group show a loading indicator.
   *
   * @defaultValue false
   */
  loading?: boolean;

  /**
   * Indicates the total number of items that could be displayed in the image group. It is used to determine the remaining number to show when all the available image slots have been filled.
   */
  totalItems?: number;
}

export interface ImageGroupElement
  extends ImageGroupProps,
    Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-image-group': ImageGroupElement;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      's-image-group': ImageGroupProps &
        BaseElementPropsWithChildren<ImageGroupElement>;
    }
  }
}

export const ImageGroup = createRemoteComponent<'ImageGroup', ImageGroupProps>(
  'ImageGroup',
);
