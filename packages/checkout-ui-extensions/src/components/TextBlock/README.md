# TextBlock

Text block is used to render a block of text that occupies the full width available, like a paragraph.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| size? | <code>"extraSmall" &#124; "small" &#124; "base" &#124; "large" &#124; "extraLarge" &#124; "medium"</code> | Size of the text |
| emphasis? | <code>"italic" &#124; "bold"</code> | Use to emphasize a word or a group of words.<br /><br /><code>"italic"</code>: Set the text in italic. Combine with an `accessibilityRole` of `offset` or `stress` to add more meaning to the text.<br /><br /><code>"bold"</code>: Set the text in bold. Combine with an `accessibilityRole` of `strong` to add more meaning to the text. |
| id? | <code>string</code> | Unique identifier |
| appearance? | <code>"accent" &#124; "subdued" &#124; "info" &#124; "success" &#124; "warning" &#124; "critical"</code> | Changes the visual appearance<br /><br /><code>"accent"</code>: Conveys emphasis and draws attention to the element.<br /><br /><code>"subdued"</code>: Conveys a subdued or disabled state for the element.<br /><br /><code>"info"</code>: Conveys that the element is informative or has information.<br /><br /><code>"success"</code>: Convey a successful interaction.<br /><br /><code>"warning"</code>: Convey something needs attention or an action needs to be taken.<br /><br /><code>"critical"</code>: Conveys a problem has arisen. |
| inlineAlignment? | <code>"start" &#124; "center" &#124; "end"</code> | Align text along the main axis. |