# Layout

Layout is used to create macro layouts that responds to different media sizes.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| inlineAlignment? | <code>"leading" &#124; "trailing"</code> | Specifies the inline alignment of the layout in its container. By default, it will be centered.  |
| blockAlignment? | <code>"center" &#124; "trailing"</code> | Specifies the block alignment of the layout in its container. By default, it will be leading.  |
| maxInlineSize? | <code>number</code> | Default maximum inline size of the layout within its viewport. The size specified will constrain the space available for its sections and will be centered in the viewport unless specified otherwise with `inlineAlignment`.<br /><br />Numbers less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.<br /><br />Examples: - `500` represents `500px` - `0.5` represents `50%` - `1` represents `100%`  |
| sizes? | <code>"auto" &#124; "fill" &#124; number[]</code> | Default sizes for each section of the layout  |
| media? | <code><a href="#media">Media</a>[]</code> | Sizes at different media  |<a name="Media"></a>

### Media

| Name | Type | Description |
| --- | --- | --- |
| viewportSize | <code>"small" &#124; "medium" &#124; "large"</code> |  |
| maxInlineSize? | <code>number</code> | Maximum inline size of the layout for this viewport. The size specified will constrain the space available for its sections and will be centered in the viewport unless specified otherwise with `inlineAlignment`.<br /><br />Numbers less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.<br /><br />Examples: - `500` represents `500px` - `0.5` represents `50%` - `1` represents `100%`  |
| sizes? | <code>"auto" &#124; "fill" &#124; number[]</code> | Sizes for each section of the layout for this media. If a `maxInlineSize` is specified, make sure you adapt your pixel values accordingly.  |