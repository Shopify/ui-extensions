# Radio

Use radio buttons to present each item in a list of options where merchants must make a single selection.

## Examples

#### Vanilla

```js
import {render, ExtensionPoint, RadioButton} from '@shopify/argo-admin';

render(ExtensionPoint.MyExtension, (root) => {
  const radio1 = root.createComponent(RadioButton, {
    label: 'Option 1',
    helpText: 'Help text for option 1.',
    checked: true,
    id: 'option1',
    name: 'greatOptions',
    onChange: () => console.log('Option 1 selected'),
  });
  const radio2 = root.createComponent(RadioButton, {
    label: 'Option 2',
    helpText: 'Help text for option 1.',
    id: 'option2',
    name: 'greatOptions',
    checked: false,
    onChange: () => console.log('Option 2 selected'),
  });

  root.appendChild(radio1);
  root.appendChild(radio2);
  root.mount();
});
```

#### React

```jsx
import {render, ExtensionPoint, RadioButton} from '@shopify/argo-admin-react';

function App() {
  return (
    <>
      <RadioButton
        label="Option 1"
        helpText="Help text for option 1."
        checked
        id="option1"
        name="greatOptions"
        onChange={() => console.log('Option 1 selected')}
      />
      <RadioButton
        label="Option 2"
        helpText="Help text for option 1."
        id="option2"
        name="greatOptions"
        checked={false}
        onChange={() => console.log('Option 2 selected')}
      />
    </>
  );
}

render(ExtensionPoint.MyExtension, () => <App />);
```

## Props API

| Name     | Type                         | Description                            | Required |
| -------- | ---------------------------- | -------------------------------------- | -------- |
| label    | `string`                     | Label for the radio button.            | ☑️        |
| helpText | `string`                     | Additional text to aid in use.         |          |
| checked  | `boolean`                    | Radio button is selected.              | ☑️        |
| id       | `string`                     | Unique ID for radio button.            | ☑️        |
| name     | `string`                     | Name to group radio buttons together.  | ☑️        |
| onChange | `(newValue: string) => void` | Callback when radio button is toggled. | ☑️        |
