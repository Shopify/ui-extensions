# OptionList

**Note:** This component is note available in Product Subscription extensions. See the [full list of available components](../ExtensionPoints/ProductSubscription/README.md).

Option lists let you create grouped items. This can include single selection or multiple selection of options.

Option lists are styled differently than choice lists and should not be used within a form, but as a standalone menu.

| ✅ Do                                                                 | 🛑 Don't                |
| --------------------------------------------------------------------- | ----------------------- |
| Use OptionList to present either a single choice or multi choice list | Have only a single item |

For more guidelines, refer to Polaris' [Option List best practices](https://polaris.shopify.com/components/lists-and-tables/option-list#section-best-practices).

## Examples

#### Vanilla JavaScript example

```js
import {extend, ExtensionPoint, OptionsList} from '@shopify/argo-admin';

extend('Playground', (root) => {
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

#### React example

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
  'Playground',
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
