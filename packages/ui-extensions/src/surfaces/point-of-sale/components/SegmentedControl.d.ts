/** VERSION: 0.0.0 **/

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  CallbackEvent,
  CallbackEventListener,
  PreactBaseElementPropsWithChildren,
  PreactCustomElement,
  GlobalProps,
} from './shared';

/**
 * A single segment in the segmented control.
 */
export interface Segment {
  /**
   * Unique identifier for the segment.
   */
  id: string;
  /**
   * The label displayed on the segment.
   */
  label: string;
  /**
   * Whether the segment is disabled.
   */
  disabled?: boolean;
}

/**
 * The segmented control lets the merchant easily switch between different lists or views on the same page.
 */
export interface SegmentedControlProps extends GlobalProps {
  /**
   * The segments to display.
   */
  segments: Segment[];
  /**
   * The ID of the currently selected segment.
   */
  selected?: string;
  /**
   * Callback executed when a segment is selected.
   */
  onSelect?: (id: string) => void;
}

declare class SegmentedControl
  extends PreactCustomElement
  implements SegmentedControlProps
{
  accessor segments: SegmentedControlProps['segments'];
  accessor selected: SegmentedControlProps['selected'];
  accessor onselect: CallbackEventListener<typeof tagName> | null;
  accessor id?: string;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: SegmentedControl;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: SegmentedControlJSXProps &
        PreactBaseElementPropsWithChildren<SegmentedControl>;
    }
  }
}

declare const tagName = 's-segmented-control';

export interface SegmentedControlJSXProps
  extends Partial<Omit<SegmentedControlProps, 'segments'>> {
  // segments is required
  segments: Segment[];
  onSelect?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {SegmentedControl};
export type {SegmentedControlJSXProps, Segment};
