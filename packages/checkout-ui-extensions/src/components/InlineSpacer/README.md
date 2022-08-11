# InlineSpacer

InlineSpacer is used to create empty inline space, typically when variable spacing
is needed between multiple elements.

Note that you should favor InlineStack when spacing between all elements is the same.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| spacing? | <code>"extraTight" &#124; "tight" &#124; "base" &#124; "loose" &#124; "extraLoose" &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr>"extraTight" &#124; "tight" &#124; "base" &#124; "loose" &#124; "extraLoose", AcceptedConditions<wbr>></code> | Adjust size of the spacer<br /><br />Default value: <code>'base'</code> |<a name="ConditionalStyle"></a>

### ConditionalStyle

| Name | Type | Description |
| --- | --- | --- |
| default? | <code>T</code> | The default value applied when none of the conditional values specified in `conditionals` are met.  |
| conditionals | <code><a href="#conditionalvalue">ConditionalValue</a><<wbr>T, AcceptedConditions<wbr>>[]</code> | An array of conditional values.  |<a name="ConditionalValue"></a>

### ConditionalValue

| Name | Type | Description |
| --- | --- | --- |
| conditions | <code>AcceptedConditions</code> | The conditions that must be met for the value to be applied. At least one condition must be specified.  |
| value | <code>T</code> | The value that will be applied if the conditions are met.  |