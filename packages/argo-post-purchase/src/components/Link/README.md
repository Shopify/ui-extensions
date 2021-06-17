# Link

Link is used to navigate the buyer to another page.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| to? | <code>string</code> | Destination to navigate to. You **must** provide either this property, `onPress`, or both.  |
| external? | <code>boolean</code> | Open the link in a new window or tab  |
| id? | <code>string</code> | Unique identifier. Typically used as a target for another component’s controls to associate an accessible label with an action.  |
| onPress? | <code>() => void</code> | Callback when pressed. If `to` is provided, it will execute the callback and then navigate to the location specified by `to`.  |