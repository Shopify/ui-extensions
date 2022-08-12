# ScrollView

ScrollView is a container for long form content, such as order summary line items,
that allows for scrolling so customers can expose more content as they view.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| hint? | <code>"innerShadow" &#124; {type: "pill", content: string}</code> | Provides a hint to the user that the area is scrollable.<br /><br />`pill`: renders a pill with a message at the end of the the scrollable area. It disappear as soon as the user starts scrolling.<br /><br />`innerShadow`: renders an inner visual hint to indicate that the content is scrollable.  |
| direction? | <code>"block" &#124; "inline"</code> | The direction on which the content is scrollable.<br /><br />`block`: Indicates that the content is scrollable on the main axis.<br /><br />`inline`: Indicates that the content is scrollable on the cross axis.<br /><br />Default value: <code>block</code> |
| scrollTo? | <code>number &#124; HTMLElement</code> | Scroll to a specific position or to an element.  |
| onScroll? | <code>(args: <a href="#scrollviewevent">ScrollViewEvent</a>) => void</code> | Callback function that is called when the scroll position changes. Allows to listen to events inside the component returning the position of the scroll.<br /><br />Note: On touch devices, the onScroll event is fired only when the user finishes scrolling which differs from non touch devices, where the onScroll event is fired when the user scrolls  |
| onScrolledToEdge? | <code>(args: <a href="#scrollviewevent">ScrollViewEvent</a>) => void</code> | Callback function that is called when the scroll position reaches one of the edges.  |
| border? | <code><a href="#maybeshorthandproperty">MaybeShorthandProperty</a> &#124; ConditionalStyle<<wbr><a href="#maybeshorthandproperty">MaybeShorthandProperty</a>, AcceptedConditions<wbr>></code> | Adjust the border style.<br /><br />To shorten the code, it is possible to specify all the border style properties in one property.<br /><br />For example:<br /><br />- `base` means blockStart, inlineEnd, blockEnd and inlineStart border styles are `base`<br /><br />- `['base', 'none']` means blockStart and blockEnd border styles are `base`, inlineStart and inlineEnd border styles are `none`<br /><br />- `['base', 'none', 'dotted', 'base']` means blockStart border style is `base`, inlineEnd border style is `none`, blockEnd border style is `dotted` and  blockStart border style is `base`  |
| borderWidth? | <code><a href="#maybeshorthandproperty">MaybeShorthandProperty</a> &#124; ConditionalStyle<<wbr><a href="#maybeshorthandproperty">MaybeShorthandProperty</a>, AcceptedConditions<wbr>></code> | Adjust the border width.<br /><br />To shorten the code, it is possible to specify all the border width properties in one property.<br /><br />For example:<br /><br />- `base` means blockStart, inlineEnd, blockEnd and inlineStart border widths are `base`<br /><br />- `['base', 'medium']` means blockStart and blockEnd border widths are `base`, inlineStart and inlineEnd border widths are `medium`<br /><br />- `['base', 'medium', 'medium', 'base']` means blockStart border width is `base`, inlineEnd border width is `medium`, blockEnd border width is `medium` and  blockStart border width is `base`  |
| borderRadius? | <code><a href="#maybeshorthandproperty">MaybeShorthandProperty</a> &#124; ConditionalStyle<<wbr><a href="#maybeshorthandproperty">MaybeShorthandProperty</a>, AcceptedConditions<wbr>></code> | Adjust the border radius.<br /><br />To shorten the code, it is possible to specify all the border width properties in one property.<br /><br />For example:<br /><br />- `base` means blockStart, inlineEnd, blockEnd and inlineStart border radii are `base`<br /><br />- `['base', 'none']` means blockStart and blockEnd border radii are `base`, inlineStart and inlineEnd border radii are `none`<br /><br />- `['base', 'none', 'tight', 'base']` means blockStart border radius is `base`, inlineEnd border radius is `none`, blockEnd border radius is `tight` and  blockStart border radius is `base`  |
<a name="MaybeShorthandProperty"></a>

### MaybeShorthandProperty

<code>Property &#124; <a href="#shorthandproperty">ShorthandProperty</a></code>
<a name="ShorthandProperty"></a>

### ShorthandProperty

<code>[Property, Property] &#124; [Property, Property, Property, Property]</code><a name="ScrollViewEvent"></a>

### ScrollViewEvent

| Name | Type | Description |
| --- | --- | --- |
| position | <code>{inline: number, block: number}</code> |  |
| scrolledTo | <code>{inline: "start" &#124; "end" &#124; null, block: "start" &#124; "end" &#124; null}</code> |  |