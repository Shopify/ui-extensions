import {createRemoteComponent} from '@remote-ui/core';

export interface CheckboxProps {
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
   * A callback that is run whenever the checkbox is changed. This callback
   * is called with a boolean indicating whether the checkbox should now be
   * active or inactive. This component is [controlled](https://reactjs.org/docs/forms.html#controlled-components),
   * so you must store this value in state and reflect it back in the
   * `checked` or `value` props.
   */
  onChange?(value: boolean): void;
}

/**
 * Use checkboxes to give users a single binary option, such as signing up for marketing, or agreeing to terms and conditions.
 */
export const Checkbox = createRemoteComponent<'Checkbox', CheckboxProps>(
  'Checkbox',
);
