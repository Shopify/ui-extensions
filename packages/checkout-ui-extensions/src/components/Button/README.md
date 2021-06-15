# Button

Buttons are used for actions, such as “Add”, “Continue”, “Pay now”, or “Save”.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| submit? | <code>boolean</code> | Allows the button to submit a form  |
| to? | <code>string</code> | Destination to link to, renders a Link  |
| subdued? | <code>boolean</code> | Renders a visually subdued button  |
| plain? | <code>boolean</code> | Renders a button that visually looks like a Link  |
| fill? | <code>boolean</code> | Whether the button should fill all available inline space.  |
| loading? | <code>boolean</code> | Replaces content with a loading indicator  |
| loadingLabel? | <code>string</code> | Accessible label for the loading indicator when user prefers reduced motion  |
| accessibilityLabel? | <code>string</code> | A label used for buyers using assistive technologies. When provided, any 'children' supplied to this component are hidden from being seen for accessibility purposes to prevent duplicate content from being read.  |
| disabled? | <code>boolean</code> | Disables the button, disallowing any interaction  |
| onPress? | <code>() => void</code> | Callback when pressed  |