# BlockLayout

BlockLayout is used to lay out content over multiple rows.

By default, all rows fill the available block space, sharing it equally.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| rows? | <code>GridSize &#124; GridSize[]</code> | Sizes for each row of the layout.<br /><br /> `auto`: intrinsic size of the element.<br /><br />`fill`: fills the remaining available space. When multiple elements are set to `fill`, the remaining space is shared equally.<br /><br />`Unit&lt;'%' | 'fr'&gt;`: size in percentages `%` or fractions `fr`.<br /><br />`number`: size in pixels `px`.<br /><br /> - When the sum of the defined sizes is larger than the available space, elements will shrink to avoid overflow.<br /><br />- When the size of an element is not explicitly set, it will fill the remaining space available.<br /><br />- When only one size is set and outside of an array, all elements of the layout will take that size.<br /><br /> Default value: <code>'fill'</code> |