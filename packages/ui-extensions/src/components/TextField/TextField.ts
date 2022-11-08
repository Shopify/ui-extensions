import {createRemoteComponent} from '@remote-ui/core';

export interface TextFieldProps {
  /**
   * Content to use as the field label.
   */
  label: string;

  /**
   * The current value for the field. If omitted, the field will be empty. You should
   * update this value in response to the `onChange` callback.
   */
  value?: string;

  /**
   * Callback when the user has **finished editing** a field. Unlike `onChange`
   * callbacks you may be familiar with from Polaris or other React component libraries,
   * this callback is **not** run on every change to the input. Text fields are
   * “partially controlled” components, which means that while the user edits the
   * field, its state is controlled by the component. Once the user has signalled that
   * they have finished editing the field (typically, by blurring the field), `onChange`
   * is called if the input actually changed from the most recent `value` property. At
   * that point, you are expected to store this “committed value” in state, and reflect
   * it in the text field’s `value` property.
   *
   * This state management model is important given how UI Extensions are rendered. UI Extension components
   * run on a separate thread from the UI, so they can’t respond to input synchronously.
   * A pattern popularized by [controlled React components](https://reactjs.org/docs/forms.html#controlled-components)
   * is to have the component be the source of truth for the input `value`, and update
   * the `value` on every user input. The delay in responding to events from a UI
   * extension is only a few milliseconds, but attempting to strictly store state with
   * this delay can cause issues if a user types quickly, or if the user is using a
   * lower-powered device. Having the UI thread take ownership for “in progress” input,
   * and only synchronizing when the user is finished with a field, avoids this risk.
   *
   * This callback is called with the current value of the field. If the value of a field
   * is the same as the current `value` prop provided to the field, the `onChange` callback
   * will not be run.
   */
  onChange?(value: string): void;

  /**
   * Callback when the user makes any changes in the field. As noted in the documentation
   * for `onChange`, you **must not** use this to update `state` — use the `onChange`
   * callback for that purpose. Use the `onInput` prop when you need to do something
   * as soon as the user makes a change, like clearing validation errors that apply to
   * the field as soon as the user begins making the necessary adjustments.
   *
   * This callback is called with the current value of the field.
   */
  onInput?(value: string): void;
}

export const TextField = createRemoteComponent<'TextField', TextFieldProps>(
  'TextField',
);
