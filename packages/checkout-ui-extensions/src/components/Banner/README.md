# Banner

Use banners to communicate important messages to customers in a prominent way.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| title? | <code>string</code> | Banners have an optional title. Use a title to grab the buyer’s attention with a short, concise message. Banners with no title should have child elements to convey the banner’s purpose to the buyer.  |
| status? | <code>"info" &#124; "success" &#124; "warning" &#124; "critical"</code> | Sets the status of the banner.<br /><br />Default value: <code>'info'</code> |
| collapsible? | <code>boolean</code> | Makes the content collapsible. A collapsible banner will conceal child elements initially, but allow the user to expand the Banner to see them.<br /><br />Default value: <code>false</code> |
| onDismiss? | <code>() => void</code> | Callback when banner is dismissed. This component is [controlled](https://reactjs.org/docs/forms.html#controlled-components), so you **must** manage the visibility of the Banner in state by using the onDismiss callback.  |