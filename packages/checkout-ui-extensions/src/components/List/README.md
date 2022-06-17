# List

Lists display a set of related content. Each list item usually begins with a bullet or a number.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| spacing? | <code>"none" &#124; "extraTight" &#124; "tight" &#124; "base" &#124; "loose" &#124; "extraLoose" &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr>"none" &#124; "extraTight" &#124; "tight" &#124; "base" &#124; "loose" &#124; "extraLoose"<wbr>></code> | Adjust spacing between list items<br /><br />Default value: <code>'base'</code> |
| marker? | <code>"none" &#124; "bullet" &#124; "number"</code> | Type of marker to display<br /><br />Default value: <code>'bullet'</code> |
| accessibilityLabel? | <code>string</code> | A label that describes the purpose or contents of the list. When set, it will be announced to buyers using assistive technologies and will provide them with more context.  |<a name="ConditionalStyle"></a>

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