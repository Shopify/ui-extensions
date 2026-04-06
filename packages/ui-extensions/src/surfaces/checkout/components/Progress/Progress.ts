import {createRemoteComponent} from '@remote-ui/core';

import type {IdProps} from '../shared';

/**
 * @publicDocs
 */
export interface ProgressProps extends IdProps {
  /**
   * How much of the task has been completed. Must be a valid floating point number between 0 and `max`, or between 0 and 1 if `max` is omitted. When no value is set, the progress bar is indeterminate, indicating an ongoing activity with no estimated completion time.
   *
   * Learn more about the [value attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress#value).
   */
  value?: number;

  /**
   * The total amount of work the task requires. Must be a value greater than 0 and a valid floating point number.
   *
   * Learn more about the [max attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress#max).
   *
   * @defaultValue 1
   */
  max?: number;

  /**
   * The semantic meaning and color treatment of the progress indicator.
   *
   * - `auto`: Automatically determined based on context.
   * - `critical`: Indicates an urgent or error state requiring immediate attention.
   *
   * @defaultValue 'auto'
   */
  tone?: 'auto' | 'critical';

  /**
   * A label that describes the purpose or contents of the element. When set, it will be announced
   * to users using assistive technologies and will provide them with more context. When set, any
   * children or `label` supplied won't be announced to screen readers.
   */
  accessibilityLabel?: string;
}

export const Progress = createRemoteComponent<'Progress', ProgressProps>(
  'Progress',
);
