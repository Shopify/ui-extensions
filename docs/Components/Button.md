# Button

Buttons are used primarily for actions, such as “Add”, “Close”, “Cancel”, or “Save”.

## Behavior

- 📱 Buttons will wrap their content if placed inside a `Stack` component, otherwise they will expand to the width of the container
- 🖥 Buttons wrap their content, regardless of the container they are placed in

| ✅ Do                                              | 🛑 Don't                                     |
| -------------------------------------------------- | -------------------------------------------- |
| 📱 Align buttons vertically                        | 📱Buttons should not be stacked horizontally |
| Use short, succinct titles that describe an action |                                              |
| Use an icon to supplement the title of the button  |                                              |
| Use only a single primary Button per section       |                                              |
| Primary buttons should be before secondary buttons |                                              |  |

For more guidelines, refer to Polaris' [Button best practices](https://polaris.shopify.com/components/actions/button#section-best-practices).

## Examples

#### Vanilla JavaScript example

```js
import {extend, ExtensionPoint, Button} from '@shopify/argo-admin';

extend('Playground', (root) => {
  const button = root.createComponent(Button, {
    title: 'Press Me',
    primary: true,
    onPress: () => console.log('Pressed'),
    disabled: false,
  });

  root.appendChild(button);
  root.mount();
});
```

#### React example

```jsx
import {extend, render, ExtensionPoint, Button} from '@shopify/argo-admin-react';

function App() {
  return (
    <Button title="Press Me" primary onPress={() => console.log('Pressed')} disabled={false} />
  );
}

extend(
  'Playground',
  render(() => <App />),
);
```

## Props API

| Name     | Type         | Description                                                                                              | Required |
| -------- | ------------ | -------------------------------------------------------------------------------------------------------- | -------- |
| title    | `string`     | Button label text.                                                                                       | ☑️       |
| primary  | `boolean`    | Provides extra visual weight and identifies the primary action in a set of buttons. Defaults to `false`. |          |
| icon     | `IconProps`  | See [Icon](./Icon.md).                                                                                   |          |
| onPress  | `() => void` | Callback when pressed                                                                                    |          |
| disabled | `boolean`    | Disables the button, disallowing interaction.                                                            |          |
