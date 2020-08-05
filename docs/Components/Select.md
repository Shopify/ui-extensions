# Select

Select lets merchants choose one option from an options menu. Consider select when you have 4 or more options, to avoid cluttering the interface.

## Examples

#### Vanilla

```js
import {render, ExtensionPoint, Select} from '@shopify/argo-admin';

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

render(ExtensionPoint.MyExtension, (root) => {
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

#### React

```jsx
import {render, ExtensionPoint, Select} from '@shopify/argo-admin-react';

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

render(ExtensionPoint.MyExtension, () => <App />);
```

## Props API

| Name        | Type              | Description                                                  | Required |
| ----------- | ----------------- | ------------------------------------------------------------ | -------- |
| error       | `string`          | Display an error state                                       |          |
| label       | `string`          | Label for the select.                                        |          |
| labelInline | `boolean`         | Show the label to the left of the value, inside the control. |          |
| options     | `Option[]`        | Options for the select.                                      | ☑️        |
| onChange    | `(value) => void` | Callback when selection is changed.                          | ☑️        |
| value       | `string`          | Value for form input.                                        | ☑️        |

### Option

| Name  | Type     | Description                                         | Required |
| ----- | -------- | --------------------------------------------------- | -------- |
| label | `string` | Human-readable text for the option.                 | ☑️       |
| value | `string` | Machine value for the option; passed to `onChange`. | ☑️       |
