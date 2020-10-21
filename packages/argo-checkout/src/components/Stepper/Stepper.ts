import {createRemoteComponent} from '@remote-ui/core';

export interface StepperProps {
  /**
   * A unique identifier for the field. When no `id` is provided,
   * a globally unique value will be used instead.
   */
  id?: string;
  /**
   * An identifier for the field that is unique within the nearest
   * containing `<Form />` component.
   */
  name?: string;
  /**
   * Holding the quantity inside the stepper field
   */
  label: string;
  /**
   * Current value for the field. If omitted, the field will be empty. You should update
   * this value in response to the `onChange` callback on a text field.
   */
  value?: number;
  /**
   * The highest number that can be inputted in the stepper field
   */
  max?: number;
  /**
   * The lowest number that can be inputted in the stepper field
   * @default 0
   */
  min?: number;
  /**
   * The amount the number can increase or decrease by
   * @default 1
   */
  step?: number;
  /**
   * Whether the field needs a value. This requirement adds semantic value
   * to the field, but it will not cause an error to appear automatically.
   * If you want to present an error when this field is empty, you can do
   * so with the `error` prop.
   */
  required?: boolean;
  /**
   * An error label to present with the field.
   */
  error?: string;
  /**
   * Callback when input is focused.
   */
  onFocus?(): void;
  /**
   * Callback when focus is removed.
   */
  onBlur?(): void;
  /**
   * Callback when the buyer has **finished editing** a field. Unlike `onChange`
   * callbacks you may be familiar with from Polaris or other React component libraries,
   * this callback is **not** run on every change to the input. Text fields are
   * “partially controlled” components, which means that while the buyer edits the
   * field, its state is controlled by the component. Once the buyer has signalled that
   * they have finished editing the field (typically, by blurring the field), `onChange`
   * is called if the input actually changed from the most recent `value` property. At
   * that point, you are expected to store this “committed value” in state, and reflect
   * it in the text field’s `value` property.
   *
   * This state management model is important given how Argo renders UI. Argo components
   * run on a separate thread from the UI, so they can’t respond to input synchronously.
   * A pattern popularized by [controlled React components](https://reactjs.org/docs/forms.html#controlled-components)
   * is to have the component be the source of truth for the input `value`, and update
   * the `value` on every user input. The delay in responding to events from an Argo
   * extension is only a few milliseconds, but attempting to strictly store state with
   * this delay can cause issues if a user types quickly, or if the buyer is using a
   * lower-powered device. Having the UI thread take ownership for “in progress” input,
   * and only synchronizing when the user is finished with a field, avoids this risk.
   *
   * It can still sometimes be useful to be notified when the user makes any input in
   * the field. If you need this capability, you can use the `onInput` prop. However,
   * never use that property to create tightly controlled state for the `value`.
   *
   * This callback is called with the current value of the field. If the value of a field
   * is the same as the current `value` prop provided to the field, the `onChange` callback
   * will not be run.
   */
  onChange?(value: string): void;
}

export const Stepper = createRemoteComponent<'Stepper', StepperProps>(
  'Stepper',
);
