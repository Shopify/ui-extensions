# Button

Buttons are used for actions, such as “Add”, “Continue”, “Pay now”, or “Save”.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| kind? | <code>"primary" &#124; "secondary" &#124; "plain"</code> | The type of button that will be rendered. The visual presentation of the button type is controlled by merchants through the Branding API.<br /><br /> - `primary`: button used for main actions. Ex: &#34;Continue to next step&#34;<br /><br />- `secondary`: button used for secondary actions not blocking user progress. Ex: &#34;Download Shop app&#34;<br /><br />- `plain`: renders a button that visually looks like a Link<br /><br /> Default value: <code>'primary'</code> |
| appearance? | <code>Extract<<wbr>"accent" &#124; "interactive" &#124; "subdued" &#124; "info" &#124; "success" &#124; "warning" &#124; "critical" &#124; "monochrome", "monochrome" &#124; "critical"<wbr>></code> | Specify the color treatment of the Button. By default, it will use the &#34;Primary / Secondary Action&#34; colors.  |
| submit? | <code>boolean</code> | Allows the button to submit a form  |
| to? | <code>string</code> | Destination URL to link to. If this value is set, the button will render as a Link.  |
| inlineAlignment? | <code>InlineAlignment</code> | Specifies the inline alignment of the content<br /><br />Default value: <code>'center'</code> |
| loading? | <code>boolean</code> | Replaces content with a loading indicator<br /><br />Default value: <code>false</code> |
| loadingLabel? | <code>string</code> | Accessible label for the loading indicator when user prefers reduced motion. This value is only used if `loading` is true.  |
| accessibilityLabel? | <code>string</code> | A label used for buyers using assistive technologies. When provided, any `children` supplied to this component are hidden from being seen for accessibility purposes to prevent duplicate content from being read.  |
| disabled? | <code>boolean</code> | Disables the button, disallowing any interaction<br /><br />Default value: <code>false</code> |
| onPress? | <code>() => void</code> | Callback that is run when the button is pressed  |