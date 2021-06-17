# Heading

Headings are used as the titles of each major section of he checkout. Unlike HTML
headings, you do not explicitly specify the position of the heading in the document
outline. Instead, use headings nested in heading groups to create a document structure
that accessibility technologies can use to speed up navigation.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| id? | <code>string</code> | Unique identifier. Typically used to make the heading a target that another component can refer to in order to provide an alternative accessibility label.  |
| level? | <code>1 &#124; 2 &#124; 3</code> | The visual level of the heading. When not provided, the heading will use its “automatic” heading level, which is determined by the level of nesting within ancestor `HeadingGroup`s. No matter what value you provide here, the semantic level (e.g., how the heading contributes to the document outline) is determined exclusively by the “automatic” heading level.  |
| role? | <code>"presentation"</code> | A custom accessibility role for this heading. Currently, only `presentation` is supported, which will strip the semantic meaning of the heading, but leave the visual styling intact.  |