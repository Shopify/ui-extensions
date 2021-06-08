# Select

Selects let buyers choose one option from an options menu. Consider select when you have 4 or more options, to avoid cluttering the interface.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| id? | <code>string</code> | A unique identifier for the field. When no `id` is provided, a globally unique value will be used instead.  |
| label | <code>string</code> | Content to use as the field label.  |
| name? | <code>string</code> | An identifier for the field that is unique within the nearest containing `&lt;Form /&gt;` component.  |
| value? | <code>string</code> | The active option for the select. This should match to one of the `value` properties in the `options` prop. When not provided, the value will default to an empty string, which will show the `placeholder` text as the &#34;selected value&#34;.  |
| options | <code><a href="#option">Option</a>[]</code> | The options a buyer can select from.  |
| required? | <code>boolean</code> | Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with the `error` prop.  |
| disabled? | <code>boolean</code> | Whether the select can be changed.  |
| error? | <code>string</code> | An error label to present with the field.  |
| autocomplete? | <code>UndocumentedType &#124; boolean</code> | A hint as to the intended content of the field.<br /><br />When set to `true`, this property indicates that the field should support autofill, but you do not have any more semantic information on the intended contents.<br /><br />When set to `false`, you are indicating that this field contains sensitive information, or contents that are never saved, like one-time codes. Note that it is impossible to prevent autocomplete in some browsers, so do not depend on its absence.<br /><br />Alternatively, you can provide an `Autocomplete` object, which describes the specific data you would like to be entered into this field during autocomplete.  |
| placeholder? | <code>string</code> | The text displayed in the select when no value is provided.  |
| onChange? | <code>(value: string) => void</code> |  A callback that is run whenever the selected option changes. This callback is called with the string `value` of the selected `option`. This component is [controlled](https://reactjs.org/docs/forms.html#controlled-components), so you **must** store this value in state and reflect it back in the `value` prop of the select.    |<a name="Option"></a>

### Option

| Name | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The value that will be passed to the select’s `onChange` callback when this option is selected.  |
| label | <code>string</code> | The buyer-facing label for this option.  |
| disabled? | <code>boolean</code> | Whether this option can be selected or not.  |