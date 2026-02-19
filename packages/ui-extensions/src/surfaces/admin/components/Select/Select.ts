import {createRemoteComponent} from '@remote-ui/core';

/**
 * Props for the Select component, a form control that lets the user choose
 * one value from a predefined list of options presented in a dropdown menu.
 */
export interface SelectProps {
  /**
   * Whether the select is disabled. When `true`, the field can't be
   * interacted with and appears in a dimmed state.
   */
  disabled?: boolean;

  /**
   * An error message to display beneath the field. When set, the field
   * receives a specific stylistic treatment to communicate a problem that
   * needs to be resolved immediately.
   */
  error?: string;

  /**
   * A unique identifier for the field. When no `id` is set,
   * a globally unique value will be used instead.
   */
  id?: string;

  /**
   * The visible label displayed above the select field. This label
   * is also used by assistive technologies to describe the field.
   */
  label: string;

  /**
   * An identifier for the field that is unique within the nearest
   * containing Form component. This value is used when submitting
   * the form data.
   */
  name?: string;

  /**
   * A callback that fires when the field loses focus. Use this
   * to trigger validation or other side effects when the user
   * moves away from the select.
   */
  onBlur?(): void;

  /**
   * A callback that fires whenever the selected option changes.
   * The callback receives the string `value` of the newly selected
   * option. This component is controlled, so you must store this
   * value in state and reflect it back in the `value` prop.
   */
  onChange?(value: string): void;

  /**
   * A callback that fires when the field receives focus. Use this
   * to trigger side effects when the user interacts with the select.
   */
  onFocus?(): void;

  /**
   * The options a user can select from, provided as an array of
   * `OptionDescription` or `OptionGroupDescription` objects. Each
   * option requires a `label` and `value`.
   */
  options: (OptionDescription | OptionGroupDescription)[];

  /**
   * A short hint that describes the expected value of the field.
   * The placeholder is displayed when no `value` is set, giving
   * the user guidance on what to select.
   */
  placeholder?: string;

  /**
   * Whether the field is read-only. When `true`, the current value
   * can't be changed by the user but the field remains focusable
   * and its value is still included in form submissions.
   */
  readOnly?: boolean;

  /**
   * Whether the field requires a value. This adds semantic meaning
   * to the field for assistive technologies, but it won't cause an
   * error to appear automatically. If you want to present an error
   * when this field is empty, use the `error` prop.
   */
  required?: boolean;

  /**
   * The currently selected value. This should match the `value`
   * property of one of the items in the `options` array. When not
   * set, the value defaults to an empty string, which displays the
   * `placeholder` text as the selected value.
   */
  value?: string;
}

/**
 * Props for an individual Option component rendered as a child of Select.
 */
export interface OptionProps {
  /**
   * Whether this option is disabled. When `true`, the option appears
   * dimmed and can't be selected by the user.
   */
  disabled?: boolean;

  /**
   * The value that will be passed to the select's `onChange` callback
   * when this option is selected. This value isn't displayed to the
   * user. The option's children are displayed instead.
   */
  value: string;
}

/**
 * Props for an OptionGroup component that visually groups related
 * options under a shared label within a Select.
 */
export interface OptionGroupProps {
  /**
   * Whether all options within this group are disabled. When `true`,
   * none of the options in the group can be selected.
   */
  disabled?: boolean;

  /**
   * The visible label for this group of options. It's displayed as a
   * non-selectable heading above the group's options.
   */
  label: string;
}

/**
 * Describes a single selectable option when using the `options` prop
 * on a Select component.
 */
export interface OptionDescription {
  /**
   * Whether this option is disabled. When `true`, the option appears
   * dimmed and can't be selected by the user.
   */
  disabled?: boolean;

  /**
   * The text displayed to the user for this option.
   */
  label: string;

  /**
   * The value that will be passed to the select's `onChange` callback
   * when this option is selected.
   */
  value: string;
}

/**
 * Describes a group of related options when using the `options` prop
 * on a Select component. Groups display a non-selectable heading
 * label above their nested options.
 */
export interface OptionGroupDescription {
  /**
   * Whether all options within this group are disabled. When `true`,
   * none of the options in the group can be selected.
   */
  disabled?: boolean;

  /**
   * The visible label for this group of options. It's displayed as a
   * non-selectable heading above the group's options.
   */
  label: string;

  /**
   * The selectable options within this group. Each option requires
   * a `label` and `value`.
   */
  options?: OptionDescription[];
}

/** A Select component that renders a dropdown menu for choosing from a list of options. */
export const Select = createRemoteComponent<'Select', SelectProps>('Select');
