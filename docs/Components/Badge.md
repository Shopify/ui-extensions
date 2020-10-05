# Badge

Badges are used to inform merchants of the status of an object, or the status of an action that’s been taken.

| ✅ Do                                                                     | 🛑 Don't                                           |
| ------------------------------------------------------------------------- | -------------------------------------------------- |
| Use Badges to display the status of an object                             | Use Badges without context, or as singular objects |
| Use Badges to represent discrete information                              |                                                    |
| Have clear and helpful relationship to the content or task they represent |                                                    |
| Badges can be stacked horizontally                                        |                                                    |

For more guidelines, refer to Polaris' [Badge best practices](https://polaris.shopify.com/components/images-and-icons/badge#section-best-practices).

## Implementation

#### Vanilla JavaScript example

```js
import {extend, ExtensionPoint, Badge} from '@shopify/argo-admin';

extend('Playground', (root) => {
  const badge = root.createComponent(Badge, {
    message: 'Example message',
    status: 'success',
  });

  root.appendChild(badge);
  root.mount();
});
```

#### React example

```jsx
import {extend, render, ExtensionPoint, Badge} from '@shopify/argo-admin-react';

function App() {
  return <Badge message="Example message" status="success" />;
}

extend(
  'Playground',
  render(() => <App />),
);
```

## Props API

| Name    | Type                                                       | Description                                                              | Required |
| ------- | ---------------------------------------------------------- | ------------------------------------------------------------------------ | -------- |
| message | `string`                                                   | The content to display inside the badge.                                 | ☑️       |
| status  | `'success'`, `'info'`, `'attention'`, `'warning'`, `'new'` | Set the colour of the badge for the given status. Defaults to no status. |          |
