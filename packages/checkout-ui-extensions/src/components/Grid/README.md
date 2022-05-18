# Grid

Grid is used to lay out content in a matrix of rows and columns.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| columns? | <code>"extraSmall" &#124; "small" &#124; "base" &#124; "large" &#124; "extraLarge"[] &#124; "extraSmall" &#124; "small" &#124; "base" &#124; "large" &#124; "extraLarge"</code> | Sizes for each column of the layout.<br /><br /> `auto`: intrinsic size of the content.<br /><br />`fill`: fills the remaining available space. When multiple columns are set to `fill`, the remaining space is shared equally.<br /><br />`Unit&lt;'%' | 'fr'&gt;`: size in percentages `%` or fractions `fr`.<br /><br />`number`: size in pixels.<br /><br /> - When the sum of the defined sizes is larger than the available space, elements will shrink to avoid overflow.<br /><br />- When only one size is set and outside of an array, the grid will have one column of that size.<br /><br />Default value: <code>'fill'</code> |
| rows? | <code>"extraSmall" &#124; "small" &#124; "base" &#124; "large" &#124; "extraLarge"[] &#124; "extraSmall" &#124; "small" &#124; "base" &#124; "large" &#124; "extraLarge"</code> | Sizes for each row of the layout.<br /><br /> `auto`: intrinsic size of the content.<br /><br />`fill`: fills the remaining available space. When multiple rows are set to `fill`, the remaining space is shared equally.<br /><br />`Unit&lt;'%' | 'fr'&gt;`: size in percentages `%` or fractions `fr`.<br /><br />`number`: size in pixels.<br /><br /> - When the sum of the defined sizes is larger than the available space, elements will shrink to avoid overflow.<br /><br />- When only one size is set and outside of an array, the grid will have one row of that size.<br /><br />Default value: <code>'fill'</code> |
| spacing? | <code>"none" &#124; "extraTight" &#124; "tight" &#124; "base" &#124; "loose" &#124; "extraLoose"</code> | Adjust spacing between children<br /><br />Default value: <code>'none'</code> |
| blockAlignment? | <code>"center" &#124; "leading" &#124; "trailing" &#124; "baseline"</code> | Position children along the cross axis  |
| inlineAlignment? | <code>"center" &#124; "leading" &#124; "trailing"</code> | Position children along the main axis  |
| accessibilityRole? | <code>"main" &#124; "header" &#124; "footer" &#124; "section" &#124; "complementary" &#124; "navigation" &#124; "orderedList" &#124; "listItem" &#124; "unorderedList" &#124; "separator" &#124; "status" &#124; "alert" &#124; MultiPick</code> | Set the semantic of the component’s content  |
| accessibilityLabel? | <code>string</code> | A label that describes the purpose or contents of the element. When provided, it will be announced to buyers using assistive technologies and will provide them with more context.  |