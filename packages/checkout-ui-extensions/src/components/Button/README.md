# Button

Buttons are used for actions, such as “Add”, “Continue”, “Pay now”, or “Save”.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| kind? | <code>"primary" &#124; "secondary" &#124; "plain"</code> | The type of button that will be rendered. The visual of these buttons are controlled by merchants through the Branding API. - 'primary': button used for main actions. Ex: &#34;Continue to next step&#34; - 'secondary': button used for secondary actions not blocking user progress. Ex: &#34;Download Shop app&#34; - 'plain': renders a button that visually looks like a Link Default value: <code>'primary'</code> |
| size? | <code>"extraSmall" &#124; "small" &#124; "base" &#124; "large" &#124; "extraLarge" &#124; <a href="#responsive">Responsive</a></code> | Changes the size of the button Default value: <code>'base'</code> |
| appearance? | <code>"monochrome" &#124; "critical"</code> | Specify the color treatment of the Button. By default, it will use the &#34;Primary / Secondary Action&#34; colors. - 'monochrome' will take the color of its parent. - 'critical' will take the critical color.  |
| submit? | <code>boolean</code> | Allows the button to submit a form  |
| to? | <code>string</code> | Destination to link to, renders a Link  |
| fill? | <code>boolean</code> | Whether the button should fill all available inline space.  |
| loading? | <code>boolean</code> | Replaces content with a loading indicator  |
| loadingLabel? | <code>string</code> | Accessible label for the loading indicator when user prefers reduced motion  |
| accessibilityLabel? | <code>string</code> | A label used for buyers using assistive technologies. When provided, any 'children' supplied to this component are hidden from being seen for accessibility purposes to prevent duplicate content from being read.  |
| disabled? | <code>boolean</code> | Disables the button, disallowing any interaction  |
| onPress? | <code>() => void</code> | Callback when pressed  |<a name="Responsive"></a>

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

