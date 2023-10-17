import {createRemoteComponent} from '@remote-ui/core';

export interface ImageGroupProps {
  /**
   * The layout of the images.
   * When set to "grid", the images will be displayed in a grid layout with max images of 4.
   * When set to "inline-stack", the images will be displayed in a single row with max images of 3.
   *
   * @default "grid"
   */
  variant?: 'grid' | 'inline-stack';

  /**
   * Accessibility label for the image group.
   */
  imagesAccessibilityLabel?: string;

  /**
   * Loading state of the component.
   * @default false
   */
  loading?: boolean;

  /**
   * Total count of items.  If totalItems is greater than the number of images passed then totalItems will be displayed.
   */
  totalItems?: number;
}

export const ImageGroup = createRemoteComponent<'ImageGroup', ImageGroupProps>(
  'ImageGroup',
);
