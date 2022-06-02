# BlockLayout

BlockLayout is used to lay out content over multiple rows.

By default, all rows fill the available block space, sharing it equally.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| rows? | <code>"auto" &#124; "fill" &#124; number &#124; Unit &#124; "auto" &#124; "fill" &#124; number &#124; Unit[]</code> | Sizes for each row of the layout.<br /><br /> `auto`: intrinsic size of the element.<br /><br />`fill`: fills the remaining available space. When multiple elements are set to `fill`, the remaining space is shared equally.<br /><br />`Unit&lt;'%' | 'fr'&gt;`: size in percentages `%` or fractions `fr`.<br /><br />`number`: size in pixels `px`.<br /><br /> - When the sum of the defined sizes is larger than the available space, elements will shrink to avoid overflow.<br /><br />- When the size of an element is not explicitly set, it will fill the remaining space available.<br /><br />- When only one size is set and outside of an array, all elements of the layout will take that size.<br /><br /> Default value: <code>'fill'</code> |
| spacing? | <code>"none" &#124; "extraTight" &#124; "tight" &#124; "base" &#124; "loose" &#124; "extraLoose"</code> | Adjust spacing between children<br /><br />Default value: <code>'none'</code> |
| blockAlignment? | <code>"start" &#124; "center" &#124; "end" &#124; "baseline"</code> | Position children along the cross axis  |
| inlineAlignment? | <code>InlineAlignment</code> | Position children along the main axis  |
| accessibilityRole? | <code>NonPresentationalAccessibilityRole<<wbr>Exclude<wbr>> &#124; [NonPresentationalAccessibilityRole<<wbr>Exclude<wbr>>,NonPresentationalAccessibilityRole<<wbr>Exclude<wbr>>]</code> | Sets the semantic meaning of the component’s content. When provided, the role will be used by assistive technologies to help buyers navigate the page.  |
| accessibilityLabel? | <code>string</code> | A label that describes the purpose or contents of the element. When provided, it will be announced to buyers using assistive technologies and will provide them with more context.  |