# Select

Select allows merchants to choose one option from a dropdown menu. Consider Select when you have 4 or more options, to avoid creating clutter and make your component more scalable.

| ✅ Do                                      | 🛑 Don't                |
| ------------------------------------------ | ----------------------- |
| Use Select when you have 4 or more options | Have only a single item |

For more guidelines, refer to Polaris' [Select best practices](https://polaris.shopify.com/components/forms/select#section-best-practices).

## Examples

#### Vanilla JavaScript example

```js
import {extend, ExtensionPoint, Select} from '@shopify/argo-admin';

const options = [
  {
    label: 'Cool option',
    value: 'cool-option',
  },
  {
    label: 'Cooler option',
    value: 'cooler-option',
  },
  {
    label: 'Coolest option',
    value: 'coolest-option',
  },
];

extend('Playground', (root) => {
  const select = root.createComponent(Select, {
    label: 'Select an option',
    options,
    labelInline: true,
    onChange: (value) => console.log(value, 'was selected'),
    value: 'cooler-option',
  });

  root.appendChild(select);

  root.mount();
});
```

#### React example

```jsx
import {extend, render, ExtensionPoint, Select} from '@shopify/argo-admin-react';

const options = [
  {
    label: 'Cool option',
    value: 'cool-option',
  },
  {
    label: 'Cooler option',
    value: 'cooler-option',
  },
  {
    label: 'Coolest option',
    value: 'coolest-option',
  },
];

function App() {
  return (
    <Select
      label="Select an option"
      options={options}
      labelInline
      onChange={(value) => console.log(value, 'was selected')}
      value="cooler-option"
    />
  );
}

extend(
  'Playground',
  render(() => <App />),
);
```

## Props API

| Name        | Type              | Description                                                  | Required |
| ----------- | ----------------- | ------------------------------------------------------------ | -------- |
| error       | `string`          | Display an error state                                       |          |
| label       | `string`          | Label for the select.                                        | ☑️       |
| labelInline | `boolean`         | Show the label to the left of the value, inside the control. |          |
| options     | `Option[]`        | Options for the select.                                      | ☑️       |
| onChange    | `(value) => void` | Callback when selection is changed.                          |          |
| value       | `string`          | Value for form input.                                        |          |

### Option

| Name  | Type     | Description                                         | Required |
| ----- | -------- | --------------------------------------------------- | -------- |
| label | `string` | Human-readable text for the option.                 | ☑️       |
| value | `string` | Machine value for the option; passed to `onChange`. | ☑️       |
