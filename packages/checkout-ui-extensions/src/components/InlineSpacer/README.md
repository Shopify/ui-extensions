# InlineSpacer

InlineSpacer is used to create empty inline space, typically when variable spacing
is needed between multiple elements.

Note that you should favor InlineStack when spacing between all elements is the same.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| spacing? | <code>"extraTight" &#124; "tight" &#124; "base" &#124; "loose" &#124; "extraLoose" &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr>"extraTight" &#124; "tight" &#124; "base" &#124; "loose" &#124; "extraLoose"<wbr>></code> | Adjust size of the spacer<br /><br />Default value: <code>'base'</code> |<a name="ConditionalStyle"></a>

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