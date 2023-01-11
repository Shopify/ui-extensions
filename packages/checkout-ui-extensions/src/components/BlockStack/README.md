# BlockStack

BlockStack is used to vertically stack elements.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| inlineAlignment? | <code><a href="#inlinealignment">InlineAlignment</a> &#124; ConditionalStyle<<wbr><a href="#inlinealignment">InlineAlignment</a>, AcceptedConditions<wbr>></code> | Position children along the main axis |
| spacing? | <code><a href="#spacing">Spacing</a> &#124; ConditionalStyle<<wbr><a href="#spacing">Spacing</a>, AcceptedConditions<wbr>></code> | Adjust spacing between children<br /><br />Default value: <code>'base'</code> |
| accessibilityRole? | <code><a href="#nonpresentationalaccessibilityrole">NonPresentationalAccessibilityRole</a> &#124; [<a href="#nonpresentationalaccessibilityrole">NonPresentationalAccessibilityRole</a>, <a href="#nonpresentationalaccessibilityrole">NonPresentationalAccessibilityRole</a>]</code> | Sets the semantic meaning of the component’s content. When set, the role will be used by assistive technologies to help buyers navigate the page.<br /><br />For example:<br /><br />- In an HTML host a `['listItem', 'separator']` tuple will render: &lt;li role='separator'&gt;<br /><br />- In an HTML host a `listItem` string will render: &lt;li&gt; |
| accessibilityLabel? | <code>string</code> | A label that describes the purpose or contents of the element. When set, it will be announced to buyers using assistive technologies and will provide them with more context. |
| border? | <code><a href="#maybeshorthandproperty">MaybeShorthandProperty</a><<wbr><a href="#borderstyle">BorderStyle</a><wbr>> &#124; ConditionalStyle<<wbr><a href="#maybeshorthandproperty">MaybeShorthandProperty</a><<wbr><a href="#borderstyle">BorderStyle</a><wbr>>, AcceptedConditions<wbr>></code> | Adjust the border style.<br /><br />To shorten the code, it is possible to specify all the border style properties in one property.<br /><br />For example:<br /><br />- `base` means blockStart, inlineEnd, blockEnd and inlineStart border styles are `base`<br /><br />- `['base', 'none']` means blockStart and blockEnd border styles are `base`, inlineStart and inlineEnd border styles are `none`<br /><br />- `['base', 'none', 'dotted', 'base']` means blockStart border style is `base`, inlineEnd border style is `none`, blockEnd border style is `dotted` and  blockStart border style is `base` |
| borderWidth? | <code><a href="#maybeshorthandproperty">MaybeShorthandProperty</a><<wbr><a href="#borderwidth">BorderWidth</a><wbr>> &#124; ConditionalStyle<<wbr><a href="#maybeshorthandproperty">MaybeShorthandProperty</a><<wbr><a href="#borderwidth">BorderWidth</a><wbr>>, AcceptedConditions<wbr>></code> | Adjust the border width.<br /><br />To shorten the code, it is possible to specify all the border width properties in one property.<br /><br />For example:<br /><br />- `base` means blockStart, inlineEnd, blockEnd and inlineStart border widths are `base`<br /><br />- `['base', 'medium']` means blockStart and blockEnd border widths are `base`, inlineStart and inlineEnd border widths are `medium`<br /><br />- `['base', 'medium', 'medium', 'base']` means blockStart border width is `base`, inlineEnd border width is `medium`, blockEnd border width is `medium` and  blockStart border width is `base` |
| borderRadius? | <code><a href="#maybeshorthandproperty">MaybeShorthandProperty</a><<wbr><a href="#borderradius">BorderRadius</a><wbr>> &#124; ConditionalStyle<<wbr><a href="#maybeshorthandproperty">MaybeShorthandProperty</a><<wbr><a href="#borderradius">BorderRadius</a><wbr>>, AcceptedConditions<wbr>></code> | Adjust the border radius.<br /><br />To shorten the code, it is possible to specify all the border width properties in one property.<br /><br />For example:<br /><br />- `base` means blockStart, inlineEnd, blockEnd and inlineStart border radii are `base`<br /><br />- `['base', 'none']` means blockStart and blockEnd border radii are `base`, inlineStart and inlineEnd border radii are `none`<br /><br />- `['base', 'none', 'tight', 'base']` means blockStart border radius is `base`, inlineEnd border radius is `none`, blockEnd border radius is `tight` and  blockStart border radius is `base` |
| maxBlockSize? | <code>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill" &#124; ConditionalStyle<<wbr>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill", AcceptedConditions<wbr>></code> | Adjust the maximum block size.<br /><br />`number`: size in pixels.<br /><br />`` `${number}%` ``: size in percentages.<br /><br />`fill`: takes all the available space. |
| maxInlineSize? | <code>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill" &#124; ConditionalStyle<<wbr>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill", AcceptedConditions<wbr>></code> | Adjust the maximum inline size.<br /><br />`number`: size in pixels.<br /><br />`` `${number}%` ``: size in percentages.<br /><br />`fill`: takes all the available space. |
| minInlineSize? | <code>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill" &#124; ConditionalStyle<<wbr>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill", AcceptedConditions<wbr>></code> | Adjust the minimum inline size.<br /><br />`number`: size in pixels.<br /><br />`` `${number}%` ``: size in percentages.<br /><br />`fill`: takes all the available space. |
| minBlockSize? | <code>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill" &#124; ConditionalStyle<<wbr>number &#124; &#96;&dollar;{number}%&#96; &#124; "fill", AcceptedConditions<wbr>></code> | Adjust the block size.<br /><br />`number`: size in pixels.<br /><br />`` `${number}%` ``: size in percentages.<br /><br />`fill`: takes all the available space. |
| padding? | <code><a href="#maybeshorthandproperty">MaybeShorthandProperty</a><<wbr><a href="#spacing">Spacing</a><wbr>> &#124; ConditionalStyle<<wbr><a href="#maybeshorthandproperty">MaybeShorthandProperty</a><<wbr><a href="#spacing">Spacing</a><wbr>>, AcceptedConditions<wbr>></code> | Adjust the padding.<br /><br />To shorten the code, it is possible to specify all the padding properties in one property.<br /><br />Examples:<br /><br />- `base` means blockStart, inlineEnd, blockEnd and inlineStart paddings are `base`<br /><br />- [`base`, `none`] means blockStart and blockEnd paddings are `base`, inlineStart and inlineEnd paddings are `none`<br /><br />- [`base`, `none`, `loose`, `tight`] means blockStart padding is `base`, inlineEnd padding is `none`, blockEnd padding is `loose` and  blockStart padding is `tight` |
<a name="BorderRadius"></a>

### BorderRadius

<code>"base" &#124; "tight" &#124; "loose" &#124; "fullyRounded" &#124; "none"</code>
<a name="BorderWidth"></a>

### BorderWidth

<code>"base" &#124; "medium"</code>
<a name="MaybeShorthandProperty"></a>

### MaybeShorthandProperty

<code>T &#124; <a href="#shorthandproperty">ShorthandProperty</a><<wbr>T<wbr>></code>
<a name="ShorthandProperty"></a>

### ShorthandProperty

<code>[T, T] &#124; [T, T, T, T]</code>
<a name="BorderStyle"></a>

### BorderStyle

<code>"base" &#124; "dotted" &#124; "none"</code>
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
<a name="Spacing"></a>

### Spacing

<code>"none" &#124; "extraTight" &#124; "tight" &#124; "base" &#124; "loose" &#124; "extraLoose"</code>
<a name="InlineAlignment"></a>

### InlineAlignment

<code>"start" &#124; "center" &#124; "end"</code>