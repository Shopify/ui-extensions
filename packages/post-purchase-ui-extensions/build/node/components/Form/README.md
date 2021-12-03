# Form

The `Form` component should be used to wrap one or more form controls.
This component provides an &#34;implicit submit&#34; behavior, where buyers can
submit the form from any input by pressing &#34;enter&#34; on their keyboards. This
behavior is widely expected, and should be respected as often as possible.

Unlike an HTML `form` element, this component does not support configuring
the descendant fields to be submitted via HTTP automatically. Instead, you
must provide an `onSubmit` callback that will perform the necessary HTTP
requests in JavaScript.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| disabled? | <code>boolean</code> | Whether the form is able to be submitted. When set to `true`, this will disable the implicit submit behavior of the form.  |
| implicitSubmit? | <code>boolean &#124; string</code> | Whether this form should be submitted when the buyer presses the &#34;enter&#34; key on their keyboard. Defaults to `true`. When set to a string value, the implicit submit behavior will be enabled, and the string will be used as a label for an explicit submit button that is visible only to assistive technologies.  |
| onSubmit | <code>() => void</code> | A callback that is run when the form is submitted.  |