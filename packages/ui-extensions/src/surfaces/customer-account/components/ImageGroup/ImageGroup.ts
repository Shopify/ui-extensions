import {createRemoteComponent} from '@remote-ui/core';

/** @publicDocs */
export interface ImageGroupProps {
  /**
   * The layout arrangement for the images within the group.
   *
   * - `grid`: Displays images in a grid layout, filling available rows
   *   and columns.
   * - `inline-stack`: Displays images in a horizontal stack, arranged
   *   inline from start to end.
   *
   * @defaultValue 'grid'
   */
  variant?: 'grid' | 'inline-stack';

  /**
   * A label that describes the purpose or contents of the image group.
   * When set, it will be announced to users using assistive technologies
   * and will provide them with more context.
   */
  accessibilityLabel?: string;

  /**
   * The loading state of the image group. When `true`, the image group
   * displays a loading indicator in place of images.
   *
   * @defaultValue false
   */
  loading?: boolean;

  /**
   * The total number of items that could be displayed in the image group.
   * Used to calculate and display the remaining count when all available
   * image slots have been filled (for example, "+3 more").
   */
  totalItems?: number;
}

export const ImageGroup = createRemoteComponent<'ImageGroup', ImageGroupProps>(
  'ImageGroup',
);
