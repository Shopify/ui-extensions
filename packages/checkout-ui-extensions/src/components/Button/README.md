# Button

Buttons are used for actions, such as “Add”, “Continue”, “Pay now”, or “Save”.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| kind? | <code>"primary" &#124; "secondary" &#124; "plain"</code> | The type of button that will be rendered. The visual presentation of the button type is controlled by merchants through the Branding API.<br /><br />`primary`: button used for main actions. For example: &#34;Continue to next step&#34;.<br /><br />`secondary`: button used for secondary actions not blocking user progress. For example: &#34;Download Shop app&#34;.<br /><br />`plain`: renders a button that visually looks like a link.<br /><br />Default value: <code>'primary'</code> |
| appearance? | <code>"critical" &#124; "monochrome"</code> | Specify the color treatment of the Button.<br /><br /><code>"critical"</code>: Conveys a problem has arisen.<br /><br /><code>"monochrome"</code>: Takes the color of its parent. |
| submit? | <code>boolean</code> | Allows the button to submit a form. |
| to? | <code>string</code> | Destination URL to link to. If this value is set, the button will render as a Link. |
| inlineAlignment? | <code>"start" &#124; "center" &#124; "end"</code> | Specifies the inline alignment of the content.<br /><br />Default value: <code>'center'</code> |
| loading? | <code>boolean</code> | Replaces content with a loading indicator.<br /><br />Default value: <code>false</code> |
| loadingLabel? | <code>string</code> | Accessible label for the loading indicator when user prefers reduced motion. This value is only used if `loading` is true. |
| accessibilityLabel? | <code>string</code> | A label used for buyers using assistive technologies. When set, any `children` supplied to this component are hidden from being seen for accessibility purposes to prevent duplicate content from being read. |
| accessibilityRole? | <code>"button" &#124; "submit"</code> | The role of the button that will be rendered.<br /><br />`button`: renders a regular button.<br /><br />`submit`: renders a button that submits a form.<br /><br />Default value: <code>'button'</code> |
| disabled? | <code>boolean</code> | Disables the button, disallowing any interaction.<br /><br />Default value: <code>false</code> |
| onPress? | <code>() => void</code> | Callback that is run when the button is pressed. |
| overlay? | <code>RemoteFragment</code> | An overlay component to render when the user interacts with the component. |