import {createRemoteComponent} from '@remote-ui/core';

import type {Autocomplete} from '../shared';

/**
 * Selects let users choose one option from an options menu. Consider select when you have 4 or more options, to avoid cluttering the interface.
 * @publicDocs
 */
export interface SelectOptionProps {
  /**
   * The value that will be passed to the select’s `onChange` callback
   * when this option is selected.
   */
  value: string;
  /**
   * The user-facing label for this option.
   */
  label: string;
  /**
   * Whether the option is disabled, preventing selection.
   */
  disabled?: boolean;
}

/**
 * Selects let users choose one option from an options menu. Consider select when you have 4 or more options, to avoid cluttering the interface.
 * @publicDocs
 */
export interface SelectProps {
  /**
   * A unique identifier for the field. When no `id` is set,
   * a globally unique value will be used instead.
   */
  id?: string;
  /**
   * The text displayed as the field label, which identifies the purpose of the field to users.
   */
  label: string;
  /**
   * An identifier for the field that is unique within the nearest
   * containing `Form` component.
   */
  name?: string;
  /**
   * The active option for the select. This should match to one of the
   * `value` properties in the `options` prop. When not set,
   * the value will default to an empty string, which will show the
   * `placeholder` text as the "selected value".
   */
  value?: string;
  /**
   * The options a user can select from.
   */
  options: SelectOptionProps[];
  /**
   * The placeholder text displayed in the field when it's empty, providing a hint about the expected input format or value.
   */
  placeholder?: string;
  /**
   * Whether the field needs a value. This requirement adds semantic value
   * to the field, but it will not cause an error to appear automatically.
   * If you want to present an error when this field is empty, you can do
   * so with the `error` prop.
   */
  required?: boolean;
  /**
   * Whether the select is disabled, preventing any user interaction.
   */
  disabled?: boolean;
  /**
   * Whether the select is read-only and can't be edited. Read-only selects remain focusable and their content is announced by screen readers.
   */
  readonly?: boolean;
  /**
   * An error message displayed below the field to indicate validation problems. When set, the field is styled with error indicators.
   */
  error?: string;
  /**
   * A hint as to the intended content of the field.
   *
   * When set to `true`, this property indicates that the field should support
   * autofill, but you do not have any more semantic information on the intended
   * contents.
   *
   * When set to `false`, you are indicating that this field contains sensitive
   * information, or contents that are never saved, like one-time codes. Note that
   * it is impossible to prevent autocomplete in some browsers, so do not depend on
   * its absence.
   *
   * Alternatively, you can provide an `Autocomplete` object, which describes the
   * specific data you would like to be entered into this field during autocomplete.
   */
  autocomplete?: Autocomplete | boolean;
  /**
   * A callback fired when the select loses focus.
   */
  onBlur?(): void;
  /**
   * A callback fired when the select receives focus.
   */
  onFocus?(): void;
  /**
   * A callback fired when the select value changes. This callback
   * is called with the string `value` of the selected `option`. This component
   * is [controlled](https://reactjs.org/docs/forms.html#controlled-components),
   * so you must store this value in state and reflect it back in the `value`
   * prop of the select.
   */
  onChange?(value: string): void;
}

/**
 * Selects let users choose one option from an options menu. Consider select
 * when you have 4 or more options, to avoid cluttering the interface.
 */
export const Select = createRemoteComponent<'Select', SelectProps>('Select');
