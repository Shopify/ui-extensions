# Checkbox

Checkboxes are most commonly used to give merchants a way to make a range of selections (zero, one, or multiple). They may also be used as a way to have merchants indicate they agree to specific terms and services.

## Examples

#### Vanilla

```js
import {ExtensionPoint, render, Checkbox} from '@shopify/argo-admin';

render(ExtensionPoint.MyExtension, (root) => {
  const checkbox = root.createComponent(Checkbox, {
    label: 'Opt in to something cool',
    checked: true,
    onChange: () => console.log('Checked'),
  });

  root.appendChild(checkbox);

  root.mount();
});
```

#### React

```jsx
import {ExtensionPoint, Checkbox} from '@shopify/argo-admin';
import {render} from '@shopify/argo-admin/react';

function App() {
  return (
    <Checkbox label="Opt in to something cool" checked onChange={() => console.log('Checked')}>
      ...
    </Checkbox>
  );
}

render(ExtensionPoint.MyExtension, () => <App />);
```

## Props API

| Name     | Type                | Description                        | Required |
| -------- | ------------------- | ---------------------------------- | -------- |
| label    | `string`            | Label for the checkbox.            |          |
| checked  | `boolean`           | Checkbox is selected.              |          |
| onChange | `(boolean) => void` | Callback when checkbox is toggled. |          |
