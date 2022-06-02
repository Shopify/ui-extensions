# Checkbox

Use checkboxes to give customers a single binary option, such as signing up for marketing, or agreeing to terms and conditions.

## Props
optional = ?


<div style="border: 2px red solid;">

| Name | Type | Description |
| --- | --- | --- |
| id? | <code>string</code> | A unique identifier for the field. When no `id` is provided, a globally unique value will be used instead.  |
| name? | <code>string</code> | An identifier for the field that is unique within the nearest containing `Form` component.  |
| value? | <code>boolean</code> | Whether the checkbox is active. This prop is an alias for `checked`, and can be useful in form libraries that provide a normalized API for dealing with both `boolean` and `string` values. If both `value` and `checked` are provided, `checked` takes precedence.  |
| checked? | <code>boolean</code> | Whether the checkbox is active.  |
| disabled? | <code>boolean</code> | Whether the checkbox can be changed.  |
| error? | <code>string &#124; boolean</code> | Indicate an error to the user. The field will be given a specific stylistic treatment to communicate problems that have to be resolved immediately.<br /><br />When set as a string, the string is presented close to the Checkbox.<br /><br />When set as a boolean, `true`, the developer can position the error message as they need using an `InlineError` component. To ensure the error message is associated with the input and accessible to all users, set the `id` property on this component and the `controlId` on the `InlineError` component.  |
| accessibilityLabel? | <code>string</code> | A label to use for the field that will be used for buyers using assistive technologies. When provided, any `children` supplied to this component are hidden from being seen for accessibility purposes to prevent duplicate content from being read.  |
| onChange? | <code>(value: boolean) => void</code> | A callback that is run whenever the checkbox is changed. This callback is called with a boolean indicating whether the checkbox should now be active or inactive. This component is [controlled](https://reactjs.org/docs/forms.html#controlled-components), so you **must** store this value in state and reflect it back in the `checked` or `value` props.  |

</div>