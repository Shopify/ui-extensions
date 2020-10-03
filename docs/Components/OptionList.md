# OptionList

The option list component lets you create a list of grouped items that merchants can pick from.

## Examples

#### Vanilla

```js
import {extend, ExtensionPoint, OptionsList} from '@shopify/argo-admin';

extend('Admin::Product::SubscriptionPlan::Add', (root) => {
  const options = [
    {label: 'Red', value: 'red', disabled: false},
    {label: 'Green', value: 'green', disabled: false},
    {label: 'Blue', value: 'blue', disabled: false},
  ];

  const list = root.createComponent(OptionList, {});
  root.appendChild(list, {
    title: 'OptionList title',
    options,
    allowMultiple: true,
    onChange: (value) => console.log(`option selected: ${value}`),
  });

  const cardSection = root.createComponent(CardSection, {});
  cardSection.appendChild('This is the best extension.');
  card.appendChild(cardSection);

  root.mount();
});
```

#### React

```jsx
import {extend, render, ExtensionPoint, OptionList} from '@shopify/argo-admin-react';

function App() {
  const options = [
    {label: 'Red', value: 'red', disabled: false},
    {label: 'Green', value: 'green', disabled: false},
    {label: 'Blue', value: 'blue', disabled: false},
  ];

  return (
    <OptionList
      title="OptionList title"
      options={options}
      allowMultiple
      onChange={(value) => console.log(`option selected: ${value}`)}
    />
  );
}

extend(
  'Admin::Product::SubscriptionPlan::Add',
  render(() => <App />),
);
```

## Props API

| Name          | Type                 | Description                               | Required |
| ------------- | -------------------- | ----------------------------------------- | -------- |
| title         | `string`             | List title                                |          |
| selected      | `string[]`           | Values selected                           | ☑️       |
| options       | `OptionDescriptor[]` | Collection of options to be listed        |          |
| allowMultiple | `boolean`            | Allow more than one option to be selected |          |
| onChange      | `(string[]) => void` | Callback when selection is changed        | ☑️       |

## OptionDescriptor

| Name     | Type      | Description                    | Required |
| -------- | --------- | ------------------------------ | -------- |
| value    | `string`  | Option value                   | ☑️       |
| label    | `string`  | Option display label           | ☑️       |
| disabled | `boolean` | Whether the option is disabled |          |
