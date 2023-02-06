# Image

Image is used for large format, responsive images.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| source | <code>Required<<wbr>string &#124; ConditionalStyle<<wbr>string, AcceptedConditions<wbr>><wbr>></code> | The URL or path to the image. Supports the `resolution` and `viewportInlineSize` conditional styles only. |
| accessibilityDescription? | <code>string</code> | An alternative text description that describe the image for the reader to understand what it is about. It is extremely useful for both buyers using assistive technology and sighted buyers. A well written `description` provides people with visual impairments the ability to participate in consuming non-text content. When a screen readers encounters an `Image`, the description is read and announced aloud. If an image fails to load, potentially due to a poor connection, the `description` is displayed on screen instead. This has the benefit of letting a sighted buyer know an image was meant to load here, but as an alternative, they’re still able to consume the text content. Read [considerations when writing alternative text](https://ux.shopify.com/considerations-when-writing-alt-text-a9c1985a8204) to learn more.<br /><br />Default value: <code>''</code> |
| loading? | <code>"eager" &#124; "lazy"</code> | Indicates how the browser should load the image, either eager or lazy.<br /><br />Uses native browser behavior and is not supported by all browsers. If no value is provided then the image is loaded immediately, regardless of whether or not the image is currently within the visible viewport.<br /><br /><code>"eager"</code>: Image is loaded immediately, regardless of whether or not the image is currently within the visible viewport.<br /><br /><code>"lazy"</code>: Image is loaded when it’s within the visible viewport. |
| aspectRatio? | <code>number</code> | Displays the image at the specified aspect ratio (fills the width of the parent container and sets the height accordingly) and creates an invisible placeholder to prevent content jumping when the image loads. Use along with `fit` if the specified aspect ratio does not match the intrinsic aspect ratio to prevent the image from stretching. |
| fit? | <code><a href="#fit">Fit</a> &#124; ConditionalStyle<<wbr><a href="#fit">Fit</a>, AcceptedConditions<wbr>></code> | Indicates how the image fits in its frame. Use if the image is not displayed at its intrinsic size to maintain the aspect ratio. |
| accessibilityRole? | <code>"decorative"</code> | Sets the semantic meaning of the component’s content. When set, the role will be used by assistive technologies to help buyers navigate the page.<br /><br /><code>"decorative"</code>: Used to indicate that an image is decorative and should be hidden from assistive technologies. |
| border? | <code><a href="#maybeshorthandproperty">MaybeShorthandProperty</a><<wbr><a href="#borderstyle">BorderStyle</a><wbr>> &#124; ConditionalStyle<<wbr><a href="#maybeshorthandproperty">MaybeShorthandProperty</a><<wbr><a href="#borderstyle">BorderStyle</a><wbr>>, AcceptedConditions<wbr>></code> | Adjust the border style.<br /><br />To shorten the code, it is possible to specify all the border style properties in one property.<br /><br />For example:<br /><br />- `base` means blockStart, inlineEnd, blockEnd and inlineStart border styles are `base`<br /><br />- `['base', 'none']` means blockStart and blockEnd border styles are `base`, inlineStart and inlineEnd border styles are `none`<br /><br />- `['base', 'none', 'dotted', 'base']` means blockStart border style is `base`, inlineEnd border style is `none`, blockEnd border style is `dotted` and  blockStart border style is `base` |
| borderWidth? | <code><a href="#maybeshorthandproperty">MaybeShorthandProperty</a><<wbr><a href="#borderwidth">BorderWidth</a><wbr>> &#124; ConditionalStyle<<wbr><a href="#maybeshorthandproperty">MaybeShorthandProperty</a><<wbr><a href="#borderwidth">BorderWidth</a><wbr>>, AcceptedConditions<wbr>></code> | Adjust the border width.<br /><br />To shorten the code, it is possible to specify all the border width properties in one property.<br /><br />For example:<br /><br />- `base` means blockStart, inlineEnd, blockEnd and inlineStart border widths are `base`<br /><br />- `['base', 'medium']` means blockStart and blockEnd border widths are `base`, inlineStart and inlineEnd border widths are `medium`<br /><br />- `['base', 'medium', 'medium', 'base']` means blockStart border width is `base`, inlineEnd border width is `medium`, blockEnd border width is `medium` and  blockStart border width is `base` |
| cornerRadius? | <code><a href="#maybeshorthandproperty">MaybeShorthandProperty</a><<wbr><a href="#cornerradius">CornerRadius</a><wbr>> &#124; ConditionalStyle<<wbr><a href="#maybeshorthandproperty">MaybeShorthandProperty</a><<wbr><a href="#cornerradius">CornerRadius</a><wbr>>, AcceptedConditions<wbr>></code> | Adjust the corner radius.<br /><br />Provide a single value to apply the same corner radius to all four corners, two values to apply different corner radii to opposing corners, or four values to apply different corner radii to each individual corner.<br /><br />For example:<br /><br />- `base` means all 4 corner radii are `base`<br /><br />- `['base', 'none']` means the StartStart and EndEnd corner radii are `base`, StartEnd and EndStart corner radii are `none`.    When the context’s language direction is left to right, StartStart and EndEnd corners are the top left and bottom right corners    while StartEnd and EndStart corners are the top right and bottom left corners.<br /><br />- `['base', 'none', 'small', 'base']` means StartStart corner radius is `base`, StartEnd corner radius is `none`, EndEnd corner radius is `small` and  EndStart corner radius is `base`<br /><br />A `borderRadius` alias is available for this property. When both are specified, `cornerRadius` takes precedence. |
<a name="CornerRadius"></a>

### CornerRadius

<code>"base" &#124; "small" &#124; "large" &#124; "fullyRounded" &#124; "none" &#124; <a href="#cornerradiusdeprecated">CornerRadiusDeprecated</a></code>
<a name="CornerRadiusDeprecated"></a>

### CornerRadiusDeprecated

<code>"tight" &#124; "loose"</code>
<a name="BorderWidth"></a>

### BorderWidth

<code>"base" &#124; "medium"</code>
<a name="MaybeShorthandProperty"></a>

### MaybeShorthandProperty

<code>T &#124; <a href="#shorthandproperty">ShorthandProperty</a><<wbr>T<wbr>></code>
<a name="ShorthandProperty"></a>

### ShorthandProperty

<code>[T, T] &#124; [T, T, T, T]</code>
<a name="BorderStyle"></a>

### BorderStyle

<code>"base" &#124; "dotted" &#124; "none"</code>
<a name="Fit"></a>

### Fit

| Value | Description |
| --- | --- |
| <code>"cover"</code> | Image maintains its aspect ratio while fitting within the frame. |
| <code>"contain"</code> | Image maintains its aspect ratio while filling the frame. If the image is larger than the frame, then it will be cropped. |
