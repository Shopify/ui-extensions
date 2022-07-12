# Icon

Icons are pictograms or graphic symbols.
They can act as wayfinding tools or as a means of communicating functionality.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| accessibilityLabel? | <code>string</code> | A label that describes the purpose or contents of the icon. When set, it will be announced to buyers using assistive technologies and will provide them with more context.  |
| appearance? | <code>"accent" &#124; "interactive" &#124; "subdued" &#124; "info" &#124; "success" &#124; "warning" &#124; "critical" &#124; "monochrome"</code> | Sets the appearance (color) of the icon.<br /><br />By default the icon will inherit the color of its parent.<br /><br />Default value: <code>'monochrome'</code><br /><br /><code>"accent"</code>: Use to convey emphasis and draw attention to the icon.<br /><br /><code>"interactive"</code>: Use to convey that the icon is pressable, hoverable or otherwise interactive.<br /><br /><code>"subdued"</code>: Use to convey a subdued or disabled state for the icon.<br /><br /><code>"info"</code>: Use to convey icon is informative or has information.<br /><br /><code>"success"</code>: Use to convey a successful interaction.<br /><br /><code>"warning"</code>: Use to convey something needs attention or an action needs to be taken.<br /><br /><code>"critical"</code>: Use to convey a problem has arisen.<br /><br /><code>"monochrome"</code>: Will take the color of its parent |
| size? | <code>"extraSmall" &#124; "small" &#124; "base" &#124; "fill"</code> | Adjusts the size of the icon.<br /><br />Default value: <code>'base'</code> |
| source | <code>"arrowLeft" &#124; "arrowRight" &#124; "arrowUp" &#124; "arrowDown" &#124; "calendar" &#124; "camera" &#124; "caretDown" &#124; "cart" &#124; "checkmark" &#124; "chevronDown" &#124; "chevronUp" &#124; "chevronRight" &#124; "chevronLeft" &#124; "close" &#124; "critical" &#124; "discount" &#124; "delivered" &#124; "delivery" &#124; "disabled" &#124; "errorFill" &#124; "geolocation" &#124; "grid" &#124; "hamburger" &#124; "horizontalDots" &#124; "info" &#124; "infoFill" &#124; "list" &#124; "lock" &#124; "magnify" &#124; "map" &#124; "marker" &#124; "minus" &#124; "mobile" &#124; "note" &#124; "pen" &#124; "verticalDots" &#124; "plus" &#124; "questionFill" &#124; "reorder" &#124; "store" &#124; "success" &#124; "truck" &#124; "warning" &#124; "warningFill" &#124; "giftFill" &#124; "external" &#124; "profile"</code> | Specifies which icon to display  |