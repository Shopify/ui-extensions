import {createRemoteComponent} from '@remote-ui/core';
import {GlobalProps, SizeScale, AccessibilityLabelProps} from '../shared';

/**
 * Props for the ProgressIndicator component, which renders a visual cue
 * (such as a spinner) to communicate that a process is underway. Use this
 * component to reassure users that content is loading or an action is being
 * processed.
 *
 * @publicDocs
 */
export interface ProgressIndicatorProps
  extends GlobalProps,
    AccessibilityLabelProps {
  /**
   * The size of the progress indicator. This prop is required
   * and determines how large the indicator renders. Use smaller
   * sizes for inline or compact placements, and larger sizes for
   * prominent loading states.
   */
  size: SizeScale;

  /**
   * The color of the progress indicator.
   *
   * - `inherit`: Takes the color value from its parent, giving
   *   the progress indicator a monochrome appearance. This is useful
   *   when you want the indicator to blend with surrounding text or icons.
   * - `default`: Uses the standard progress indicator color.
   *
   * @defaultValue 'default'
   */
  tone?: 'inherit' | 'default';

  /**
   * The visual style of the progress indicator.
   *
   * - `spinner`: Renders a circular spinning animation to indicate
   *   an indeterminate loading state.
   *
   * @defaultValue 'spinner'
   */
  variant?: 'spinner';
}

/** A ProgressIndicator component that renders a loading spinner or similar visual cue. */
export const ProgressIndicator = createRemoteComponent<
  'ProgressIndicator',
  ProgressIndicatorProps
>('ProgressIndicator');
