import {createRemoteComponent} from '@remote-ui/core';

import type {
  BackgroundProps,
  BorderProps,
  CornerProps,
  IdProps,
  SizingProps,
  SpacingProps,
} from '../shared';
import type {MaybeResponsiveConditionalStyle} from '../../style/types';

/**
 * The event object passed to `onScroll` and `onScrolledToEdge` callbacks on a ScrollView.
 */
export interface ScrollViewEvent {
  /**
   * The current scroll position in pixels, broken out by axis.
   */
  position: {
    /** The current horizontal (inline-axis) scroll position in pixels. */
    inline: number;
    /** The current vertical (block-axis) scroll position in pixels. */
    block: number;
  };
  /**
   * Whether the scroll position has reached the start or end of each axis, or `null` if neither edge has been reached.
   */
  scrolledTo: {
    /** Whether the inline-axis scroll is at the `'start'`, `'end'`, or neither (`null`). */
    inline: 'start' | 'end' | null;
    /** Whether the block-axis scroll is at the `'start'`, `'end'`, or neither (`null`). */
    block: 'start' | 'end' | null;
  };
}

/** @publicDocs */
export interface ScrollViewProps
  extends Pick<BackgroundProps, 'background'>,
    BorderProps,
    CornerProps,
    IdProps,
    SizingProps,
    SpacingProps {
  /**
   * A label announced by assistive technologies that describes the purpose or contents of the element. Only set this when the element's visible content doesn't provide enough context on its own.
   */
  accessibilityLabel?: string;
  /**
   * A visual hint indicating that the area is scrollable.
   *
   * - `innerShadow`: An inner shadow indicating that content continues beyond the visible area.
   * - `{type: 'pill', content: string}`: A pill-shaped message displayed at the end of the scrollable area that disappears when the user starts scrolling.
   */
  hint?: 'innerShadow' | {type: 'pill'; content: string};
  /**
   * The axis along which the content is scrollable.
   *
   * - `block`: Content scrolls along the main (block) axis.
   * - `inline`: Content scrolls along the cross (inline) axis.
   *
   * @defaultValue block
   */
  direction?: 'block' | 'inline';
  /**
   * The initial scroll target when the component first renders. Accepts a pixel offset (`number`) to scroll to a specific position, or an `HTMLElement` to scroll that element into view. This only takes effect on the first render; subsequent updates to this prop are ignored.
   */
  scrollTo?: number | HTMLElement;
  /**
   * A callback fired when the scroll position changes. On touch devices, this fires only when the user finishes scrolling, unlike non-touch devices where it fires continuously during scrolling.
   */
  onScroll?: (args: ScrollViewEvent) => void;
  /**
   * A callback fired when the scroll position reaches one of the container's edges.
   */
  onScrolledToEdge?: (args: ScrollViewEvent) => void;
  /**
   * The display mode of the component. Learn more about [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display).
   *
   * - `auto`: The initial value; the actual behavior depends on the component and context.
   * - `none`: Hides the component and removes it from the accessibility tree.
   *
   * @defaultValue 'auto'
   */
  display?: MaybeResponsiveConditionalStyle<'auto' | 'none'>;
}

/**
 * A scrollable container for long-form content, such as order summary line items,
 * that lets customers reveal more content by scrolling.
 */
export const ScrollView = createRemoteComponent<'ScrollView', ScrollViewProps>(
  'ScrollView',
);
