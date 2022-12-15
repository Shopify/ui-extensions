# SkeletonImage

SkeletonImage is used to provide a low fidelity representation of an image before it appears on the page.

## Props

optional = ?

| Name         | Type                                                                                                                                                                                | Description                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| blockSize?   | <code>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill" &#124; ConditionalStyle<<wbr>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill", AcceptedConditions<wbr>></code> | Adjust the block size of the skeleton.                                                                                         |
| inlineSize?  | <code>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill" &#124; ConditionalStyle<<wbr>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill", AcceptedConditions<wbr>></code> | Adjust the inline size of the skeleton.                                                                                        |
| aspectRatio? | <code>number</code>                                                                                                                                                                 | Displays the skeleton at the specified aspect ratio (fills the width of the parent container and sets the height accordingly). |
