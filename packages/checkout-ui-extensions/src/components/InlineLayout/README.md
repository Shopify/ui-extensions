# InlineLayout

InlineLayout is used to lay out content over multiple columns.

By default, all columns are of equal size and fill the available inline space.
Content does not wrap on new rows when not enough columns have been explicitly set,
instead they are added as new column and fill the remaining inline space.

## Props
optional = ?


<div style="border: 2px red solid;">

| Name | Type | Description |
| --- | --- | --- |
| columns? | <code>GridSize &#124; GridSize[]</code> | Sizes for each column of the layout.<br /><br /> `auto`: intrinsic size of the element<br /><br />`fill`: fills the remaining available space. When multiple elements are set to `fill`, the remaining space is shared equally.<br /><br />`Unit&lt;'%' | 'fr'&gt;`: size in percentages `%` or fractions `fr`.<br /><br />`number`: size in pixels `px`.<br /><br /> - When the sum of the defined sizes is larger than the available space, elements will shrink to avoid overflow.<br /><br />- When the size of an element is not explicitly set, it will fill the remaining space available.<br /><br />- When only one size is set and outside of an array, all elements of the layout will take that size.<br /><br /> Default value: <code>'fill'</code> |
| spacing? | <code>"none" &#124; "extraTight" &#124; "tight" &#124; "base" &#124; "loose" &#124; "extraLoose"</code> | Adjust spacing between children<br /><br />Default value: <code>'none'</code> |
| blockAlignment? | <code>"center" &#124; "leading" &#124; "trailing" &#124; "baseline"</code> | Position children along the cross axis  |
| inlineAlignment? | <code>"center" &#124; "leading" &#124; "trailing"</code> | Position children along the main axis  |
| accessibilityRole? | <code>"main" &#124; "header" &#124; "footer" &#124; "section" &#124; "complementary" &#124; "navigation" &#124; "orderedList" &#124; "listItem" &#124; "unorderedList" &#124; "separator" &#124; "status" &#124; "alert" &#124; ["main" &#124; "header" &#124; "footer" &#124; "section" &#124; "complementary" &#124; "navigation" &#124; "orderedList" &#124; "listItem" &#124; "unorderedList" &#124; "separator" &#124; "status" &#124; "alert","main" &#124; "header" &#124; "footer" &#124; "section" &#124; "complementary" &#124; "navigation" &#124; "orderedList" &#124; "listItem" &#124; "unorderedList" &#124; "separator" &#124; "status" &#124; "alert"]</code> | Set the semantic of the component’s content  |
| accessibilityLabel? | <code>string</code> | A label that describes the purpose or contents of the element. When provided, it will be announced to buyers using assistive technologies and will provide them with more context.  |

</div>