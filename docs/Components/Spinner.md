# Spinner

Spinners are used to notify merchants that their action is being processed.

## Examples

#### Vanilla

```js
import {render, ExtensionPoint, Spinner} from '@shopify/argo-admin';

render(ExtensionPoint.MyExtension, (root) => {
  const spinner = root.createComponent(Spinner);
  root.appendChild(spinner);

  setTimeout(() => {
    root.removeChild(spinner);
  }, 2000);

  root.mount();
});
```

#### React

```jsx
import {render, ExtensionPoint, Spinner} from '@shopify/argo-admin-react';

function App() {
  return <Spinner />;
}

render(ExtensionPoint.MyExtension, () => <App />);
```
