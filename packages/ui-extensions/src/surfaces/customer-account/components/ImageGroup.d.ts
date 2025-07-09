import {BaseElementPropsWithChildren, IdProps} from './shared';

export interface ImageGroupProps extends IdProps {
  /**
   * Indicates the total number of items that could be displayed in the image group.
   * It is used to determine the remaining number to show when all the available image slots have been filled.
   */
  totalItems?: number;
}

export interface ImageGroupElement extends HTMLElement, ImageGroupProps {}

declare global {
  interface HTMLElementTagNameMap {
    ['s-image-group']: ImageGroupElement;
  }
}

declare module 'preact' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-image-group']: BaseElementPropsWithChildren<ImageGroupElement> &
        ImageGroupProps;
    }
  }
}
