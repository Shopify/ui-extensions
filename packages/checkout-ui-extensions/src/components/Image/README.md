# Image

Image is used for large format, responsive images. For small images use Thumbnail.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | The default image path. This is used for single images, as a fallback if no sources match, or if a browser does not support picture element sources.  |
| sources? | <code><a href="#source">Source</a>[]</code> | An array of image sources to offer alternative versions of an image for different device widths and pixel densities  |
| description? | <code>string</code> | An alternative text description that describe the image for the reader to understand what it is about. It is extremely useful for both buyers using assistive technology and sighted buyers. A well written `description` provides people with visual impairments the ability to participate in consuming non-text content. When a screen readers encounters an `Image`, the description is read and announced aloud. If an image fails to load, potentially due to a poor connection, the `description` is displayed on screen instead. This has the benefit of letting a sighted buyer know an image was meant to load here, but as an alternative, they’re still able to consume the text content. Read [considerations when writing alt text](https://ux.shopify.com/considerations-when-writing-alt-text-a9c1985a8204) to learn more.<br /><br />Default value: <code>''</code> |
| loading? | <code>"eager" &#124; "lazy"</code> | Indicates how the browser should load the image, either lazy or eager. Uses native browser behavior and is not supported by all browsers. If no value is provided the image is loaded immediately, regardless of whether or not the image is currently within the visible viewport.  |
| bordered? | <code>boolean</code> | Adds a border to the image  |
| aspectRatio? | <code>number</code> | Displays the image at the specified aspect ratio (fills the width of the parent container and sets the height accordingly) and creates an invisible placeholder to prevent content jumping when the image loads. Use along with `fit` if the specified aspect ratio does not match the intrinsic aspect ratio to prevent the image from stretching.  |
| fit? | <code>"cover" &#124; "contain"</code> | Indicates how the image fits in its frame. Use if the image is not displayed at its intrinsic size to maintain the aspect ratio.  |
| decorative? | <code>boolean</code> | Indicates the image is decorative and should be hidden from assistive technologies  |<a name="Source"></a>

### Source

| Name | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | The path to the image  |
| viewportSize? | <code>"small" &#124; "medium" &#124; "large"</code> | Specify if the image should be loaded for small, medium, or large viewport sizes  |
| resolution? | <code>1 &#124; 1.3 &#124; 1.5 &#124; 2 &#124; 2.6 &#124; 3 &#124; 3.5 &#124; 4</code> | Specify that the image should be used for devices with a matching pixel density  |