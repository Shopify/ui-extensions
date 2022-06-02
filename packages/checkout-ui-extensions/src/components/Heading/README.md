# Heading

Headings control the visual style of headings. Use headings to introduce major
sections, like Contact information, Shipping address, or Shipping method.

Unlike HTML headings, you don’t explicitly specify the position of the heading in the
document outline. Nest headings within the heading group component to control
the document outline structure used by assistive technologies.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| id? | <code>string</code> | Unique identifier. Typically used to make the heading a target that another component can refer to in order to provide an alternative accessibility label.  |
| level? | <code>1 &#124; 2 &#124; 3</code> | The visual level of the heading. When not provided, the heading will use its “automatic” heading level, which is determined by the level of nesting within ancestor `HeadingGroup`s. No matter what value you provide here, the semantic level (e.g., how the heading contributes to the document outline) is determined exclusively by the “automatic” heading level.  |
| accessibilityRole? | <code>Extract<<wbr>"main" &#124; "header" &#124; "footer" &#124; "section" &#124; "complementary" &#124; "navigation" &#124; "orderedList" &#124; "listItem" &#124; "unorderedList" &#124; "separator" &#124; "status" &#124; "alert" &#124; "decorative" &#124; "presentation", "presentation"<wbr>></code> | Sets the semantic meaning of the component’s content. When provided, the role will be used by assistive technologies to help buyers navigate the page.  |
| inlineAlignment? | <code>InlineAlignment</code> | Align text along the main axis.  |