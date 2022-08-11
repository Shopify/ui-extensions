# Tag

A Tag is used to help label, organize or categorize objects. It is commonly used in Checkout to display the discounts applied to a cart.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| children? | <code>string</code> |  |
| icon? | <code>"arrowLeft" &#124; "arrowRight" &#124; "arrowUp" &#124; "arrowUpRight" &#124; "arrowDown" &#124; "calendar" &#124; "camera" &#124; "caretDown" &#124; "cart" &#124; "checkmark" &#124; "chevronDown" &#124; "chevronUp" &#124; "chevronRight" &#124; "chevronLeft" &#124; "close" &#124; "critical" &#124; "discount" &#124; "delivered" &#124; "delivery" &#124; "disabled" &#124; "email" &#124; "errorFill" &#124; "geolocation" &#124; "grid" &#124; "hamburger" &#124; "horizontalDots" &#124; "info" &#124; "infoFill" &#124; "list" &#124; "lock" &#124; "magnify" &#124; "map" &#124; "marker" &#124; "minus" &#124; "mobile" &#124; "note" &#124; "pen" &#124; "verticalDots" &#124; "plus" &#124; "questionFill" &#124; "reorder" &#124; "store" &#124; "success" &#124; "truck" &#124; "warning" &#124; "warningFill" &#124; "giftFill" &#124; "external" &#124; "profile"</code> | Icon source  |
| accessibilityLabel? | <code>string</code> | A label used for buyers using assistive technologies. When set, any `children` supplied to this component are hidden from being seen for accessibility purposes to prevent duplicate content from being read.  |
| onRemove? | <code>() => void</code> | Callback when tag is removed  |