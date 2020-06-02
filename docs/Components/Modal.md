# Modal

⚠️ **Incomplete** (not required for MVP)

The Modal component is ...

## Implementation

#### Vanilla

```js
import {ExtensionPoint, render, Modal} from '@shopify/argo-admin';

render(ExtensionPoint.MyExtension, (root) => {
  const modal = root.createComponent(Modal, {});

  modal.appendChild('This is the best extension.');
  root.appendChild(modal);

  root.mount();
});
```

#### React

```jsx
import {ExtensionPoint, Modal} from '@shopify/argo-admin';
import {render} from '@shopify/argo-admin/react';

function App() {
  return <Modal>...</Modal>;
}

render(ExtensionPoint.MyExtension, () => <App />);
```

## Props API
