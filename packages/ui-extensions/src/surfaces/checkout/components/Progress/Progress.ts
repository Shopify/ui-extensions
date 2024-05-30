import {createRemoteComponent} from '@remote-ui/core';

import type {Appearance, IdProps} from '../shared';

export interface ProgressProps extends IdProps {
  /**
   * Specify how much of the task that has been completed.
   * It must be a valid floating point number between 0 and max, or between 0 and 1 if max is omitted.
   * When undefined, the progress bar is indeterminate;
   * this indicates that an activity is ongoing with no indication of how long it is expected to take.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress#value
   */
  value?: number;

  /**
   * Define the maximum limit of the progress element.
   * It must have a value greater than 0 and be a valid floating point number.
   *
   * @defaultValue 1
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress#max
   */
  max?: number;

  /**
   * Set the color of the progress bar.
   *
   * @defaultValue 'accent'
   */
  appearance?: Extract<Appearance, 'accent' | 'critical'>;

  /**
   * A label used for users using assistive technologies. When set, any
   * `children` supplied to this component will not be announced to screen reader users.
   */
  accessibilityLabel?: string;
}

export const Progress = createRemoteComponent<'Progress', ProgressProps>(
  'Progress',
);
