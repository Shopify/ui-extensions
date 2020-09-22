# Modal

Modals are overlays that prevent merchants from interacting with the rest of the application until a specific action is taken.

## Implementation

#### Vanilla

```js
import {extend, ExtensionPoint, Modal} from '@shopify/argo-admin';

extend('Admin::Product::SubscriptionPlan::Add', (root) => {
  const modal = root.createComponent(Modal, {});

  modal.appendChild('This is the best extension.');
  root.appendChild(modal);

  root.mount();
});
```

#### React

```jsx
import {extend, render, ExtensionPoint, Modal} from '@shopify/argo-admin-react';

function App() {
  return <Modal>This is the best extension.</Modal>;
}

extend(
  'Admin::Product::SubscriptionPlan::Add',
  render(() => <App />),
);
```

## Props API

| Name             | Type         | Description                        | Required |
| ---------------- | ------------ | ---------------------------------- | -------- |
| open             | `boolean`    | Whether the modal is open .        | ☑️       |
| title            | `string`     | Title content for the modal.       | ☑️       |
| primaryAction    | `Action`     | Modal's primary action.            |          |
| secondaryActions | `Action[]`   | Modal's secondary action(s).       |          |
| onClose          | `() => void` | Callback when the modal is closed. | ☑️       |

### Action

| Name        | Type         | Description                                           | Required |
| ----------- | ------------ | ----------------------------------------------------- | -------- |
| content     | `string`     | Action label text.                                    | ☑️       |
| destructive | `boolean`    | Indicates a dangerous or potentially negative action. |          |
| onAction    | `() => void` | Callback for the action.                              |          |
