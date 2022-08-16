# Banner

Use banners to communicate important messages to customers in a prominent way.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| title? | <code>string</code> | Banners have an optional title. Use a title to grab the buyer’s attention with a short, concise message. Banners with no title should have child elements to convey the banner’s purpose to the buyer. |
| status? | <code>"info" &#124; "success" &#124; "warning" &#124; "critical"</code> | Sets the status of the banner.<br /><br /><code>"info"</code>: Use to convey general information or actions that aren't critical or tied to a particular action.<br /><br /><code>"success"</code>: Use rarely, only if you need additional visual confirmation that a non-standard action has been completed successfully, for example adding an item to an order as an upsell.<br /><br /><code>"warning"</code>: Use to display information that needs attention or that customers should take action on. Seeing these banners can be stressful for customers so be cautious about using them. Should not block progress to next step.<br /><br /><code>"critical"</code>: Use to communicate problems that have to be resolved immediately for customers to complete a task. For example, using a different payment method if card details couldn't be processed. Seeing these banners can be stressful for customers so be cautious about using them.<br /><br />Default value: <code>'info'</code> |
| collapsible? | <code>boolean</code> | Makes the content collapsible. A collapsible banner will conceal child elements initially, but allow the user to expand the banner to see them.<br /><br />Default value: <code>false</code> |
| onDismiss? | <code>() => void</code> | Callback when banner is dismissed. This component is [controlled](https://reactjs.org/docs/forms.html#controlled-components), so you must manage the visibility of the banner in state by using the onDismiss callback. |