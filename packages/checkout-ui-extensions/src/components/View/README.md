# View

View is a generic container component. Its contents will always be their
“natural” size, so this component can be useful in layout components (like `Grid`,
`BlockStack`, `InlineStack`) that would otherwise stretch their children to fit.

Note: View’s box model related properties like `padding`, `border`, `borderRadius`, and `borderColor` are implemented as
[CSS Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts).

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| maxInlineSize? | <code>number &#124; <a href="#responsive">Responsive</a></code> | Adjust the maximum inline size.<br /><br />Numbers less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.<br /><br /> Examples:<br /><br />- `500` represents `500px`<br /><br />- `0.5` represents `50%`<br /><br />- `1` represents `100%`  |
| minInlineSize? | <code>number &#124; <a href="#responsive">Responsive</a></code> | Adjust the minimum inline size.<br /><br />Numbers less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.<br /><br /> Examples:<br /><br />- `500` represents `500px`<br /><br />- `0.5` represents `50%`<br /><br />- `1` represents `100%`  |
| padding? | <code>CSSValue &#124; MultiPick &#124; MultiPick &#124; <a href="#responsive">Responsive</a></code> | Adjust the padding.<br /><br />To shorten the code, it is possible to specify all the padding properties in one property.<br /><br /> Examples:<br /><br />- `base` means blockStart, inlineEnd, blockEnd and inlineStart paddings are `base`<br /><br />- [`base`, `none`] means blockStart and blockEnd paddings are `base`, inlineStart and inlineEnd paddings are `none`<br /><br />- [`base`, `none`, `loose`, `tight`] means blockStart padding is `base`, inlineEnd padding is `none`, blockEnd padding is `loose` and  blockStart padding is `tight`  |
| background? | <code>"transparent" &#124; "color1" &#124; "color2" &#124; "color3" &#124; <a href="#responsive">Responsive</a></code> | Adjust the background.  |
| backgroundImage? | <code>string &#124; <a href="#responsive">Responsive</a></code> | Sets one or multiple responsive background images.  |
| backgroundFit? | <code>"cover" &#124; "contain"</code> | Indicates if the background image should scale its container without cropping and stretching, or scale as large as possible to fill the container and stretching if necessary.  |
| backgroundPosition? | <code>"top" &#124; "bottom" &#124; "left" &#124; "right" &#124; "center"</code> | Sets the initial position of the background image.<br /><br />Default value: <code>'center'</code> |
| backgroundRepeat? | <code>boolean</code> | Sets how background image are repeated.<br /><br />Default value: <code>false</code> |
| visibility? | <code>"hidden"</code> | Changes the visibility of the element.<br /><br />`hidden` visually hides the component while keeping it accessible to assistive technology (for example, a screen reader). Hidden elements do not take any visual space contrary to CSS visibility: hidden;  |
| accessibilityVisibility? | <code>"hidden"</code> | Changes the visibility of the element to assistive technologies.<br /><br />`hidden` hides the component from assistive technology (for example, a screen reader) but remains visually visible.  |
| display? | <code>"block" &#124; "inline"</code> | Changes the display of the View.<br /><br /> `inline` follows the direction of words in a sentence based on the document’s writing mode.<br /><br />`block` follows the direction of paragraphs based on the document’s writing mode.<br /><br /> Default value: <code>'block'</code> |
| id? | <code>string</code> | A unique identifier for the View.  |
| blockSize? | <code>number &#124; <a href="#responsive">Responsive</a></code> | Adjust the block size.<br /><br />Numbers less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.<br /><br /> Examples: - `500` represents `500px`<br /><br />- `0.5` represents `50%`<br /><br />- `1` represents `100%`  |
| opacity? | <code>10 &#124; 20 &#124; 30 &#124; 40 &#124; 50 &#124; 60 &#124; 70 &#124; 80 &#124; 90</code> | Sets the opacity of the View. The opacity will be applied to the background as well as all the childrens of the View. Use carefully as this could decrease the contrast ratio between the background and foreground elements resulting in unreadable and inaccessible text.  |
| accessibilityLabel? | <code>string</code> | A label that describes the purpose or contents of the element. When provided, it will be announced to buyers using assistive technologies and will provide them with more context.  |
| accessibilityRole? | <code>"main" &#124; "header" &#124; "footer" &#124; "section" &#124; "complementary" &#124; "navigation" &#124; "orderedList" &#124; "listItem" &#124; "unorderedList" &#124; "separator" &#124; "status" &#124; "alert" &#124; MultiPick</code> | Set the semantic of the component’s content  |
| position? | <code>Position<<wbr><a href="#"></a><wbr>> &#124; <a href="#responsive">Responsive</a></code> | Changes how the View is positioned.  |
| translate? | <code><a href="#translate">Translate</a><<wbr><wbr>> &#124; <a href="#responsive">Responsive</a></code> | Specifies a two-dimensional translation of the View.  |
| blockAlignment? | <code>"center" &#124; "leading" &#124; "trailing" &#124; "baseline"</code> | Position children along the cross axis  |
| inlineAlignment? | <code>"center" &#124; "leading" &#124; "trailing"</code> | Position children along the main axis  |<a name="Translate"></a>

### Translate

| Name | Type | Description |
| --- | --- | --- |
| block? | <code>number &#124; Unit</code> | Adjust the translation on the cross axis.<br /><br />A percentage value refers to the block size of the View.  |
| inline? | <code>number &#124; Unit</code> | Adjust the translation on the main axis.<br /><br />A percentage value refers to the inline size of the View.  |<a name=""></a>

### 

| Name | Type | Description |
| --- | --- | --- |<a name="Responsive"></a>

### Responsive

Responsive is a [Mapped Type](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html). It allows you to set different values at different breakpoints by providing an object where the keys are Breakpoints: <code>"base" &#124; "small" &#124; "medium" &#124; "large"</code>

For example, if a property accepts `number | Responsive`, it would accept a number or an object where the keys are Breakpoints and the values are numbers:

```js
{
  'base': 1,
  'small': 0.5,
  'large': 2
}
```

