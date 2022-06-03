### Conditional Styles

Components can have conditional properties, which enable you to set different values when certain conditions are met. The conditions that Shopify currently supports are changes in the viewport sizes and in interactive states such as `hover` and `focus`.

#### Getting started

You'll need the Style helper to help you write conditional styles easily. If you are using vanilla JavaScript:

```js
import {Style} from '@shopify/checkout-ui-extensions';
```

If you're using React:

```jsx
import {Style} from '@shopify/checkout-ui-extennsions-react';
```

#### Example: Simple condition

Using simple conditional styling enables you to specify a styling change when a condition is met. In this example, the button's padding will be set to `large` when it's hovered on.

```jsx
<Button size={Style.when({hover:true}, `large`>)}>Click me</Button>
```

#### Example: Combining default style with conditions

Specifying default styling is also possible while also defining a change in style in specific conditions. In this example, the `Button` component's size is set to `base` by default. However, you should set this to `large` when the button's hovered on.

```jsx
<Button size={Style.default(`base`).when({hover: true}, `large`)}>
  Click me
</Button>
```

#### Example: Multiple condition

You can also provide multiple conditions to accomodate more complex interactions and requirements.

```jsx
<Button
  size={Style.default(`base`)
    .when({focus: true}, `large`)
    .when({hover: true}, `large`)
    .when({inlineViewportSize: `small`}, `extraLarge`)
    .when({inlineViewportSize: `small`, focus: true}, `base`)}
>
  Click me
</Button>
```

In this example, the following conditions are set:

- Set the default size of the button to `base`
- If button is focused, then set the size to `large`
- If button is hovered on, then set the size to `large`
- If viewport's width is `small`, then set the button's size to `extraLarge`
- If viewport's width is `small`, and the focus is `true`, then set the size to `base`

### `Style` Helper class

`Style` is a helper for authoring conditional values for prop styles.

Write complex conditional styles based on one or more conditions (viewport sizes and interactive states) in a concise and expressive way.

| Name    | Type                                                                                                                                       | Description                                                                                                                                                                                                                                  |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| default | <code>(defaultValue: T) => <a href="#conditionalstyle">ConditionalStyle</a><<wbr>T<wbr>></code>                                            | Sets an optional `defaultValue` to use when no other condition is met.                                                                                                                                                                       |
| when    | <code>(conditions: <a href="#conditions">Conditions</a>, value: T) => <a href="#conditionalstyle">ConditionalStyle</a><<wbr>T<wbr>></code> | Adjusts the style based on different `conditions`. All `conditions`, expressed as a literal object, must be met for the associated `value` to be applied.<br /><br />The `when` method can be chained together to build more complex styles. |

### Conditions

The following conditions are supported for conditional styles.

Multiple conditions can be set on the same `when` method.

| Name                | Type                                                       | Description                                                                         |
| ------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| hover?              | <code>true</code>                                          | Met when an element is hovered on with the cursor (mouse pointer).                  |
| focus?              | <code>true</code>                                          | Met when an element is clicked, tapped on or selected using the <kbd>Tab</kbd> key. |
| viewportInlineSize? | <code>{min: "small" &#124; "medium" &#124; "large"}</code> | Met when the device matches the minimum width.                                      |
