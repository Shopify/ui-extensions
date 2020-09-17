# Radio

Use radio buttons to present each item in a list of options where merchants must make a single selection.

## Examples

#### Vanilla

```js
import {extend, ExtensionPoint, Radio} from '@shopify/argo-admin';

extend(ExtensionPoint.MyExtension, (root) => {
  const radio1 = root.createComponent(Radio, {
    helpText: 'Help text for option 1.',
    checked: true,
    id: 'option1',
    name: 'greatOptions',
    onChange: () => console.log('Option 1 selected'),
  });
  radio1.appendChild('Option 1');

  const radio2 = root.createComponent(Radio, {
    helpText: 'Help text for option 2.',
    id: 'option2',
    name: 'greatOptions',
    checked: false,
    onChange: () => console.log('Option 2 selected'),
  });
  radio2.appendChild('Option 2');

  root.appendChild(radio1);
  root.appendChild(radio2);
  root.mount();
});
```

#### React

```jsx
import {extend, render, ExtensionPoint, Radio} from '@shopify/argo-admin-react';

function App() {
  return (
    <>
      <Radio
        helpText="Help text for option 1."
        checked
        id="option1"
        name="greatOptions"
        onChange={() => console.log('Option 1 selected')}
      >
        Option 1
      </Radio>
      <Radio
        helpText="Help text for option 2."
        id="option2"
        name="greatOptions"
        checked={false}
        onChange={() => console.log('Option 2 selected')}
      />
        Option 2
      </Radio>
    </>
  );
}

extend(
  ExtensionPoint.MyExtension,
  render(() => <App />),
);
```

## Props API

| Name     | Type                         | Description                            | Required |
| -------- | ---------------------------- | -------------------------------------- | -------- |
| helpText | `string`                     | Additional text to aid in use.         |          |
| checked  | `boolean`                    | Radio button is selected.              |          |
| id       | `string`                     | Unique ID for radio button.            |          |
| name     | `string`                     | Name to group radio buttons together.  | ☑️       |
| value    | `string`                     | Value of form input on selected        |          |
| onChange | `(newValue: string) => void` | Callback when radio button is toggled. |          |
