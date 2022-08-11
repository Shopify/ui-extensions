# SkeletonTextBlock

SkeletonTextBlock is used to provide a low fidelity representation of a block of text before it appears on the page.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| emphasis? | <code>"strong"</code> | Use to emphasize a word or a group of words compared to other nearby text.  |
| lines? | <code>number</code> | Number of lines to display when no children are passed.<br /><br />Default value: <code>1</code> |
| size? | <code>"extraSmall" &#124; "small" &#124; "base" &#124; "large" &#124; "extraLarge" &#124; "medium"</code> | Size of the text  |
| emphasis? | <code>"stress" &#124; "offset" &#124; "strong"</code> | Use to emphasize a word or a group of words compared to other nearby text.<br /><br /> <code>"stress"</code>: Indicate emphatic stress. By default the text will be italic and render a `<em>` tag in an HTML host.<br /><br /><code>"offset"</code>: Indicate an offset from the normal prose of the text. Typically used to indicate a foreign word, fictional character thoughts, or when the text refers to the definition of a word instead of representing its semantic meaning. By default the text will be italic and render a `<i>` tag in an HTML host.<br /><br /><code>"strong"</code>: Indicate strong importance, seriousness, or urgency. By default the text will be bold and render a `<strong>` tag in an HTML host. |