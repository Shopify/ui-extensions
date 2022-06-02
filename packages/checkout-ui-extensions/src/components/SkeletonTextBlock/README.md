# SkeletonTextBlock

SkeletonTextBlock is used to provide a low fidelity representation of a block of text before it appears on the page.

## Props
optional = ?


<div style="border: 2px red solid;">

| Name | Type | Description |
| --- | --- | --- |
| lastLineSize? | <code>"small" &#124; "medium" &#124; "large" &#124; "fill"</code> | Adjust the size of the last line. It also applies when the number of lines is `1`.  |
| lines? | <code>number</code> | Number of lines to display when no children are passed.<br /><br />Default value: <code>1</code> |
| size? | <code>"extraSmall" &#124; "small" &#124; "base" &#124; "large" &#124; "extraLarge"</code> | Size of the text  |
| emphasis? | <code>"stress" &#124; "offset" &#124; "strong"</code> | Use to emphasize a word or a group of words compared to other nearby text.<br /><br />`strong`: Indicate strong importance, seriousness, or urgency. By default the text will be bold.<br /><br />`stress`: Indicate emphatic stress. By default the text will be italic.<br /><br />`offset`: Indicate an offset from the normal prose of the text. Typically used to indicate a foreign word, fictional character thoughts, or when the text refers to the definition of a word instead of representing its semantic meaning. By default the text will be italic.  |

</div>