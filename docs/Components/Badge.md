# Badge

Badges are used to inform merchants of the status of an object or of an action that’s been taken.

## Implementation

#### Vanilla

```js
import {extend, ExtensionPoint, Badge} from '@shopify/argo-admin';

extend('Admin::Product::SubscriptionPlan::Add', (root) => {
  const badge = root.createComponent(Badge, {
    message: 'Example message',
    status: 'success',
  });

  root.appendChild(badge);
  root.mount();
});
```

#### React

```jsx
import {extend, render, ExtensionPoint, Badge} from '@shopify/argo-admin-react';

function App() {
  return <Badge message="Example message" status="success" />;
}

extend(
  'Admin::Product::SubscriptionPlan::Add',
  render(() => <App />),
);
```

## Props API

| Name    | Type                                                       | Description                                                              | Required |
| ------- | ---------------------------------------------------------- | ------------------------------------------------------------------------ | -------- |
| message | `string`                                                   | The content to display inside the badge.                                 | ☑️       |
| status  | `'success'`, `'info'`, `'attention'`, `'warning'`, `'new'` | Set the colour of the badge for the given status. Defaults to no status. |          |
