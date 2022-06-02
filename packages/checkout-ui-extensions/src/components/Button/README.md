# Button

Buttons are used for actions, such as “Add”, “Continue”, “Pay now”, or “Save”.

## Props
optional = ?


<div style="border: 2px red solid;">

| Name | Type | Description |
| --- | --- | --- |
| kind? | <code>"primary" &#124; "secondary" &#124; "plain"</code> | The type of button that will be rendered. The visual of these buttons are controlled by merchants through the Branding API.<br /><br /> - `primary`: button used for main actions. Ex: &#34;Continue to next step&#34;<br /><br />- `secondary`: button used for secondary actions not blocking user progress. Ex: &#34;Download Shop app&#34;<br /><br />- `plain`: renders a button that visually looks like a Link<br /><br /> Default value: <code>'primary'</code> |
| appearance? | <code>"monochrome" &#124; "critical"</code> | Specify the color treatment of the Button. By default, it will use the &#34;Primary / Secondary Action&#34; colors.<br /><br /> - `monochrome` will take the color of its parent.<br /><br />- `critical` will take the critical color.  |
| submit? | <code>boolean</code> | Allows the button to submit a form  |
| to? | <code>string</code> | Destination to link to, renders a Link  |
| inlineAlignment? | <code>"leading" &#124; "center" &#124; "trailing"</code> | Specifies the inline alignment of the content.<br /><br />Default value: <code>'center'</code> |
| loading? | <code>boolean</code> | Replaces content with a loading indicator  |
| loadingLabel? | <code>string</code> | Accessible label for the loading indicator when user prefers reduced motion  |
| accessibilityLabel? | <code>string</code> | A label used for buyers using assistive technologies. When provided, any `children` supplied to this component are hidden from being seen for accessibility purposes to prevent duplicate content from being read.  |
| disabled? | <code>boolean</code> | Disables the button, disallowing any interaction  |
| onPress? | <code>() => void</code> | Callback when pressed  |

</div>