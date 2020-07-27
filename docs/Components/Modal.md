# Modal

⚠️ **Incomplete** (not required for MVP)

The Modal component is ...

## Implementation

#### Vanilla

```js
import {render, ExtensionPoint, Modal} from '@shopify/argo-admin';

render(ExtensionPoint.MyExtension, (root) => {
  const modal = root.createComponent(Modal, {});

  modal.appendChild('This is the best extension.');
  root.appendChild(modal);

  root.mount();
});
```

#### React

```jsx
import {render, ExtensionPoint, Modal} from '@shopify/argo-admin-react';

function App() {
  return <Modal>...</Modal>;
}

render(ExtensionPoint.MyExtension, () => <App />);
```

## Props API
