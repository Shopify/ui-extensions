export type Size = 'small' | 'medium' | 'large';

export type ScaleType =
  | 'fill' // may stretch image to fit the content view
  | 'fit' // preserves aspect ratio, padding remaining space
  | 'crop'; // preserves aspect ratio, fills content view, crops area outside content view

export interface Thumbnail {
  size?: Size;
  scaleType?: ScaleType;
  url: string;
  alt: string;
}
