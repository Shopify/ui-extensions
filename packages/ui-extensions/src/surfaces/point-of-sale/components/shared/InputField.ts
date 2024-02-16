/**
 * Represents an action type for the text field components.
 * @typedef {Object} InputAction
 * @property {string} label - The text displayed in the button.
 * @property {boolean} [disabled] - Whether the button is disabled.
 * @property {function(): void} onPress - A callback to be performed.
 */
export interface InputAction {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

/**
 * Represents the properties for the text field components.
 * @typedef {Object} InputProps
 * @property {boolean} [disabled] - Whether the field is disabled.
 * @property {string} [error] - Indicate an error to the user. The field will be given a specific stylistic treatment to communicate problems that have to be resolved immediately.
 * @property {string} [label] - Content to use as the field label.
 * @property {function(): void} [onBlur] - Callback when focus is blurred.
 * @property {function(value: string): void} [onChange] - Callback when the user has finished editing a field.
 * @property {function(): void} [onFocus] - Callback when input is focused.
 * @property {function(value: string): void} [onInput] - Callback when the user makes any changes in the field. As noted in the documentation for `onChange`, you **must not** use this to update `value` — use the `onChange` callback for that purpose. Use the `onInput` prop when you need to do something as soon as the user makes a change, like clearing validation errors that apply to the field as soon as the user begins making the necessary adjustments.
 * @property {string} [placeholder] - A short hint that describes the expected value of the field.
 * @property {boolean} [required] - Whether the field needs a value.
 * @property {string} [value] - The current value for the field. If omitted, the field will be empty. You should update this value in response to the `onChange` callback.
 * @property {string} [helpText] - Label under the text field which provides guidance or instructions that assist users.
 * @property {InputAction} [action] - A button under the text field to provide extra functionality.
 * @property {number?} [maxLength] - Specifies the maximum number of characters allowed.
 */
export interface InputProps {
  disabled?: boolean;
  error?: string;
  label: string;
  onBlur?: () => void;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onInput?: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  value?: string;
  helpText?: string;
  action?: InputAction;
  maxLength?: number;
}
