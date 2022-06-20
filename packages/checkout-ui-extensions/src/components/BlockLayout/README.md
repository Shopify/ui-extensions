# BlockLayout

BlockLayout is used to lay out content over multiple rows.

By default, all rows fill the available block space, sharing it equally.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| rows? | <code>("auto" &#124; "fill" &#124; number &#124; &#96;&dollar;{number}fr&#96; &#124; &#96;&dollar;{number}%&#96;)[] &#124; "auto" &#124; "fill" &#124; number &#124; &#96;&dollar;{number}fr&#96; &#124; &#96;&dollar;{number}%&#96; &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr>("auto" &#124; "fill" &#124; number &#124; &#96;&dollar;{number}fr&#96; &#124; &#96;&dollar;{number}%&#96;)[] &#124; "auto" &#124; "fill" &#124; number &#124; &#96;&dollar;{number}fr&#96; &#124; &#96;&dollar;{number}%&#96;<wbr>></code> | Sizes for each row of the layout.<br /><br /> `auto`: intrinsic size of the element.<br /><br />`fill`: fills the remaining available space. When multiple elements are set to `fill`, the remaining space is shared equally.<br /><br />`` `${number}%` ``: size in percentages.<br /><br />`` `${number}fr` ``: size in fractions.<br /><br />`number`: size in pixels.<br /><br /> - When the sum of the defined sizes is larger than the available space, elements will shrink to avoid overflow.<br /><br />- When the size of an element is not explicitly set, it will fill the remaining space available.<br /><br />- When only one size is set and outside of an array, all elements of the layout will take that size.<br /><br /> Default value: <code>'fill'</code> |
| spacing? | <code>"none" &#124; "extraTight" &#124; "tight" &#124; "base" &#124; "loose" &#124; "extraLoose" &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr>"none" &#124; "extraTight" &#124; "tight" &#124; "base" &#124; "loose" &#124; "extraLoose"<wbr>></code> | Adjust spacing between children<br /><br />Default value: <code>'none'</code> |
| blockAlignment? | <code>"start" &#124; "center" &#124; "end" &#124; "baseline" &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr>"start" &#124; "center" &#124; "end" &#124; "baseline"<wbr>></code> | Position children along the cross axis  |
| inlineAlignment? | <code>"start" &#124; "center" &#124; "end" &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr>"start" &#124; "center" &#124; "end"<wbr>></code> | Position children along the main axis  |
| accessibilityRole? | <code><a href="#nonpresentationalaccessibilityrole">NonPresentationalAccessibilityRole</a> &#124; [<a href="#nonpresentationalaccessibilityrole">NonPresentationalAccessibilityRole</a>, <a href="#nonpresentationalaccessibilityrole">NonPresentationalAccessibilityRole</a>]</code> | Sets the semantic meaning of the component’s content. When set, the role will be used by assistive technologies to help buyers navigate the page.<br /><br /> Examples:<br /><br />- In an HTML host a `[&#34;listItem&#34;, &#34;separator&#34;]` tuple will render: `&lt;li role=&#34;separator&#34;&gt;`<br /><br />- In an HTML host a `&#34;listItem&#34;` string will render: `&lt;li&gt;`  |
| accessibilityLabel? | <code>string</code> | A label that describes the purpose or contents of the element. When set, it will be announced to buyers using assistive technologies and will provide them with more context.  |
<a name="NonPresentationalAccessibilityRole"></a>

## NonPresentationalAccessibilityRole

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
| <code>"alert"</code> | Used for important, and usually time-sensitive, information. |<a name="ConditionalStyle"></a>

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