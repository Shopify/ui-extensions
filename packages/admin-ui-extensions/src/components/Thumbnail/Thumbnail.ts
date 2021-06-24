import {createRemoteComponent} from '@remote-ui/core';

export type Size = 'small' | 'medium' | 'large';

export type ScaleType =
  // may stretch image to fit the content view
  | 'fill'

  // preserves aspect ratio, padding remaining space
  | 'fit'

  // preserves aspect ratio, fills content view, crops area outside content view
  | 'crop';

export interface ThumbnailProps {
  size?: Size;
  scaleType?: ScaleType;

  /** URL for the thumbnail image. */
  source: string;

  /** Alt text for the thumbnail. */
  alt: string;
}

/**
 * Thumbnails are used as a visual anchor and identifier for an object. They should be used along with text to provide context.
 */
export const Thumbnail = createRemoteComponent<'Thumbnail', ThumbnailProps>(
  'Thumbnail',
);
