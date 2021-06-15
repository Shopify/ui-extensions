import {createRemoteComponent} from '@remote-ui/core';
import {Autocomplete} from '../shared';

type Type = 'text' | 'email' | 'number' | 'telephone';

interface Tooltip {
  /**
   * A label to indicate what information the tooltip will provide. Currently,
   * this label is only used for assistive technologies.
   */
  label: string;
  /**
   * The content to display within the tooltip.
   */
  content: string;
}

export interface TextFieldProps {
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
   * Content to use as the field label. This value is also used as the placeholder
   * when the field is empty.
   */
  label: string;
  /**
   * Current value for the field. If omitted, the field will be empty. You should update
   * this value in response to the `onChange` callback on a text field.
   */
  value?: string;
  /**
   * The content type a buyer will enter into the field. This type is used to provide
   * semantic value to the field and, where possible, will provide the buyer with
   * a better editing experience for the content type.
   *
   * Note that the type property does not change the way the text field’s value will
   * be provided in `onChange` or `onInput`; a text field with a type of `'number'`
   * will still provide the exact user entry, as a string, to those callbacks. The
   * type also does not perform any form of automatic validation. If you want to
   * perform validation, use the `error` property.
   */
  type?: Type;
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
   * Whether the field supports multiple lines of input.
   */
  multiline?: boolean;
  /**
   * A hint as to the intended content of the field.
   *
   * When set to `true`, this property indicates that the field should support
   * autofill, but you do not have any more semantic information on the intended
   * contents.
   *
   * When set to `false`, you are indicating that this field contains sensitive
   * information, or contents that are never saved, like one-time codes. Note that
   * it is impossible to prevent autofill in some browsers, so do not depend on
   * its absence.
   *
   * Alternatively, you can provide an `Autocomplete` object, which describes the
   * specific data you would like to be entered into this field during autofill.
   */
  autocomplete?: Autocomplete | boolean;
  /**
   * Additional hint text to display for the field. The tooltip is activated by
   * an icon pinned to the end of the field.
   */
  tooltip?: Tooltip;
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
   * This state management model is important given how UI Extensions are rendered. UI extension components
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
   * This callback is called with the current value of the field. If the value of a field
   * is the same as the current `value` prop provided to the field, the `onChange` callback
   * will not be run.
   */
  onChange?(value: string): void;
  /**
   * Callback when the user makes any changes in the field. As noted in the documentation
   * for `onChange`, you **must not** use this to update `state` — use the `onChange`
   * callback for that purpose. Use the `onInput` prop when you need to do something
   * as soon as the buyer makes a change, like clearing validation errors that apply to
   * the field as soon as the user begins making the necessary adjustments.
   *
   * This callback is called with the current value of the field.
   */
  onInput?(value: string): void;
}

/**
 * A text field is an input field that merchants can type into.
 */
export const TextField = createRemoteComponent<'TextField', TextFieldProps>(
  'TextField',
);
