# TextField

A text field is an input field that merchants can type into.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| id? | <code>string</code> | A unique identifier for the field. When no `id` is provided, a globally unique value will be used instead.  |
| name? | <code>string</code> | An identifier for the field that is unique within the nearest containing `&lt;Form /&gt;` component.  |
| label | <code>string</code> | Content to use as the field label. This value is also used as the placeholder when the field is empty.  |
| value? | <code>string</code> | Current value for the field. If omitted, the field will be empty. You should update this value in response to the `onChange` callback on a text field.  |
| type? | <code>"text" &#124; "email" &#124; "number" &#124; "telephone"</code> | The content type a buyer will enter into the field. This type is used to provide semantic value to the field and, where possible, will provide the buyer with a better editing experience for the content type.<br /><br />Note that the type property does not change the way the text field’s value will be provided in `onChange` or `onInput`; a text field with a type of `'number'` will still provide the exact user entry, as a string, to those callbacks. The type also does not perform any form of automatic validation. If you want to perform validation, use the `error` property.  |
| required? | <code>boolean</code> | Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with the `error` prop.  |
| error? | <code>string</code> | An error label to present with the field.  |
| multiline? | <code>boolean</code> | Whether the field supports multiple lines of input.  |
| autocomplete? | <code>UndocumentedType &#124; boolean</code> | A hint as to the intended content of the field.<br /><br />When set to `true`, this property indicates that the field should support autofill, but you do not have any more semantic information on the intended contents.<br /><br />When set to `false`, you are indicating that this field contains sensitive information, or contents that are never saved, like one-time codes. Note that it is impossible to prevent autofill in some browsers, so do not depend on its absence.<br /><br />Alternatively, you can provide an `Autocomplete` object, which describes the specific data you would like to be entered into this field during autofill.  |
| tooltip? | <code><a href="#tooltip">Tooltip</a></code> | Additional hint text to display for the field. The tooltip is activated by an icon pinned to the end of the field.  |
| onFocus? | <code>() => void</code> | Callback when input is focused.  |
| onBlur? | <code>() => void</code> | Callback when focus is removed.  |
| onChange? | <code>(value: string) => void</code> | Callback when the buyer has **finished editing** a field. Unlike `onChange` callbacks you may be familiar with from Polaris or other React component libraries, this callback is **not** run on every change to the input. Text fields are “partially controlled” components, which means that while the buyer edits the field, its state is controlled by the component. Once the buyer has signalled that they have finished editing the field (typically, by blurring the field), `onChange` is called if the input actually changed from the most recent `value` property. At that point, you are expected to store this “committed value” in state, and reflect it in the text field’s `value` property.<br /><br />This state management model is important given how App Bridge Checkout renders UI. App Bridge Checkout components run on a separate thread from the UI, so they can’t respond to input synchronously. A pattern popularized by [controlled React components](https://reactjs.org/docs/forms.html#controlled-components) is to have the component be the source of truth for the input `value`, and update the `value` on every user input. The delay in responding to events from an App Bridge Checkout extension is only a few milliseconds, but attempting to strictly store state with this delay can cause issues if a user types quickly, or if the buyer is using a lower-powered device. Having the UI thread take ownership for “in progress” input, and only synchronizing when the user is finished with a field, avoids this risk.<br /><br />It can still sometimes be useful to be notified when the user makes any input in the field. If you need this capability, you can use the `onInput` prop. However, never use that property to create tightly controlled state for the `value`.<br /><br />This callback is called with the current value of the field. If the value of a field is the same as the current `value` prop provided to the field, the `onChange` callback will not be run.  |
| onInput? | <code>(value: string) => void</code> | Callback when the user makes any changes in the field. As noted in the documentation for `onChange`, you **must not** use this to update `state` — use the `onChange` callback for that purpose. Use the `onInput` prop when you need to do something as soon as the buyer makes a change, like clearing validation errors that apply to the field as soon as the user begins making the necessary adjustments.<br /><br />This callback is called with the current value of the field.  |<a name="Tooltip"></a>

### Tooltip

| Name | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | A label to indicate what information the tooltip will provide. Currently, this label is only used for assistive technologies.  |
| content | <code>string</code> | The content to display within the tooltip.  |