# Text

Text is used to visually style and provide semantic value for a small piece of text
content.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| size? | <code>"extraSmall" &#124; "small" &#124; "base" &#124; "large" &#124; "extraLarge"</code> | The size of the text.  |
| emphasized? | <code>boolean</code> | Use to emphasize text that is more important than other nearby text.  |
| subdued? | <code>boolean</code> | Use to de-emphasize text that is less important than other nearby text.  |
| role? | <code>"address" &#124; "deletion" &#124; UndocumentedType &#124; UndocumentedType &#124; UndocumentedType</code> | Assign semantic value.  |
| id? | <code>string</code> | Unique identifier. Typically used as a target for another component’s controls to associate an accessible label with an action.  |
| appearance? | <code>"critical" &#124; "warning" &#124; "success" &#124; "accent"</code> | The visual appearance of the text.  |