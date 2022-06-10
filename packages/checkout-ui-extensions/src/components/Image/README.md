# Image

Image is used for large format, responsive images.

For small images use Thumbnail.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | The default image path. This is used for single images, as a fallback if no sources match, or if a browser does not support picture element sources.  |
| sources? | <code><a href="#responsive">Responsive</a></code> | An object where the keys are the device widths and the values are arrays of image sources to offer alternative versions of an image for different device widths and pixel densities.  |
| accessibilityDescription? | <code>string</code> | An alternative text description that describe the image for the reader to understand what it is about. It is extremely useful for both buyers using assistive technology and sighted buyers. A well written `description` provides people with visual impairments the ability to participate in consuming non-text content. When a screen readers encounters an `Image`, the description is read and announced aloud. If an image fails to load, potentially due to a poor connection, the `description` is displayed on screen instead. This has the benefit of letting a sighted buyer know an image was meant to load here, but as an alternative, they’re still able to consume the text content. Read [considerations when writing alternative text](https://ux.shopify.com/considerations-when-writing-alt-text-a9c1985a8204) to learn more.<br /><br />Default value: <code>''</code> |
| loading? | <code>"eager" &#124; "lazy"</code> | Indicates how the browser should load the image, either lazy or eager.<br /><br />Uses native browser behavior and is not supported by all browsers. If no value is provided the image is loaded immediately, regardless of whether or not the image is currently within the visible viewport.  |
| aspectRatio? | <code>number</code> | Displays the image at the specified aspect ratio (fills the width of the parent container and sets the height accordingly) and creates an invisible placeholder to prevent content jumping when the image loads. Use along with `fit` if the specified aspect ratio does not match the intrinsic aspect ratio to prevent the image from stretching.  |
| fit? | <code>"cover" &#124; "contain"</code> | Indicates how the image fits in its frame. Use if the image is not displayed at its intrinsic size to maintain the aspect ratio.  |
| accessibilityRole? | <code>Extract<<wbr>"main" &#124; "header" &#124; "footer" &#124; "section" &#124; "complementary" &#124; "navigation" &#124; "orderedList" &#124; "listItem" &#124; "unorderedList" &#124; "separator" &#124; "status" &#124; "alert" &#124; "decorative" &#124; "presentation", "decorative"<wbr>></code> | Sets the semantic meaning of the component’s content.  When provided, the role will be used by assistive technologies to help buyers navigate the page.  |
| border? | <code>CSSValue &#124; [CSSValue, CSSValue] &#124; [CSSValue, CSSValue, CSSValue, CSSValue] &#124; <a href="#responsive">Responsive</a></code> | Adjust the border style.<br /><br />To shorten the code, it is possible to specify all the border style properties in one property.<br /><br />Examples: - `base` means blockStart, inlineEnd, blockEnd and inlineStart border styles are `base` - [`base`, `none`] means blockStart and blockEnd border styles are `base`, inlineStart and inlineEnd border styles are `none` - [`base`, `none`, `dotted`, `base`] means blockStart border style is `base`, inlineEnd border style is `none`, blockEnd border style is `dotted` and  blockStart border style is `base`  |
| borderWidth? | <code>CSSValue &#124; [CSSValue, CSSValue] &#124; [CSSValue, CSSValue, CSSValue, CSSValue] &#124; <a href="#responsive">Responsive</a></code> | Adjust the border width.<br /><br />To shorten the code, it is possible to specify all the border width properties in one property.<br /><br />Examples: - `base` means blockStart, inlineEnd, blockEnd and inlineStart border widths are `base` - [`base`, `thick`] means blockStart and blockEnd border widths are `base`, inlineStart and inlineEnd border widths are `thick` - [`base`, `thick`, `thick`, `base`] means blockStart border width is `base`, inlineEnd border width is `thick`, blockEnd border width is `thick` and  blockStart border width is `base`  |
| borderColor? | <code>"base" &#124; "emphasized" &#124; <a href="#responsive">Responsive</a></code> | Adjust the border color.  |
| borderRadius? | <code>CSSValue &#124; [CSSValue, CSSValue] &#124; [CSSValue, CSSValue, CSSValue, CSSValue] &#124; <a href="#responsive">Responsive</a></code> | Adjust the border radius.<br /><br />To shorten the code, it is possible to specify all the border width properties in one property.<br /><br />Examples: - `base` means blockStart, inlineEnd, blockEnd and inlineStart border radii are `base` - [`base`, `none`] means blockStart and blockEnd border radii are `base`, inlineStart and inlineEnd border radii are `none` - [`base`, `none`, `tight`, `base`] means blockStart border radius is `base`, inlineEnd border radius is `none`, blockEnd border radius is `tight` and  blockStart border radius is `base`  |<a name="Responsive"></a>

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

<a name="Source"></a>

### Source

| Name | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | The path to the image  |
| resolution? | <code>1 &#124; 1.3 &#124; 1.5 &#124; 2 &#124; 2.6 &#124; 3 &#124; 3.5 &#124; 4</code> | Specify that the image should be used for devices with a matching pixel density  |