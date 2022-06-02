# InlineStack

InlineStack is used to lay out a horizontal row of elements. Elements always wrap.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| accessibilityRole? | <code>NonPresentationalAccessibilityRole<<wbr>Exclude<wbr>> &#124; [NonPresentationalAccessibilityRole<<wbr>Exclude<wbr>>,NonPresentationalAccessibilityRole<<wbr>Exclude<wbr>>]</code> | Sets the semantic meaning of the component’s content. When provided, the role will be used by assistive technologies to help buyers navigate the page.  |
| accessibilityLabel? | <code>string</code> | A label that describes the purpose or contents of the element. When provided, it will be announced to buyers using assistive technologies and will provide them with more context.  |
| blockAlignment? | <code>"start" &#124; "center" &#124; "end" &#124; "baseline"</code> | Position children along the cross axis<br /><br />Default value: <code>'start'</code> |
| inlineAlignment? | <code>InlineAlignment</code> | Position children along the main axis<br /><br />Default value: <code>'start'</code> |
| spacing? | <code>"none" &#124; "extraTight" &#124; "tight" &#124; "base" &#124; "loose" &#124; "extraLoose"</code> | Adjust spacing between children<br /><br />Default value: <code>'base'</code> |