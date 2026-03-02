import {createRemoteComponent} from '@remote-ui/core';
import {AccessibilityLabelProps} from '../shared';

/**
 * Props for the Checkbox component, which renders a toggleable input
 * that lets the merchant choose between a checked and unchecked state.
 *
 * @publicDocs
 */
export interface CheckboxProps extends AccessibilityLabelProps {
  /**
   * Whether the checkbox is currently checked. This is a controlled prop,
   * so you must update it in response to `onChange` to reflect the new state.
   * @defaultValue false
   */
  checked?: boolean;

  /**
   * Whether the checkbox is disabled. When `true`, then the checkbox can't be
   * interacted with and appears in a muted style to indicate it isn't
   * available.
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * An error message displayed below the checkbox. When set, the checkbox
   * receives a specific visual treatment to indicate a problem that the
   * merchant needs to resolve before continuing.
   */
  error?: string;

  /**
   * A unique identifier for the checkbox. When no `id` is set, a globally
   * unique value is generated automatically.
   */
  id?: string;

  /**
   * The text label displayed next to the checkbox. Use this to clearly
   * describe what the checkbox controls.
   */
  label?: string;

  /**
   * An identifier for the checkbox that is unique within the nearest
   * containing Form component. Use this to identify the checkbox's
   * value when the form is submitted.
   */
  name?: string;

  /**
   * A callback fired whenever the checkbox's checked state changes. The
   * callback receives a boolean indicating the new checked state. Because
   * this is a controlled component, you must store this value in state and
   * reflect it back in the `checked` or `value` prop.
   */
  onChange?: (value: boolean) => void;

  /**
   * Whether the checkbox is checked. This is an alias for `checked` and
   * can be useful in form libraries that provide a normalized API for
   * handling both `boolean` and `string` values. If both `value` and
   * `checked` are set, then `checked` takes precedence.
   */
  value?: boolean;
}

/**
 * Checkbox renders a toggleable input that lets the merchant choose
 * between a checked and unchecked state.
 */
export const Checkbox = createRemoteComponent<'Checkbox', CheckboxProps>(
  'Checkbox',
);
