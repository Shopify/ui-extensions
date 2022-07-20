import {createRemoteComponent} from '@remote-ui/core';

type Size = 'small' | 'base';

export interface ThumbnailProps {
  /**
   *  URL for the thumbnail image.
   */
  source?: string;
  /**
   * Size of the thumbnail.
   */
  size?: Size;
  /**
   * The content to display inside the badge.
   */
  badge?: string | number;
  /**
   * The content that describes the purpose of the thumbnail. When set,
   * it will be announced to buyers using assistive technologies and will
   * provide them with more context.
   */
  accessibilityDescription?: string;
}

/**
 * Thumbnails are used as a visual anchor and identifier for an object.
 */
export const Thumbnail = createRemoteComponent<'Thumbnail', ThumbnailProps>(
  'Thumbnail',
);
