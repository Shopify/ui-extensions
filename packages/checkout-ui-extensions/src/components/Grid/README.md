# Grid

Grid is used to lay out content in a matrix of rows and columns.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| columns? | <code><a href="#columns">Columns</a> &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr><a href="#columns">Columns</a>, AcceptedConditions<wbr>></code> | Sizes for each column of the layout.<br /><br /> `auto`: intrinsic size of the content.<br /><br />`fill`: fills the remaining available space. When multiple columns are set to `fill`, the remaining space is shared equally.<br /><br />`` `${number}%` ``: size in percentages.<br /><br />`` `${number}fr` ``: size in fractions.<br /><br />`number`: size in pixels.<br /><br /> - When the sum of the defined sizes is larger than the available space, elements will shrink to avoid overflow.<br /><br />- When only one size is set and outside of an array, the grid will have one column of that size.<br /><br />Default value: <code>'fill'</code> |
| rows? | <code><a href="#rows">Rows</a> &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr><a href="#rows">Rows</a>, AcceptedConditions<wbr>></code> | Sizes for each row of the layout.<br /><br /> `auto`: intrinsic size of the content.<br /><br />`fill`: fills the remaining available space. When multiple rows are set to `fill`, the remaining space is shared equally.<br /><br />`` `${number}%` ``: size in percentages.<br /><br />`` `${number}fr` ``: size in fractions.<br /><br />`number`: size in pixels.<br /><br /> - When the sum of the defined sizes is larger than the available space, elements will shrink to avoid overflow.<br /><br />- When only one size is set and outside of an array, the grid will have one row of that size.<br /><br />Default value: <code>'fill'</code> |
| spacing? | <code><a href="#spacing">Spacing</a> &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr><a href="#spacing">Spacing</a>, AcceptedConditions<wbr>></code> | Adjust spacing between children<br /><br />Default value: <code>'none'</code> |
| blockAlignment? | <code><a href="#blockalignment">BlockAlignment</a> &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr><a href="#blockalignment">BlockAlignment</a>, AcceptedConditions<wbr>></code> | Position children along the cross axis  |
| inlineAlignment? | <code><a href="#inlinealignment">InlineAlignment</a> &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr><a href="#inlinealignment">InlineAlignment</a>, AcceptedConditions<wbr>></code> | Position children along the main axis  |
| accessibilityRole? | <code><a href="#nonpresentationalaccessibilityrole">NonPresentationalAccessibilityRole</a> &#124; [<a href="#nonpresentationalaccessibilityrole">NonPresentationalAccessibilityRole</a>, <a href="#nonpresentationalaccessibilityrole">NonPresentationalAccessibilityRole</a>]</code> | Sets the semantic meaning of the component’s content. When set, the role will be used by assistive technologies to help buyers navigate the page.<br /><br /> For example:<br /><br />- In an HTML host a `['listItem', 'separator']` tuple will render: &lt;li role='separator'&gt;<br /><br />- In an HTML host a `listItem` string will render: &lt;li&gt;  |
| accessibilityLabel? | <code>string</code> | A label that describes the purpose or contents of the element. When set, it will be announced to buyers using assistive technologies and will provide them with more context.  |
| border? | <code><a href="#maybeshorthandproperty">MaybeShorthandProperty</a> &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr><a href="#maybeshorthandproperty">MaybeShorthandProperty</a>, AcceptedConditions<wbr>></code> | Adjust the border style.<br /><br />To shorten the code, it is possible to specify all the border style properties in one property.<br /><br />For example:<br /><br />- `base` means blockStart, inlineEnd, blockEnd and inlineStart border styles are `base`<br /><br />- `['base', 'none']` means blockStart and blockEnd border styles are `base`, inlineStart and inlineEnd border styles are `none`<br /><br />- `['base', 'none', 'dotted', 'base']` means blockStart border style is `base`, inlineEnd border style is `none`, blockEnd border style is `dotted` and  blockStart border style is `base`  |
| borderWidth? | <code><a href="#maybeshorthandproperty">MaybeShorthandProperty</a> &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr><a href="#maybeshorthandproperty">MaybeShorthandProperty</a>, AcceptedConditions<wbr>></code> | Adjust the border width.<br /><br />To shorten the code, it is possible to specify all the border width properties in one property.<br /><br />For example:<br /><br />- `base` means blockStart, inlineEnd, blockEnd and inlineStart border widths are `base`<br /><br />- `['base', 'medium']` means blockStart and blockEnd border widths are `base`, inlineStart and inlineEnd border widths are `medium`<br /><br />- `['base', 'medium', 'medium', 'base']` means blockStart border width is `base`, inlineEnd border width is `medium`, blockEnd border width is `medium` and  blockStart border width is `base`  |
| borderRadius? | <code><a href="#maybeshorthandproperty">MaybeShorthandProperty</a> &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr><a href="#maybeshorthandproperty">MaybeShorthandProperty</a>, AcceptedConditions<wbr>></code> | Adjust the border radius.<br /><br />To shorten the code, it is possible to specify all the border width properties in one property.<br /><br />For example:<br /><br />- `base` means blockStart, inlineEnd, blockEnd and inlineStart border radii are `base`<br /><br />- `['base', 'none']` means blockStart and blockEnd border radii are `base`, inlineStart and inlineEnd border radii are `none`<br /><br />- `['base', 'none', 'tight', 'base']` means blockStart border radius is `base`, inlineEnd border radius is `none`, blockEnd border radius is `tight` and  blockStart border radius is `base`  |
<a name="MaybeShorthandProperty"></a>

### MaybeShorthandProperty

<code>Property &#124; <a href="#shorthandproperty">ShorthandProperty</a></code>
<a name="ShorthandProperty"></a>

### ShorthandProperty

<code>[Property, Property] &#124; [Property, Property, Property, Property]</code>
<a name="NonPresentationalAccessibilityRole"></a>

### NonPresentationalAccessibilityRole

| Value | Description |
| --- | --- |
| <code>"main"</code> | Used to indicate the primary content. |
| <code>"header"</code> | Used to indicate the component is a header. |
| <code>"footer"</code> | Used to display information such as copyright information, navigation links, and privacy statements. |
| <code>"section"</code> | Used to indicate a generic section. |
| <code>"complementary"</code> | Used to designate a supporting section that relates to the main content. |
| <code>"navigation"</code> | Used to identify major groups of links used for navigating. |
| <code>"orderedList"</code> | Used to identify a list of ordered items. |
| <code>"listItem"</code> | Used to identify an item inside a list of items. |
| <code>"unorderedList"</code> | Used to identify a list of unordered items. |
| <code>"separator"</code> | Used to indicates the component acts as a divider that separates and distinguishes sections of content. |
| <code>"status"</code> | Used to define a live region containing advisory information for the user that is not important enough to be an alert. |
| <code>"alert"</code> | Used for important, and usually time-sensitive, information. |
<a name="InlineAlignment"></a>

### InlineAlignment

<code>"start" &#124; "center" &#124; "end"</code>
<a name="BlockAlignment"></a>

### BlockAlignment

<code><a href="#alignment">Alignment</a> &#124; "baseline"</code>
<a name="Alignment"></a>

### Alignment

<code>"start" &#124; "center" &#124; "end"</code>
<a name="Spacing"></a>

### Spacing

<code>"none" &#124; "extraTight" &#124; "tight" &#124; "base" &#124; "loose" &#124; "extraLoose"</code>
<a name="Rows"></a>

### Rows

<code><a href="#griditemsize">GridItemSize</a>[] &#124; <a href="#griditemsize">GridItemSize</a></code><a name="ConditionalStyle"></a>

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
<a name="Columns"></a>

### Columns

<code><a href="#griditemsize">GridItemSize</a>[] &#124; <a href="#griditemsize">GridItemSize</a></code>
<a name="GridItemSize"></a>

### GridItemSize

<code>"auto" &#124; "fill" &#124; number &#124; &#96;&dollar;{number}fr&#96; &#124; &#96;&dollar;{number}%&#96;</code>