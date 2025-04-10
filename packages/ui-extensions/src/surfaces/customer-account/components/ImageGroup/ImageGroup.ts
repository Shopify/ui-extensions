import {createRemoteComponent} from '@remote-ui/core';

export interface ImageGroupProps {
  /**
   * Indicates the total number of items that could be displayed in the image group.
   * It is used to determine the remaining number to show when all the available image slots have been filled.
   */
  totalItems?: number;
}

export const ImageGroup = createRemoteComponent<'ImageGroup', ImageGroupProps>(
  'ImageGroup',
);
