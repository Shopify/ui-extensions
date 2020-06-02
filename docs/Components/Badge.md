# Badge

Badges are used to inform merchants of the status of an object or of an action that’s been taken.

## Implementation

#### Vanilla

```js
import {ExtensionPoint, render, Badge} from '@shopify/argo-admin';

render(ExtensionPoint.MyExtension, (root) => {
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
import {ExtensionPoint, Badge} from '@shopify/argo-admin';
import {render} from '@shopify/argo-admin/react';

function App() {
  return <Badge message="Example message" status="success" />;
}

render(ExtensionPoint.MyExtension, () => <App />);
```

## Props API

| Name    | Type                                                       | Description                                       | Required |
| ------- | ---------------------------------------------------------- | ------------------------------------------------- | -------- |
| message | `string`                                                   | The content to display inside the badge.          | ☑️       |
| status  | `'success'`, `'info'`, `'attention'`, `'warning'`, `'new'` | Set the colour of the badge for the given status. Defaults to no status. |          |
