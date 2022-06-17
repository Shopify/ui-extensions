import {createRemoteComponent} from '@remote-ui/core';

import type {TextFieldProps} from '../TextField';

export interface PhoneFieldProps
  extends Pick<
    TextFieldProps,
    | 'autocomplete'
    | 'id'
    | 'icon'
    | 'accessory'
    | 'name'
    | 'label'
    | 'accessibilityDescription'
    | 'value'
    | 'required'
    | 'error'
    | 'disabled'
    | 'readonly'
    | 'onFocus'
    | 'onBlur'
    | 'maxLength'
  > {
  /**
   * Callback when the buyer has **finished editing** a field or pressed the country dropdown.
   * Unlike `onChange` callbacks you may be familiar with from Polaris or other React component libraries,
   * this callback is **not** run on every change to the input. Phone fields are
   * “partially controlled” components, which means that while the buyer edits the
   * field, its state is controlled by the component. Once the buyer has signalled that
   * they have finished editing the field (typically, by blurring the field), `onChange`
   * is called if the input actually changed from the most recent `value` property. At
   * that point, you are expected to store this “committed value” in state, and reflect
   * it in the phone field’s `value` property.
   *
   * This state management model is important given how UI Extensions are rendered. UI Extension components
   * run on a separate thread from the UI, so they can’t respond to input synchronously.
   * A pattern popularized by [controlled React components](https://reactjs.org/docs/forms.html#controlled-components)
   * is to have the component be the source of truth for the input `value`, and update
   * the `value` on every user input. The delay in responding to events from a UI
   * extension is only a few milliseconds, but attempting to strictly store state with
   * this delay can cause issues if a user types quickly, or if the buyer is using a
   * lower-powered device. Having the UI thread take ownership for “in progress” input,
   * and only synchronizing when the user is finished with a field, avoids this risk.
   *
   * It can still sometimes be useful to be notified when the user makes any input in
   * the field. If you need this capability, you can use the `onInput` prop. However,
   * never use that property to create tightly controlled state for the `value`.
   *
   * This callback is called with the current formatted value of the field. If the value
   * of a field is the same as the current `value` prop provided to the field,
   * the `onChange` callback will not be run.
   */
  onChange?(value: string): void;
  /**
   * Callback when the user makes any changes in the field including selecting a country
   * in the dropdown. As noted in the documentation for `onChange`, you **must not** use
   * this to update `state` — use the `onChange` callback for that purpose.
   * Use the `onInput` prop when you need to do something as soon as the buyer makes a change,
   * like clearing validation errors that apply to the field as soon as the user begins
   * making the necessary adjustments.
   *
   * This callback is called with the current formatted value.
   */
  onInput?(value: string): void;
}

/**
 * A PhoneField is an input field that merchants can type into optimized
 * for phone numbers with a country code base auto-formatting.
 * The country code is required for the initial render of the field but
 * it can be overriden later by the user either by selecting a country
 * in the country selection dropdown or by manually editing the country phone code
 * directly in the text field.
 */
export const PhoneField = createRemoteComponent<'PhoneField', PhoneFieldProps>(
  'PhoneField',
);
