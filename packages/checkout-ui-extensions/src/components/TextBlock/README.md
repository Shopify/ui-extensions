# TextBlock

Text block is used to render a block of text that occupies the full width available, like a paragraph.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| size? | <code>"extraSmall" &#124; "small" &#124; "base" &#124; "large" &#124; "extraLarge"</code> | Size of the text  |
| emphasis? | <code>"stress" &#124; "offset" &#124; "strong"</code> | Use to emphasize a word or a group of words compared to other nearby text.<br /><br />`strong`: Indicate strong importance, seriousness, or urgency. By default the text will be bold.<br /><br />`stress`: Indicate emphatic stress. By default the text will be italic.<br /><br />`offset`: Indicate an offset from the normal prose of the text. Typically used to indicate a foreign word, fictional character thoughts, or when the text refers to the definition of a word instead of representing its semantic meaning. By default the text will be italic.  |
| id? | <code>string</code> | Unique identifier  |
| appearance? | <code>"critical" &#124; "warning" &#124; "success" &#124; "accent" &#124; "subdued" &#124; "information"</code> | Changes the visual appearance  |