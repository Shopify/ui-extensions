# List

Lists display a set of related content. Each list item usually begins with a bullet or a number.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| spacing? | <code><a href="#spacing">Spacing</a> &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr><a href="#spacing">Spacing</a><wbr>></code> | Adjust spacing between list items<br /><br />Default value: <code>'base'</code> |
| marker? | <code>"none" &#124; "bullet" &#124; "number"</code> | Type of marker to display<br /><br />Default value: <code>'bullet'</code> |
| accessibilityLabel? | <code>string</code> | A label that describes the purpose or contents of the list. When set, it will be announced to buyers using assistive technologies and will provide them with more context.  |<a name="ConditionalStyle"></a>

### ConditionalStyle

| Name | Type | Description |
| --- | --- | --- |
| default? | <code>T</code> | The default value applied when none of the conditional values specified in `conditionals` are met.  |
| conditionals | <code><a href="#conditionalvalue">ConditionalValue</a><<wbr>T<wbr>>[]</code> | An array of conditional values.  |<a name="ConditionalValue"></a>

### ConditionalValue

| Name | Type | Description |
| --- | --- | --- |
| conditions | <code>Conditions</code> | The conditions that must be met for the value to be applied. At least one condition must be specified.  |
| value | <code>T</code> | The value that will be applied if the conditions are met.  |
<a name="Spacing"></a>

### Spacing

<code>"none" &#124; "extraTight" &#124; "tight" &#124; "base" &#124; "loose" &#124; "extraLoose"</code>