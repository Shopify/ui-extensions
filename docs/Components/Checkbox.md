# Checkbox

Checkboxes are most commonly used to give merchants a way to make a range of selections (zero, one, or multiple). They may also be used as a way to have merchants indicate they agree to specific terms and services.

## Examples

#### Vanilla

```js
import {extend, ExtensionPoint, Checkbox} from '@shopify/argo-admin';

extend(ExtensionPoint.MyExtension, (root) => {
  const checkbox = root.createComponent(Checkbox, {
    checked: true,
    onChange: () => console.log('Checked'),
  });
  checkbox.appendChild('Opt in to something cool');

  root.appendChild(checkbox);

  root.mount();
});
```

#### React

```jsx
import {extend, render, ExtensionPoint, Checkbox} from '@shopify/argo-admin-react';

function App() {
  return (
    <Checkbox checked onChange={() => console.log('Checked')}>
      Opt in to something cool
    </Checkbox>
  );
}

extend(
  ExtensionPoint.MyExtension,
  render(() => <App />),
);
```

## Props API

| Name     | Type                | Description                        | Required |
| -------- | ------------------- | ---------------------------------- | -------- |
| checked  | `boolean`           | Checkbox is selected.              |          |
| onChange | `(boolean) => void` | Callback when checkbox is toggled. |          |
