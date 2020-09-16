# Button

Buttons are used primarily for actions, such as “Add”, “Close”, “Cancel”, or “Save”.

## Examples

#### Vanilla

```js
import {extend, ExtensionPoint, Button} from '@shopify/argo-admin';

extend(ExtensionPoint.MyExtension, (root) => {
  const button = root.createComponent(Button, {
    title: 'Click Me',
    primary: true,
    onPress: () => console.log('Clicked'),
    disabled: false,
  });

  root.appendChild(button);
  root.mount();
});
```

#### React

```jsx
import {extend, render, ExtensionPoint, Button} from '@shopify/argo-admin-react';

function App() {
  return (
    <Button title="Click Me" primary onPress={() => console.log('Clicked')} disabled={false} />
  );
}

extend(
  ExtensionPoint.MyExtension,
  render(() => <App />),
);
```

## Props API

| Name     | Type         | Description                                                                                              | Required |
| -------- | ------------ | -------------------------------------------------------------------------------------------------------- | -------- |
| title    | `string`     | Button label text.                                                                                       | ☑️       |
| primary  | `boolean`    | Provides extra visual weight and identifies the primary action in a set of buttons. Defaults to `false`. |          |
| icon     | `IconProps`  | See [Icon](./Icon.md).                                                                                   |          |
| onPress  | `() => void` | Callback when clicked                                                                                    |          |
| disabled | `boolean`    | Disables the button, disallowing interaction.                                                            |          |
