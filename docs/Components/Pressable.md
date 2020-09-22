# Pressable

Pressable allows you to add an onPress callback function to any component.

## Examples

#### Vanilla

```js
import {extend, ExtensionPoint, Pressable, Text} from '@shopify/argo-admin';

extend('Admin::Product::SubscriptionPlan::Add', (root) => {
  const pressable = root.createComponent(Pressable, {
    onPress: () => console.log('I’ve been pressed!'),
  });

  const pressableText = root.createComponent(Text, {
    children: 'I can be pressed',
  });

  pressable.appendChild(pressableText);
  root.appendChild(pressable);

  root.mount();
});
```

#### React

```jsx
import {extend, render, ExtensionPoint, Pressable} from '@shopify/argo-admin-react';

function App() {
  return <Pressable onPress={() => console.log('I’ve been pressed!')}>I can be pressed</Pressable>;
}

extend(
  'Admin::Product::SubscriptionPlan::Add',
  render(() => <App />),
);
```

## Props API

| Name    | Type         | Description                 | Required |
| ------- | ------------ | --------------------------- | -------- |
| onPress | `() => void` | Callback for the pressable. | ☑️       |
