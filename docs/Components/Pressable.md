# Pressable

Pressable allows wrapping one or more components to add interactivity.

## Behavior

- 📱 All children of Pressables are placed in a single view object, which makes recycling the views expensive. Consider keeping your Pressable simple.
- 📱 Do not nest Layouts within Pressable. This will result in unintended behavior
- Do not nest other Action components (Button, Link) within Pressable. This will result in unexpected behavior.
  - 📱 A child of Pressable with `onPress` will take precedence and not call Pressable's `onPress`
  - 🖥 Both the child of Pressable with `onPress` and Pressable's `onPress` will activate if the child is pressed.

| ✅ Do                                                                                 | 🛑 Don't               |
| ------------------------------------------------------------------------------------- | ---------------------- |
| 📱 Keep Pressable shallow. Complex hierarchies have performance penalties             | Wrap Button or Link    |
| Wrap small UI elements in Pressable to perform actions that don’t fit Button or Link. | Wrap Layout components |

## Examples

#### Vanilla JavaScript example

```js
import {extend, ExtensionPoint, Pressable, Text} from '@shopify/argo-admin';

extend('Playground', (root) => {
  const pressable = root.createComponent(Pressable, {
    onPress: () => console.log('I’ve been pressed!'),
  });

  const pressableText = root.createComponent(Text);
  pressableText.appendChild('I can be pressed');

  pressable.appendChild(pressableText);
  root.appendChild(pressable);

  root.mount();
});
```

#### React example

```jsx
import {extend, render, ExtensionPoint, Pressable} from '@shopify/argo-admin-react';

function App() {
  return <Pressable onPress={() => console.log('I’ve been pressed!')}>I can be pressed</Pressable>;
}

extend(
  'Playground',
  render(() => <App />),
);
```

## Props API

| Name    | Type         | Description                 | Required |
| ------- | ------------ | --------------------------- | -------- |
| onPress | `() => void` | Callback for the pressable. | ☑️       |
