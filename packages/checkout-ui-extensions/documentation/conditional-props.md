<!-- This is a partial markdown file that will be injected into generated component pages if they use the `MaybeConditionalStyle` prop type -->

### Conditional styles

Components can have conditional properties, which enable you to set different values when certain conditions are met. The conditions that Shopify currently supports are changes in the viewport sizes and in interactive states such as `hover` and `focus`.

#### Getting started

You'll need the `Style` helper to help you write conditional styles easily. If you are using vanilla JavaScript, then use the following package:

```js
import {Style} from '@shopify/checkout-ui-extensions';
```

If you're using React, then use the following package:

```jsx
import {Style} from '@shopify/checkout-ui-extensions-react';
```

#### `Style` helper class

`Style` is a helper for authoring conditional values for prop styles.

Write complex conditional styles based on one or more conditions, such as viewport sizes and interactive states, in a concise and expressive way.

| Name    | Type                                                                                                                                       | Description                                                                                                                                                                                                                                  |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| default | <code>(defaultValue: T) => <a href="#conditionalstyle">ConditionalStyle</a><<wbr>T<wbr>></code>                                            | Sets an optional `defaultValue` to use when no other condition is met.                                                                                                                                                                       |
| when    | <code>(conditions: <a href="#conditions">Conditions</a>, value: T) => <a href="#conditionalstyle">ConditionalStyle</a><<wbr>T<wbr>></code> | Adjusts the style based on different `conditions`. All `conditions`, expressed as a literal object, must be met for the associated `value` to be applied.<br /><br />The `when` method can be chained together to build more complex styles. |

#### Conditions

The following conditions are supported for conditional styles.

Multiple conditions can be set on the same `when` method.

| Name                | Type                                                       | Description                                                                                           |
| ------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| hover?              | <code>true</code>                                          | This condition is met when an element is hovered on with the cursor (mouse pointer).                  |
| focus?              | <code>true</code>                                          | This condition is met when an element is clicked, tapped on or selected using the <kbd>Tab</kbd> key. |
| viewportInlineSize? | <code>{min: "small" &#124; "medium" &#124; "large"}</code> | This condition is met when the device matches the minimum width.                                      |

#### Examples

This section provides examples of conditions.

##### Simple condition

Using simple conditional styling enables you to specify a styling change when a condition is met. In this example, the View’s padding will be `loose` on hover.

```jsx
<View padding={Style.when({hover: true}, 'loose')}>Content</View>
```

##### Default style with conditions

Default styling can be combined with specific conditions. In this example, the Grid’s children will be stacked by default and side by side on viewports above the `small` breakpoint.

```jsx
<Grid
  columns={Style.default('fill')
    .when({viewportInlineSize: {min: 'small'}}, ['30%','70%'])}
>
  <View>Content</View>
  <View>Content</View>
</Grid>
```

##### Multiple conditions

Conditions can also be combined to accomodate more complex interactions and user interfaces.

In this example, the Grid’s children will have the following characteristics:

- stacked by default
- side by side (`30%` and `70%`) on viewports above the `small` breakpoint
- side by side (`50%` and `50%`) on viewports above the `small` breakpoint when hovered

```jsx
<Grid
  columns={Style.default('fill')
    .when({viewportInlineSize: {min: 'small'}}, ['30%', '70%'])
    .when({viewportInlineSize: {min: 'small'}, hover: true}, ['50%', '50%'])}
>
  <View>Content</View>
  <View>Content</View>
</Button>
```
