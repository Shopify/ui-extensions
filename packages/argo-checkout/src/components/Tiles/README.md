# Tiles

The Tiles component is used to lay out elements as equally-sized elements, optionally wrapping on multiple lines as well as a stack when space is limited. If you have a direct child of `Tiles` that you don’t want to stretch, wrap that child in a `View` component.
 
## Props
required = *
<table><tr><th>Name</th><th>Type</th><th>Description</th></tr><tr><td>maxPerLine</td><td><code>number</code></td><td>Number of tiles per line. </td></tr><tr><td>breakAt</td><td><code>number</code></td><td>Width of the component when the tiles stack on the cross-axis. Each tile will then take all the available space. It accepts a number in pixel. If not specified, the tiles will never stack and each of them will progressively shrink when the screen is resized. </td></tr><tr><td>alignment</td><td><code>"leading"</code> | <code>"center"</code> | <code>"trailing"</code> | <code>"baseline"</code></td><td>Position tiles along the cross axis </td></tr><tr><td>spacing</td><td><code>"none"</code> | <code>"xtight"</code> | <code>"tight"</code> | <code>"loose"</code> | <code>"xloose"</code></td><td>Adjust spacing between tiles </td></tr></table>