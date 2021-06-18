# Button

Button is used primarily for actions, such as “Continue”, “Apply”, or “Pay”.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| submit? | <code>boolean</code> | Allows the button to submit a form  |
| to? | <code>string</code> | Destination to link to, renders a Link  |
| subdued? | <code>boolean</code> | Renders a visually subdued button  |
| plain? | <code>boolean</code> | Renders a button that visually looks like a Link  |
| loading? | <code>boolean</code> | Replaces content with a loading indicator  |
| loadingLabel? | <code>string</code> | Accessible label for the loading indicator when user prefers reduced motion  |
| disabled? | <code>boolean</code> | Disables the button, disallowing any interaction  |
| onPress? | <code>() => void</code> | Callback when pressed  |