import {createRemoteComponent} from '@remote-ui/core';

import type {DisclosureActivatorProps} from '../shared';

/**
 * Use checkboxes to give customers a single binary option, such as signing up for marketing, or agreeing to terms and conditions.
 * @publicDocs
 */
export interface CheckboxProps extends DisclosureActivatorProps {
  /**
   * A unique identifier for the field. When no `id` is set,
   * a globally unique value will be used instead.
   */
  id?: string;

  /**
   * An identifier for the field that is unique within the nearest
   * containing `Form` component.
   */
  name?: string;

  /**
   * Whether the checkbox is active. This prop is an alias for `checked`,
   * and can be useful in form libraries that provide a normalized API for
   * dealing with both `boolean` and `string` values. If both `value` and
   * `checked` are set, `checked` takes precedence.
   */
  value?: boolean;

  /**
   * Whether the checkbox is active.
   */
  checked?: boolean;

  /**
   * Whether the checkbox is disabled, preventing any user interaction.
   */
  disabled?: boolean;

  /**
   * An error message displayed below the field to indicate validation problems. When set, the field is styled with error indicators.
   */
  error?: string;

  /**
   * A label used for users of assistive technologies. When set, any
   * `children` supplied to this component will not be announced to screen reader users.
   */
  accessibilityLabel?: string;

  /**
   * A callback fired when the checkbox value changes. This callback
   * is called with a boolean indicating whether the checkbox should now be
   * active or inactive. This component is [controlled](https://reactjs.org/docs/forms.html#controlled-components),
   * so you must store this value in state and reflect it back in the
   * `checked` or `value` props.
   */
  onChange?(value: boolean): void;
}

/**
 * Use checkboxes to give customers a single binary option, such as signing up for marketing, or agreeing to terms and conditions.
 */
export const Checkbox = createRemoteComponent<'Checkbox', CheckboxProps>(
  'Checkbox',
);
