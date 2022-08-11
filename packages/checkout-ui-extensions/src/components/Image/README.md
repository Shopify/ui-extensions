# Image

Image is used for large format, responsive images.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | The image path.  |
| accessibilityDescription? | <code>string</code> | An alternative text description that describe the image for the reader to understand what it is about. It is extremely useful for both buyers using assistive technology and sighted buyers. A well written `description` provides people with visual impairments the ability to participate in consuming non-text content. When a screen readers encounters an `Image`, the description is read and announced aloud. If an image fails to load, potentially due to a poor connection, the `description` is displayed on screen instead. This has the benefit of letting a sighted buyer know an image was meant to load here, but as an alternative, they’re still able to consume the text content. Read [considerations when writing alternative text](https://ux.shopify.com/considerations-when-writing-alt-text-a9c1985a8204) to learn more.<br /><br />Default value: <code>''</code> |
| loading? | <code>"eager" &#124; "lazy"</code> | Indicates how the browser should load the image, either eager or lazy.<br /><br />Uses native browser behavior and is not supported by all browsers. If no value is provided then the image is loaded immediately, regardless of whether or not the image is currently within the visible viewport.<br /><br /> <code>"eager"</code>: Image is loaded immediately, regardless of whether or not the image is currently within the visible viewport.<br /><br /><code>"lazy"</code>: Image is loaded when it’s within the visible viewport. |
| aspectRatio? | <code>number</code> | Displays the image at the specified aspect ratio (fills the width of the parent container and sets the height accordingly) and creates an invisible placeholder to prevent content jumping when the image loads. Use along with `fit` if the specified aspect ratio does not match the intrinsic aspect ratio to prevent the image from stretching.  |
| fit? | <code><a href="#fit">Fit</a> &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr><a href="#fit">Fit</a>, AcceptedConditions<wbr>></code> | Indicates how the image fits in its frame. Use if the image is not displayed at its intrinsic size to maintain the aspect ratio.  |
| accessibilityRole? | <code>"decorative"</code> | Sets the semantic meaning of the component’s content. When set, the role will be used by assistive technologies to help buyers navigate the page.  |
| border? | <code><a href="#maybeshorthandproperty">MaybeShorthandProperty</a> &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr><a href="#maybeshorthandproperty">MaybeShorthandProperty</a>, AcceptedConditions<wbr>></code> | Adjust the border style.<br /><br />To shorten the code, it is possible to specify all the border style properties in one property.<br /><br />For example:<br /><br />- `base` means blockStart, inlineEnd, blockEnd and inlineStart border styles are `base`<br /><br />- `['base', 'none']` means blockStart and blockEnd border styles are `base`, inlineStart and inlineEnd border styles are `none`<br /><br />- `['base', 'none', 'dotted', 'base']` means blockStart border style is `base`, inlineEnd border style is `none`, blockEnd border style is `dotted` and  blockStart border style is `base`  |
| borderWidth? | <code><a href="#maybeshorthandproperty">MaybeShorthandProperty</a> &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr><a href="#maybeshorthandproperty">MaybeShorthandProperty</a>, AcceptedConditions<wbr>></code> | Adjust the border width.<br /><br />To shorten the code, it is possible to specify all the border width properties in one property.<br /><br />For example:<br /><br />- `base` means blockStart, inlineEnd, blockEnd and inlineStart border widths are `base`<br /><br />- `['base', 'medium']` means blockStart and blockEnd border widths are `base`, inlineStart and inlineEnd border widths are `medium`<br /><br />- `['base', 'medium', 'medium', 'base']` means blockStart border width is `base`, inlineEnd border width is `medium`, blockEnd border width is `medium` and  blockStart border width is `base`  |
| borderRadius? | <code><a href="#maybeshorthandproperty">MaybeShorthandProperty</a> &#124; <a href="#conditionalstyle">ConditionalStyle</a><<wbr><a href="#maybeshorthandproperty">MaybeShorthandProperty</a>, AcceptedConditions<wbr>></code> | Adjust the border radius.<br /><br />To shorten the code, it is possible to specify all the border width properties in one property.<br /><br />For example:<br /><br />- `base` means blockStart, inlineEnd, blockEnd and inlineStart border radii are `base`<br /><br />- `['base', 'none']` means blockStart and blockEnd border radii are `base`, inlineStart and inlineEnd border radii are `none`<br /><br />- `['base', 'none', 'tight', 'base']` means blockStart border radius is `base`, inlineEnd border radius is `none`, blockEnd border radius is `tight` and  blockStart border radius is `base`  |
<a name="MaybeShorthandProperty"></a>

### MaybeShorthandProperty

<code>Property &#124; <a href="#shorthandproperty">ShorthandProperty</a></code>
<a name="ShorthandProperty"></a>

### ShorthandProperty

<code>[Property, Property] &#124; [Property, Property, Property, Property]</code><a name="ConditionalStyle"></a>

### ConditionalStyle

| Name | Type | Description |
| --- | --- | --- |
| default? | <code>T</code> | The default value applied when none of the conditional values specified in `conditionals` are met.  |
| conditionals | <code><a href="#conditionalvalue">ConditionalValue</a><<wbr>T, AcceptedConditions<wbr>>[]</code> | An array of conditional values.  |<a name="ConditionalValue"></a>

### ConditionalValue

| Name | Type | Description |
| --- | --- | --- |
| conditions | <code>AcceptedConditions</code> | The conditions that must be met for the value to be applied. At least one condition must be specified.  |
| value | <code>T</code> | The value that will be applied if the conditions are met.  |
<a name="Fit"></a>

### Fit

| Value | Description |
| --- | --- |
| <code>"cover"</code> | Image maintains its aspect ratio while fitting within the frame. |
| <code>"contain"</code> | Image maintains its aspect ratio while filling the frame. If the image is larger than the frame, it will be cropped. |