# Card

⚠️ **Incomplete** (not required for MVP)

Cards are used to group similar concepts and tasks together to make Shopify easier for merchants to scan, read, and get things done.

## Examples

#### Vanilla

```js
import {render, ExtensionPoint, Card} from '@shopify/argo-admin';

render(ExtensionPoint.MyExtension, (root) => {
  const card = root.createComponent(Card, {});

  card.appendChild('This is the best extension.');
  root.appendChild(card);

  root.mount();
});
```

#### React

```jsx
import {render, ExtensionPoint, Card} from '@shopify/argo-admin-react';

function App() {
  return <Card>...</Card>;
}

render(ExtensionPoint.MyExtension, () => <App />);
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
