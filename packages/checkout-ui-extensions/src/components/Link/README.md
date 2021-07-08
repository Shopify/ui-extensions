# Link

Link is used to navigate the buyer to another page.
 
## Props
required = *
<table><tr><th>Name</th><th>Type</th><th>Description</th></tr><tr><td>to</td><td><code>string</code></td><td>Destination to navigate to. You **must** provide either this property, `onPress`, or both. </td></tr><tr><td>external</td><td><code>boolean</code></td><td>Open the link in a new window or tab </td></tr><tr><td>id</td><td><code>string</code></td><td>Unique identifier. Typically used as a target for another component’s controls to associate an accessible label with an action. </td></tr><tr><td>onPress</td><td><code>() => void</code></td><td>Callback when pressed. If `to` is provided, it will execute the callback and then navigate to the location specified by `to`. </td></tr></table>