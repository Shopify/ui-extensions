# SkeletonText

SkeletonText is used to provide a low fidelity representation of text content before it appears on the page.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| inlineSize? | <code>Extract<<wbr>"extraSmall" &#124; "small" &#124; "base" &#124; "large" &#124; "extraLarge" &#124; "fill", "small" &#124; "base" &#124; "large"<wbr>></code> | Adjust the length of the text when no children are passed.  |
| size? | <code>Extract<<wbr>"extraSmall" &#124; "small" &#124; "base" &#124; "large" &#124; "extraLarge" &#124; "fill", "extraSmall" &#124; "small" &#124; "base" &#124; "large" &#124; "extraLarge"<wbr>> &#124; "medium"</code> | Size of the text  |
| emphasis? | <code>"stress" &#124; "offset" &#124; "strong"</code> | Use to emphasize a word or a group of words compared to other nearby text.  |
| accessibilityRole? | <code>"address" &#124; "deletion" &#124; "marking" &#124; Unknown<<wbr>MultiPick, MultiPick<wbr>> &#124; Unknown<<wbr>MultiPick, MultiPick<wbr>> &#124; Unknown<<wbr>MultiPick, MultiPick<wbr>></code> | Set the semantic of the component’s content  |