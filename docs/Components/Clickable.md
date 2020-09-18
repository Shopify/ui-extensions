# Clickable

Clickable allows you to add an onClick callback function to any component.

## Examples

#### Vanilla

```js
import {extend, ExtensionPoint, Clickable, Text} from '@shopify/argo-admin';

extend(ExtensionPoint.MyExtension, (root) => {
  const clickable = root.createComponent(Clickable, {
    onClick: () => console.log('I’ve been clicked!'),
  });

  const clickableText = root.createComponent(Text, {
    children: 'I can be clicked',
  });

  clickable.appendChild(clickableText);
  root.appendChild(clickable);

  root.mount();
});
```

#### React

```jsx
import {extend, render, ExtensionPoint, Clickable} from '@shopify/argo-admin-react';

function App() {
  return <Clickable onClick={() => console.log('I’ve been clicked!')}>I can be clicked</Clickable>;
}

extend(
  ExtensionPoint.MyExtension,
  render(() => <App />),
);
```

## Props API

| Name    | Type         | Description                 | Required |
| ------- | ------------ | --------------------------- | -------- |
| onClick | `() => void` | Callback for the clickable. | ☑️       |
