# Card

Cards are used to group similar concepts and tasks together to make Shopify easier for merchants to scan, read, and get things done. The action API should be used to create actionable components for the card. Cards should be contained, independent, and individual.

## Behavior

- 📱 Do not nest Cards within another component. This will result in unintended behavior, and will not render correctly

| ✅ Do                                                       | 🛑 Don't                       |
| ----------------------------------------------------------- | ------------------------------ |
| Cards should be at the top level of the component hierarchy | Use too many secondary actions |

For more guidelines, refer to Polaris' [Card best practices](https://polaris.shopify.com/components/structure/card#section-best-practices).

## Examples

#### Vanilla JavaScript example

```js
import {extend, ExtensionPoint, Card} from '@shopify/argo-admin';

extend('Playground', (root) => {
  const card = root.createComponent(Card, {});

  card.appendChild('This is the best extension.');
  root.appendChild(card);

  root.mount();
});
```

#### React example

```jsx
import {extend, render, ExtensionPoint, Card} from '@shopify/argo-admin-react';

function App() {
  return <Card>This is the best extension.</Card>;
}

extend(
  'Playground',
  render(() => <App />),
);
```

## Props API

| Name                   | Type       | Description                         | Required |
| ---------------------- | ---------- | ----------------------------------- | -------- |
| title                  | `string`   | Title content for the card.         |          |
| sectioned              | `boolean`  | Auto wrap card content in sections. |          |
| primaryFooterAction    | `Action`   | Primary action card footer.         |          |
| secondaryFooterActions | `Action[]` | Seconary action(s) in card footer.  |          |

### Action

| Name        | Type         | Description                                           | Required |
| ----------- | ------------ | ----------------------------------------------------- | -------- |
| content     | `string`     | Action label text.                                    | ☑️       |
| destructive | `boolean`    | Indicates a dangerous or potentially negative action. |          |
| onAction    | `() => void` | Callback for the action.                              |          |
