# BlockSpacer

BlockSpacer is used to create empty block space, typically when variable spacing
is needed between multiple elements.

Note that you should favor BlockStack when spacing between all elements is the same.

## Props

optional = ?

| Name     | Type                                                                                                                                                                                                                          | Description                                                             |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| spacing? | <code>"extraTight" &#124; "tight" &#124; "base" &#124; "loose" &#124; "extraLoose" &#124; ConditionalStyle<<wbr>"extraTight" &#124; "tight" &#124; "base" &#124; "loose" &#124; "extraLoose", AcceptedConditions<wbr>></code> | Adjust size of the spacer<br /><br />Default value: <code>'base'</code> |
