# InlineLayout

InlineLayout is used to lay out content over multiple columns.

By default, all columns are of equal size and fill the available inline space.
Content does not wrap on new rows when not enough columns have been explicitly sized,
instead they are added as new column and fill the remaining inline space.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| columns? | <code>GridSize &#124; GridSize[]</code> | Sizes for each column of the layout.<br /><br /> `auto`: intrinsic size of the element<br /><br />`fill`: fills the remaining available space. When multiple elements are set to `fill`, the remaining space is shared equally.<br /><br />`Unit`: size in pixels `px`, percentages `%` or fractions `fr`.<br /><br /> - When the sum of the defined sizes is larger than the available space, elements will shrink to avoid overflow.<br /><br />- When the size of an element is not explicitly set, it will fill the remaining space available.<br /><br />- When only one size is set, all elements of the layout will take that size.<br /><br /> Default value: <code>'fill'</code> |