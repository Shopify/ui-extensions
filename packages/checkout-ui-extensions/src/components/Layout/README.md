# Layout

Layout is used to create macro layouts that responds to different media sizes.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| inlineAlignment? | <code>"leading" &#124; "center" &#124; "trailing"</code> | Specifies the inline alignment of the layout in its container.<br /><br />Default value: <code>'center'</code> |
| blockAlignment? | <code>"leading" &#124; "center" &#124; "trailing"</code> | Specifies the block alignment of the layout in its container.<br /><br />Default value: <code>'leading'</code> |
| maxInlineSize? | <code>number &#124; <a href="#responsive">Responsive</a></code> | Default maximum inline size of the layout within its viewport. The size specified will constrain the space available for its sections and will be centered in the viewport unless specified otherwise with `inlineAlignment`.<br /><br />Numbers less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.<br /><br /> Examples:<br /><br />- `500` represents `500px`<br /><br />- `0.5` represents `50%`<br /><br />- `1` represents `100%`  |
| sizes? | <code>"extraSmall" &#124; "small" &#124; "base" &#124; "large" &#124; "extraLarge"[] &#124; <a href="#responsive">Responsive</a></code> | Default sizes for each section of the layout.  |
| spacing? | <code>"none" &#124; "extraTight" &#124; "tight" &#124; "base" &#124; "loose" &#124; "extraLoose" &#124; <a href="#responsive">Responsive</a></code> | Default spacing between sections  |<a name="Responsive"></a>

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

