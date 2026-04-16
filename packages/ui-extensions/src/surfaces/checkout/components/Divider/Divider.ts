import {createRemoteComponent} from '@remote-ui/core';

import type {Alignment, Direction, IdProps, Size} from '../shared';

/** @publicDocs */
export interface DividerProps extends IdProps {
  /**
   * The thickness of the divider line.
   *
   * - `small`: A thin, subtle line.
   * - `base`: The standard divider thickness.
   * - `large`: A thicker line for stronger visual separation.
   * - `extraLarge`: The thickest available line.
   *
   * @defaultValue 'small'
   */
  size?: Extract<Size, 'small' | 'base' | 'large' | 'extraLarge'>;

  /**
   * The orientation of the divider, using [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values).
   *
   * - `inline`: A horizontal divider that separates content stacked vertically.
   * - `block`: A vertical divider that separates content arranged horizontally.
   *
   * @defaultValue 'inline'
   */
  direction?: Direction;

  /**
   * The alignment of the divider's content within its container.
   *
   * @defaultValue 'center'
   */
  alignment?: Alignment;
}

/**
 * A visual separator that draws a line between adjacent sections of content,
 * representing a thematic break.
 */
export const Divider = createRemoteComponent<'Divider', DividerProps>(
  'Divider',
);
