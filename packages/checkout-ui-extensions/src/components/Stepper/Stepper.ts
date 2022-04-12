import {createRemoteComponent} from '@remote-ui/core';

export interface StepperProps {
  /**
   * A detailed description for screen readers.
   */
  accessibilityDescription?: string;

  /**
   * Whether the stepper field can be modified.
   */
  disabled?: boolean;

  /**
   * Indicate an error to the user. The field will be given a specific stylistic treatment
   * to communicate problems that have to be resolved immediately.
   *
   * When set as a string, the string is presented close to the Checkbox.
   *
   * When set as a boolean, `true`, the developer can position the error message
   * as they need using an `InlineError` component. To ensure the error message is
   * associated with the input and accessible to all users, set the `id` property on this
   * component and the `controlId` on the `InlineError` component. E.g.,
   */
  error?: string | boolean;

  /**
   * A unique identifier for the stepper. When no `id` is provided,
   * a globally unique value will be used instead.
   */
  id?: string;

  /**
   * Content to use as the stepper label. This value is also used as the placeholder
   * when the stepper is empty.
   */
  label: string;

  /**
   * The highest decimal or integer to be accepted for the stepper field.
   * When used with `step` the value will round down to the max number.
   * Note: a buyer will still be able to use the keyboard to input a number lower than
   * the min. It is up to the developer to add appropriate validation.
   */
  max?: number;

  /**
   * The lowest decimal or integer to be accepted for the stepper field.
   * When used with `step` the value will round up to the min number.
   * Note: a buyer will still be able to use the keyboard to input a number lower than
   * the min. It is up to the developer to add appropriate validation.
   *
   * @defaultValue 0
   */
  min?: number;

  /**
   * An identifier for the stepper that is unique within the nearest
   * containing `Form` component.
   */
  name?: string;

  /**
   * Callback when focus is removed.
   */
  onBlur?(): void;

  /**
   * Callback when the buyer has **finished editing** a stepper field. Unlike `onChange`
   * callbacks you may be familiar with from Polaris or other React component libraries,
   * this callback is **not** run on every change to the input. Stepper fields are
   * “partially controlled” components, which means that while the buyer edits the
   * field, its state is controlled by the component. Once the buyer has signalled that
   * they have finished editing the field (typically, by blurring the field), `onChange`
   * is called if the input actually changed from the most recent `value` property. At
   * that point, you are expected to store this “committed value” in state, and reflect
   * it in the stepper field’s `value` property.
   *
   * A buyer can change the stepper field value with the increment/decrement buttons
   * A long press and hold will allow a buyer to rapidly increase/decrease the value.
   * The `onChange` callback is only run when the button is released.
   *
   * This state management model is important given how extension UIs are rendered.
   * UI extension components run on a separate thread from the checkout UI, so they can’t
   * respond to input synchronously. A pattern popularized by
   * [controlled React components](https://reactjs.org/docs/forms.html#controlled-components)
   * is to have the component be the source of truth for the input `value`, and update
   * the `value` on every user input. The delay in responding to events from a UI
   * extension is only a few milliseconds, but attempting to strictly store state with
   * this delay can cause issues if a user types quickly, or if the buyer is using a
   * lower-powered device. Having the checkout UI thread take ownership for “in progress”
   * input, and only synchronizing when the user is finished with a field, avoids this risk.
   *
   * This callback is called with the current value of the field. If the value of a field
   * is the same as the current `value` prop provided to the field, the `onChange` callback
   * will not be run.
   */
  onChange?(value: string): void;

  /**
   * Callback when input is focused.
   */
  onFocus?(): void;

  /**
   * Whether the stepper field is read-only.
   */
  readonly?: boolean;

  /**
   * Whether the stepper field needs a value. This requirement adds semantic value
   * to the field, but it will not cause an error to appear automatically.
   * If you want to present an error when this field is empty, you can do
   * so with the `error` prop.
   */
  required?: boolean;

  /**
   * The amount the value can increase or decrease by. This can be an integer or decimal.
   * If a `max` or `min` is specified with `step` when increasing/decreasing the value
   * via the stepper buttons the final value will always round to the `max` or `min`
   * rather than the closest valid amount.
   *
   * @defaultValue 1
   */
  step?: number;

  /**
   * Current value for the stepper. If omitted, the field will be empty. You should update
   * this value in response to the `onChange` callback on a stepper field.
   */
  value?: number;
}

/**
 * Use a stepper to increase or decrease a value, like changing the quantity from 1 to 2.
 */
export const Stepper = createRemoteComponent<'Stepper', StepperProps>(
  'Stepper',
);
