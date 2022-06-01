# SkeletonImage

SkeletonImage is used to provide a low fidelity representation of an image before it appears on the page.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| dimensions? | <code><a href="#dimensions">Dimensions</a> &#124; <a href="#responsive">Responsive</a></code> | Adjust the size of the skeleton.  |
| aspectRatio? | <code>number</code> | Displays the skeleton at the specified aspect ratio (fills the width of the parent container and sets the height accordingly).  |<a name="Responsive"></a>

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

<a name="Dimensions"></a>

### Dimensions

| Name | Type | Description |
| --- | --- | --- |
| inline | <code>number</code> | Inline size of the skeleton in pixels.  |
| block | <code>number</code> | Block size of the skeleton in pixels.  |