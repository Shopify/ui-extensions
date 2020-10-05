# Checkbox

Checkboxes are most commonly used to give merchants a way to make a range of selections (zero, one, or multiple).

| ✅ Do                                                  | 🛑 Don't                      |
| ------------------------------------------------------ | ----------------------------- |
| Use Checkboxes to give merchants a multi select choice | Horizontally stack Checkboxes |
| Vertically align Checkboxes                            |                               |

For more guidelines, refer to Polaris' [Checkbox best practices](https://polaris.shopify.com/components/forms/checkbox#section-best-practices).

## Examples

#### Vanilla JavaScript example

```js
import {extend, ExtensionPoint, Checkbox} from '@shopify/argo-admin';

extend('Playground', (root) => {
  const checkbox = root.createComponent(Checkbox, {
    label: 'Opt in to something cool',
    checked: true,
    onChange: () => console.log('Checked'),
  });

  root.appendChild(checkbox);

  root.mount();
});
```

#### React example

```jsx
import {extend, render, ExtensionPoint, Checkbox} from '@shopify/argo-admin-react';

function App() {
  return (
    <Checkbox label="Opt in to something cool" checked onChange={() => console.log('Checked')} />
  );
}

extend(
  'Playground',
  render(() => <App />),
);
```

## Props API

| Name     | Type                | Description                                                                                | Required |
| -------- | ------------------- | ------------------------------------------------------------------------------------------ | -------- |
| label    | `string`            | Label for the checkbox.                                                                    |          |
| checked  | `boolean`           | Checkbox is selected.                                                                      |          |
| value    | `boolean`           | An alias of checked. If both checked and value are define, checked is the source of truth. |          |
| onChange | `(boolean) => void` | Callback when checkbox is toggled.                                                         |          |
