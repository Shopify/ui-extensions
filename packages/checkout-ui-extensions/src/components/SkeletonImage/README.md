# SkeletonImage

SkeletonImage is used to provide a low fidelity representation of an image before it appears on the page.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| blockSize? | <code>("auto" &#124; "fill" &#124; number &#124; &#96;${number}fr&#96; &#124; &#96;${number}%&#96;)[] &#124; "auto" &#124; "fill" &#124; number &#124; &#96;${number}fr&#96; &#124; &#96;${number}%&#96; &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr>("auto" &#124; "fill" &#124; number &#124; &#96;${number}fr&#96; &#124; &#96;${number}%&#96;)[] &#124; "auto" &#124; "fill" &#124; number &#124; &#96;${number}fr&#96; &#124; &#96;${number}%&#96;<wbr>></code> | Adjust the block size of the skeleton.  |
| inlineSize? | <code>("auto" &#124; "fill" &#124; number &#124; &#96;${number}fr&#96; &#124; &#96;${number}%&#96;)[] &#124; "auto" &#124; "fill" &#124; number &#124; &#96;${number}fr&#96; &#124; &#96;${number}%&#96; &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr>("auto" &#124; "fill" &#124; number &#124; &#96;${number}fr&#96; &#124; &#96;${number}%&#96;)[] &#124; "auto" &#124; "fill" &#124; number &#124; &#96;${number}fr&#96; &#124; &#96;${number}%&#96;<wbr>></code> | Adjust the inline size of the skeleton.  |
| aspectRatio? | <code>number</code> | Displays the skeleton at the specified aspect ratio (fills the width of the parent container and sets the height accordingly).  |<a name="ConditionalStyle"></a>

### ConditionalStyle

| Name | Type | Description |
| --- | --- | --- |
| default? | <code>T</code> |  |
| conditionals | <code><a href="#conditionalvalue">ConditionalValue</a><<wbr>T<wbr>>[]</code> |  |<a name="ConditionalValue"></a>

### ConditionalValue

| Name | Type | Description |
| --- | --- | --- |
| conditions | <code>Conditions</code> | The conditions that must be met for the value to be applied. At least one condition must be specified.  |
| value | <code>T</code> | The value that will be applied if the conditions are met.  |