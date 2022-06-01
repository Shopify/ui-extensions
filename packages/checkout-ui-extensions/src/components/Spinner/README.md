# Spinner

Spinner is used to notify buyers that their action is being processed.
The Spinner is usually used when sending or receiving data from a server.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| size? | <code>Extract<<wbr>"extraSmall" &#124; "small" &#124; "base" &#124; "large" &#124; "extraLarge" &#124; "fill", "extraSmall" &#124; "small" &#124; "base" &#124; "large" &#124; "fill"<wbr>></code> | Adjusts the size of the icon.<br /><br />Default value: <code>'base'</code> |
| appearance? | <code>Extract<<wbr>"accent" &#124; "interactive" &#124; "subdued" &#124; "info" &#124; "success" &#124; "warning" &#124; "critical" &#124; "monochrome", "accent" &#124; "monochrome"<wbr>></code> | Sets the appearance (color) of the icon.<br /><br />* `monochrome` will take the color of its parent.<br /><br />Default value: <code>'accent'</code> |
| accessibilityLabel? | <code>string</code> | A label to use for the Spinner that will be used for buyers using assistive technologies like screen readers. If will also be used to replace the animated loading indicator when buyers prefers reduced motion. If not included, it will use the loading indicator for all buyers.  |