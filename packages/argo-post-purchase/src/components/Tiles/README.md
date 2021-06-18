# Tiles

The Tiles component is used to lay out elements as equally-sized elements,
optionally wrapping on multiple lines as well as a stack when space is limited.
If you have a direct child of `Tiles` that you don’t want to stretch, wrap that
child in a `View` component.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| maxPerLine? | <code>number</code> | Number of tiles per line.  |
| breakAt? | <code>number</code> | Width of the component when the tiles stack on the cross-axis. Each tile will then take all the available space. It accepts a number in pixel. If not specified, the tiles will never stack and each of them will progressively shrink when the screen is resized.  |
| alignment? | <code>"leading" &#124; "center" &#124; "trailing"</code> | Position tiles along the cross axis  |
| spacing? | <code>"xtight" &#124; "tight" &#124; "loose" &#124; "xloose"</code> | Adjust spacing between tiles  |