# View

View is a generic container component. Its contents will always be their “natural” size, so this component can be useful in layout components (like `Layout`, `Tiles`, `BlockStack`, `InlineStack`) that would otherwise stretch their children to fit.

Note: View’s box model related properties like `padding`, `border`, `borderRadius`, and `borderColor` are implemented as [CSS Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts).

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| maxInlineSize? | <code>number &#124; <a href="#responsive">Responsive</a></code> | Adjust the maximum inline size.<br /><br />Numbers less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.<br /><br />Examples: - `500` represents `500px` - `0.5` represents `50%` - `1` represents `100%`  |
| padding? | <code>UndocumentedType &#124; UndocumentedType &#124; UndocumentedType &#124; <a href="#responsive">Responsive</a></code> | Adjust the padding.<br /><br />To shorten the code, it is possible to specify all the padding properties in one property.<br /><br />Examples: - `base` means blockStart, inlineEnd, blockEnd and inlineStart paddings are `base` - [`base`, `none`] means blockStart and blockEnd paddings are `base`, inlineStart and inlineEnd paddings are `none` - [`base`, `none`, `loose`, `tight`] means blockStart padding is `base`, inlineEnd padding is `none`, blockEnd padding is `loose` and  blockStart padding is `tight`  |
| background? | <code>"secondary" &#124; "transparent" &#124; <a href="#responsive">Responsive</a></code> | Adjust the background.  |
| border? | <code>UndocumentedType &#124; UndocumentedType &#124; UndocumentedType &#124; <a href="#responsive">Responsive</a></code> | Adjust the border style.<br /><br />To shorten the code, it is possible to specify all the border style properties in one property.<br /><br />Examples: - `base` means blockStart, inlineEnd, blockEnd and inlineStart border styles are `base` - [`base`, `none`] means blockStart and blockEnd border styles are `base`, inlineStart and inlineEnd border styles are `none` - [`base`, `none`, `dotted`, `base`] means blockStart border style is `base`, inlineEnd border style is `none`, blockEnd border style is `dotted` and  blockStart border style is `base`  |
| borderWidth? | <code>UndocumentedType &#124; UndocumentedType &#124; UndocumentedType &#124; <a href="#responsive">Responsive</a></code> | Adjust the border width.<br /><br />To shorten the code, it is possible to specify all the border width properties in one property.<br /><br />Examples: - `base` means blockStart, inlineEnd, blockEnd and inlineStart border widths are `base` - [`base`, `thick`] means blockStart and blockEnd border widths are `base`, inlineStart and inlineEnd border widths are `thick` - [`base`, `thick`, `thick`, `base`] means blockStart border width is `base`, inlineEnd border width is `thick`, blockEnd border width is `thick` and  blockStart border width is `base`  |
| borderColor? | <code>"base" &#124; "emphasized" &#124; <a href="#responsive">Responsive</a></code> | Adjust the border color.  |
| borderRadius? | <code>UndocumentedType &#124; UndocumentedType &#124; UndocumentedType &#124; <a href="#responsive">Responsive</a></code> | Adjust the border radius.<br /><br />To shorten the code, it is possible to specify all the border width properties in one property.<br /><br />Examples: - `base` means blockStart, inlineEnd, blockEnd and inlineStart border radii are `base` - [`base`, `none`] means blockStart and blockEnd border radii are `base`, inlineStart and inlineEnd border radii are `none` - [`base`, `none`, `tight`, `base`] means blockStart border radius is `base`, inlineEnd border radius is `none`, blockEnd border radius is `tight` and  blockStart border radius is `base`  |
| visibility? | <code>"hidden"</code> | Changes the visibility of the element.<br /><br />'hidden' visually hides the component while keeping it accessible to assistive technology (for example, a screen reader). Hidden elements do not take any visual space contrary to CSS visibility: hidden;  |
| accessibilityVisibility? | <code>"hidden"</code> | Changes the visibility of the element to assistive technologies.<br /><br />'hidden' hides the component from assistive technology (for example, a screen reader) but remains visually visible.  |
| display? | <code>"block" &#124; "inline"</code> | Changes the display of the View.<br /><br />'inline' follows the direction of words in a sentence based on the document’s writing mode. 'block' follows the direction of paragraphs based on the document’s writing mode.<br /><br />Default value: <code>'block'</code> |
| id? | <code>string</code> | A unique identifier for the View.  |<a name="Responsive"></a>

### Responsive

Responsive is a [Mapped Type](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html). It allows you to set different values at different breakpoints by providing an object where the keys are Breakpoints: <code>"base" &#124; "small" &#124; "medium" &#124; "large"</code>

For example, if a property accepts `number | Responsive`, it would accept a number or an object where the keys are Breakpoints and the values are numbers:

{% highlight js %}{% raw %}
{
  'base': 1,
  'small': 0.5,
  'large': 2
}
{% endraw %}{% endhighlight %}

