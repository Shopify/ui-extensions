# Modal

Modals are overlays that prevent merchants from interacting with the rest of the application until a specific action is taken. They are disruptive by design, requiring merchants to take an action before they can continue, so use them thoughtfully and sparingly.

| ✅ Do                                                         | 🛑 Don't                                   |
| ------------------------------------------------------------- | ------------------------------------------ |
| Use modals thoughtfully and sparingly                         | Avoid overly complex or multi-step content |
| Use modals with a small and simple set of actions to complete |                                            |

For more guidelines, refer to Polaris' [Modal best practices](https://polaris.shopify.com/components/overlays/modal#section-best-practices).

## Implementation

#### Vanilla JavaScript example

```js
import {extend, ExtensionPoint, Modal} from '@shopify/argo-admin';

extend('Playground', (root) => {
  const modal = root.createComponent(Modal, {});

  modal.appendChild('This is the best extension.');
  root.appendChild(modal);

  root.mount();
});
```

#### React example

```jsx
import {extend, render, ExtensionPoint, Modal} from '@shopify/argo-admin-react';

function App() {
  return <Modal>This is the best extension.</Modal>;
}

extend(
  'Playground',
  render(() => <App />),
);
```

## Props API

| Name             | Type         | Description                        | Required |
| ---------------- | ------------ | ---------------------------------- | -------- |
| open             | `boolean`    | Whether the modal is open.         | ☑️       |
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
