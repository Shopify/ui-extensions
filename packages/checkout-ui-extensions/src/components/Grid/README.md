# Grid

Grid is used to lay out content in a matrix of rows and columns.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| columns? | <code>("auto" &#124; "fill" &#124; number &#124; &#96${number}fr&#96 &#124; &#96${number}%&#96)[] &#124; "auto" &#124; "fill" &#124; number &#124; &#96${number}fr&#96 &#124; &#96${number}%&#96</code> | Sizes for each column of the layout.<br /><br /> `auto`: intrinsic size of the content.<br /><br />`fill`: fills the remaining available space. When multiple columns are set to `fill`, the remaining space is shared equally.<br /><br />`` `${number}%` ``: size in percentages.<br /><br />`` `${number}fr` ``: size in fractions.<br /><br />`number`: size in pixels.<br /><br /> - When the sum of the defined sizes is larger than the available space, elements will shrink to avoid overflow.<br /><br />- When only one size is set and outside of an array, the grid will have one column of that size.<br /><br />Default value: <code>'fill'</code> |
| rows? | <code>("auto" &#124; "fill" &#124; number &#124; &#96${number}fr&#96 &#124; &#96${number}%&#96)[] &#124; "auto" &#124; "fill" &#124; number &#124; &#96${number}fr&#96 &#124; &#96${number}%&#96</code> | Sizes for each row of the layout.<br /><br /> `auto`: intrinsic size of the content.<br /><br />`fill`: fills the remaining available space. When multiple rows are set to `fill`, the remaining space is shared equally.<br /><br />`` `${number}%` ``: size in percentage.<br /><br />`` `${number}fr` ``: size in fraction.<br /><br />`number`: size in pixels.<br /><br /> - When the sum of the defined sizes is larger than the available space, elements will shrink to avoid overflow.<br /><br />- When only one size is set and outside of an array, the grid will have one row of that size.<br /><br />Default value: <code>'fill'</code> |
| spacing? | <code>"none" &#124; "extraTight" &#124; "tight" &#124; "base" &#124; "loose" &#124; "extraLoose"</code> | Adjust spacing between children<br /><br />Default value: <code>'none'</code> |
| blockAlignment? | <code>"start" &#124; "center" &#124; "end" &#124; "baseline"</code> | Position children along the cross axis  |
| inlineAlignment? | <code>InlineAlignment</code> | Position children along the main axis  |
| accessibilityRole? | <code>NonPresentationalAccessibilityRole<<wbr>Exclude<wbr>> &#124; [NonPresentationalAccessibilityRole<<wbr>Exclude<wbr>>,NonPresentationalAccessibilityRole<<wbr>Exclude<wbr>>]</code> | Sets the semantic meaning of the component’s content. When provided, the role will be used by assistive technologies to help buyers navigate the page.  |
| accessibilityLabel? | <code>string</code> | A label that describes the purpose or contents of the element. When provided, it will be announced to buyers using assistive technologies and will provide them with more context.  |