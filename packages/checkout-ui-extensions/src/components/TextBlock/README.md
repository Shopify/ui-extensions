# TextBlock

Text block is used to render a block of text that occupies the full width available, like a paragraph.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| size? | <code>"extraSmall" &#124; "small" &#124; "base" &#124; "large" &#124; "extraLarge" &#124; "medium"</code> | Size of the text |
| emphasis? | <code>"stress" &#124; "offset" &#124; "strong"</code> | Use to emphasize a word or a group of words compared to other nearby text.<br /><br /><code>"stress"</code>: Indicate emphatic stress. By default the text will be italic and render a `<em>` tag in an HTML host.<br /><br /><code>"offset"</code>: Indicate an offset from the normal prose of the text. Typically used to indicate a foreign word, fictional character thoughts, or when the text refers to the definition of a word instead of representing its semantic meaning. By default the text will be italic and render a `<i>` tag in an HTML host.<br /><br /><code>"strong"</code>: Indicate strong importance, seriousness, or urgency. By default the text will be bold and render a `<strong>` tag in an HTML host. |
| id? | <code>string</code> | Unique identifier |
| appearance? | <code>"accent" &#124; "subdued" &#124; "info" &#124; "success" &#124; "warning" &#124; "critical"</code> | Changes the visual appearance<br /><br /><code>"accent"</code>: Use to convey emphasis and draw attention to the icon.<br /><br /><code>"subdued"</code>: Use to convey a subdued or disabled state for the icon.<br /><br /><code>"info"</code>: Use to convey icon is informative or has information.<br /><br /><code>"success"</code>: Use to convey a successful interaction.<br /><br /><code>"warning"</code>: Use to convey something needs attention or an action needs to be taken.<br /><br /><code>"critical"</code>: Use to convey a problem has arisen. |
| inlineAlignment? | <code>"start" &#124; "center" &#124; "end"</code> | Align text along the main axis. |